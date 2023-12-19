import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function POST (req:Request){
    const {title,story,category,images} = await req.json();
    try{
        const mongoClient = await clientPromise;
        // Databse Name
        const db = mongoClient.db("coporate");

        // Table
        const collection = db.collection("blogs")

        const newBlog = await collection.insertOne({
            title,story,category,images
        });

        if(newBlog){
            return NextResponse.json({
                status:"true",
                message:"Blog created successfully"
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