import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
    const { title, story, category, images, author } = await req.json();
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id') ?? "";

        const mongoClient = await clientPromise;
        // Databse Name
        const db = mongoClient.db("coporate");
        // Table
        const collection = db.collection("blogs");

        const filter = { _id: new ObjectId(id) };
        const updateData = { $set: { title, story, category, images, author } };

        const result = await collection.updateOne(filter, updateData);

        if (result) {
            // Return the result
            return NextResponse.json({ message: "Upadte successfull" })
        }
    } catch (e) {
        console.log("Failed to fetch Data => ", e);
        return NextResponse.json({ error: 'Failed to fetch data' + e });
    }
}