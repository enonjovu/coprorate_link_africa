import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function PATCH(req: Request, res: Response) {
    const { id,title,description,eventDate,time,venue} = await req.json();
    try {
        const mongoClient = await clientPromise;
        const db = mongoClient.db("coporate");
        const collection = db.collection("events");

        const updateData = {
            $set: {
                title,description,eventDate,time,venue
            }
        };

        const result = await collection.updateOne({ _id: new ObjectId(id) }, updateData);

        console.log('Matched count:', result.matchedCount);
        console.log('Modified count:', result.modifiedCount);

        // console.log("Body =>  ",{ id, title, story, category, images, author })
        console.log("Result =>  ",result)

        if (result.modifiedCount > 0) {
            return NextResponse.json({ message: "Update successful" });
        } else {
            return NextResponse.json({ message: "No documents were updated" });
        }
    } catch (e) {
        console.log("Failed to fetch Data => ", e);
        return NextResponse.json({ error: 'Failed to fetch data' + e });
    }
}
