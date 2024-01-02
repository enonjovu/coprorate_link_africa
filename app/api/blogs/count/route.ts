import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req:Request ,res:Response)
{
    try{
        const mongoClient = await clientPromise;
        // Databse Name
        const db = mongoClient.db("coporate");

        // Table
        const collection = db.collection("blogs");
        const itemsCount = await collection.countDocuments({});
        
        // Return the result
        return NextResponse.json(itemsCount)
    }catch(e){
        console.log("Failed to fetch Data => ",e);
        return NextResponse.json({ error: 'Failed to fetch data'+e });
    }
}