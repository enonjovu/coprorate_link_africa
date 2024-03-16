import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      // Handle the case where id is missing or null
      return NextResponse.json({ error: "Missing blog ID" });
    }

    // Fetch the data
    const results = await Blog.find({ _id: id });

    const result = [];
    const formatdDate = async (date: Date) => {
      const newDate = new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      return newDate;
    };

    if (results) {
      const blog = results[0];

      result.push({
        id: blog._id,
        title: blog.title,
        category: blog.category,
        story: blog.story,
        images: blog.images,
        author: blog.author,
      });
    }

    // Return the result
    return NextResponse.json(result);
  } catch (e) {
    console.log("Failed to fetch Data => ", e);
    return NextResponse.json({ error: "Failed to fetch data" + e });
  }
}
