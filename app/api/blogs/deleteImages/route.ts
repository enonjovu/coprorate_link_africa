import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import { UTApi } from "uploadthing/server";
export const utapi = new UTApi();

export async function GET(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get("key") ?? "";
    const id = searchParams.get("id") ?? "";

    // Check for required parameters
    if (!key || !id) {
      throw new Error("Missing required parameters: key and id");
    }

    // Delete the image from UploadThing (uncomment when ready)
    // const deleteResult = await utapi.deleteFiles(key);

    // Connect to MongoDB
    const mongoClient = await clientPromise;
    const db = mongoClient.db("coporate"); // Correct database name?
    const collection = db.collection("blogs");

    // Update the document in MongoDB
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $pull: { images: [{ key:key}] } }
    );
    

    // Log the update result for debugging
    console.log("MongoDB update result:", result);

    // Return a response based on the update outcome
    if (result.modifiedCount > 0) {
      return NextResponse.json("Image deleted successfully");
    } else {
      return NextResponse.json({ error: "Image not found or already deleted" });
    }

  } catch (e) {
    console.error("Error deleting image:", e);
    return NextResponse.json({ error: "Failed to delete image" });
  }
}
