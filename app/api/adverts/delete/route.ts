import clientPromise from "@/lib/mongodb";
import { utapi } from "@/utils/utapicomponent";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function DELETE(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const mongoClient = await clientPromise;
    // Databse Name
    const db = mongoClient.db("coporate");

    // Table
    const collection = db.collection("adverts");
    if (!id) {
      // Handle the case where id is missing or null
      return NextResponse.json({ error: "Missing blog ID" });
    }
    const results = await collection.find({ _id: new ObjectId(id) }).toArray();
    if (results[0]) {
      const advert = results[0];
      for (let i = 0; i < advert.images.length; i++) {
        const image = advert.images[i].key;
        await utapi.deleteFiles(image);
      }
      await collection.findOneAndDelete({ _id: new ObjectId(id) });
    }
    // Return the result
    if (results) {
      return NextResponse.json(true);
    }
  } catch (e) {
    console.log("Failed to fetch Data => ", e);
    return NextResponse.json({ error: "Failed to fetch data" + e });
  }
}
