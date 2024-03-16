import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    // Fetch the data
    const results = await Blog.find({ category: category }).sort({ date: -1 });

    // Create an empty array to store converted blogs
    const convertedBlogs = [];

    const trimStory = async (story: String) => {
      const words = story.split(" ");
      const trimmedWords = words.slice(0, 8);
      const trimmedParagraph = trimmedWords.join(" ");
      return trimmedParagraph;
    };

    if (results.length > 0) {
      // Loop through each blog
      for (const blog of results) {
        // Convert image for each blog
        const story = await trimStory(blog.story);
        // Create an object for each blog with converted image
        const convertedBlog = {
          id: blog._id,
          title: blog.title,
          category: blog.category,
          story: story,
          image: blog.images[0],
        };

        // Add the converted blog to the array
        convertedBlogs.push(convertedBlog);
      }
    }

    console.log("Category => ", category);

    // Return the result
    return NextResponse.json(convertedBlogs);
  } catch (e) {
    console.log("Failed to fetch Data => ", e);
    return NextResponse.json({ error: "Failed to fetch data" + e });
  }
}
