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
        const db = mongoClient.db("simplyNews");

        // Table
        const collection = db.collection("blogs");

        // Fetch the data
        const results = await collection
        .find({_id: new ObjectId(id)})
        .toArray();        
        
        // Create an empty array to store converted blogs
        let convertedBlogs = [];
        const convertImage = (image : Buffer, imageType : String) : String => {
            return `data:${imageType};charset=utf-8;base64,${image.toString('base64')}`;
        };

        if (results.length > 0) {
            // Loop through each blog
            for (const blog of results) {
                // Convert image for each blog
                const convertedImage = convertImage(blog.image,blog.imageType);
                // Create an object for each blog with converted image
                const convertedBlog = {
                    id:blog._id,
                    title: blog.title,
                    story: blog.story,
                    category: blog.category,
                    image: convertedImage,
                };

                // Add the converted blog to the array
                convertedBlogs.push(convertedBlog);
            }
        }

        
        // Return the result
        return NextResponse.json(convertedBlogs)
    }catch(e){
        console.log("Failed to fetch Data => ",e);
        return NextResponse.json({ error: 'Failed to fetch data'+e });
    }
}