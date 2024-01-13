import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import { UTApi } from "uploadthing/server";
export const utapi = new UTApi();

export async function GET(req:Request ,res:Response)
{
    try{
        const {searchParams} = new URL(req.url);
        const key = searchParams.get('key') ?? "";
        const id = searchParams.get('id') ?? "";
        const deleteResult = await utapi.deleteFiles(key)
        
        console.log("ID => ",id,"KEY => ",key)

        if(deleteResult){
            const mongoClient = await clientPromise;
            // Databse Name
            const db = mongoClient.db("coporate");
            // Table
            const collection = db.collection("blogs");


            const filter = { _id: new ObjectId(id) }; // Replace with the ID of the blog
            const update = { $pull: { Images: { key: key } } }; // Use $pull to remove the image from the array

            const result = await collection.updateOne(filter, update);

            console.log(`Image removed from database: ${result.modifiedCount}`);
        }
               
        // Return the result
        return NextResponse.json("Deleted successfully")
    }catch(e){
        console.log("Failed to fetch Data => ",e);
        return NextResponse.json({ error: 'Failed to fetch data'+e });
    }
}