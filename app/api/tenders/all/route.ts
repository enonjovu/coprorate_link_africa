import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req:Request ,res:Response)
{
    try{
        const mongoClient = await clientPromise;
        // Databse Name
        const db = mongoClient.db("pets");

        // Table
        const collection = db.collection("tenders");

        // Fetch the data
        const results = await collection
        .find({})
        .sort({ date: -1 }) 
        .limit(12)
        .toArray();

        // Return the result
        return NextResponse.json(results)
    }catch(e){
        console.log("Failed to fetch Data => ",e);
        return NextResponse.json({ error: 'Failed to fetch data'+e });
    }
}