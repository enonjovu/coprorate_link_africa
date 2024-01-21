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
        const collection = db.collection("events");
        if (!id) {
            // Handle the case where id is missing or null
            return NextResponse.json({ error: 'Missing event ID' });
        }

        // Fetch the data
        const results = await collection
        .find({_id: new ObjectId(id)})
        .toArray();
        
        const result = [];
        const formatdDate = async (date:Date)=>{
            const newDate = new Date(date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            });
            return newDate;
        }

        if (results){
            const event = results[0];

            result.push({
                id:event._id,
                title:event.title,
                description:event.description,
                images:event.images,
                eventDate:event.eventDate,
                time:event.time,
                venue:event.venue,
                date: await formatdDate(event.date)
            })
        }
        
        // Return the result
        return NextResponse.json(result)
    }catch(e){
        console.log("Failed to fetch Data => ",e);
        return NextResponse.json({ error: 'Failed to fetch data'+e });
    }
}