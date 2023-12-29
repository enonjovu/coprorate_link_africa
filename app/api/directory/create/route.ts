import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function POST (req:Request){
    const date = Date.now();
    const {
        name,
        email,
        description,
        phone,
        address,
        website,
        lat,
        lon,
        logo
    } = await req.json();
    try{
        const mongoClient = await clientPromise;
        // Databse Name
        const db = mongoClient.db("coporate");

        // Table
        const collection = db.collection("directories")

        const newDirectory = await collection.insertOne(
            {
                name,
                email,
                description,
                phone,
                address,
                website,
                lat,
                lon,
                logo
            }
        );

        if(newDirectory){
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