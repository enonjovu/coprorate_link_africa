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
        const collection = db.collection("blogs");
        if (!id) {
            // Handle the case where id is missing or null
            return NextResponse.json({ error: 'Missing blog ID' });
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
            const blog = results[0];

            const relatedArticles = await collection
            .find({category:blog.category})
            .toArray();

            result.push({
                id:blog._id,
                title:blog.title,
                category:blog.category,
                story:blog.story,
                images:blog.images,
                date: await formatdDate(blog.date),
                author:blog.author,
                related:relatedArticles,
            })
        }
        
        // Return the result
        return NextResponse.json(result)
    }catch(e){
        console.log("Failed to fetch Data => ",e);
        return NextResponse.json({ error: 'Failed to fetch data'+e });
    }
}