import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req:Request ,res:Response)
{
    try{
        const {searchParams} = new URL(req.url);
        const id = searchParams.get('id');

        const mongoClient = await clientPromise;
        // Databse Name
        const db = mongoClient.db("coporate");

        // Table
        const collection = db.collection("directories");
        if (!id) {
            // Handle the case where id is missing or null
            return NextResponse.json({ error: 'Missing company ID' });
        }

        // Fetch the data
        const results = await collection
        .find({_id: new ObjectId(id)})
        .toArray();

        // Return the result
        return NextResponse.json(results)
    }catch(e){
        console.log("Failed to fetch Data => ",e);
        return NextResponse.json({ error: 'Failed to fetch data'+e });
    }
}