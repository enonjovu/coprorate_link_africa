import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    const pageNo = searchParams.get("page");
    const page = pageNo ? parseInt(pageNo) : 1;
    const mongoClient = await clientPromise;
    // Databse Name
    const db = mongoClient.db("coporate");

    // Table
    const collection = db.collection("topAds");

    // Fetch the data
    const results = await collection
      .find({})
      .sort({ date: -1 })
      .skip(12 * (page - 1))
      .limit(12)
      .toArray();
    const itemsCount = await collection.countDocuments({});

    const data = {
      ads: results,
      itemsCount: itemsCount,
    };
    // Return the result
    return NextResponse.json(data);
  } catch (e) {
    console.log("Failed to fetch Data => ", e);
    return NextResponse.json({ error: "Failed to fetch data" + e });
  }
}
