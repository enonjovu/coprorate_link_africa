import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function POST (req:Request){
    const date = Date.now();
    const {title,images,description} = await req.json();
    try{
        const mongoClient = await clientPromise;
        // Databse Name
        const db = mongoClient.db("coporate");

        // Table
        const collection = db.collection("events")

        const newEvent = await collection.insertOne({
            title,images,description,date
        });

        if(newEvent){
            return NextResponse.json({
                status:"true",
                message:"Event created successfully"
            });
        }
    }
    catch(err){
        console.log(`Failed to post Blog ${err}`);
        return NextResponse.json({
            status:"error",
            message:"Something went wrong"
        })
    }
}