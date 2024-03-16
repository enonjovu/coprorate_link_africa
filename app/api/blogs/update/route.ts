import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function PATCH(req: Request, res: Response) {
  const { id, title, story, category, images, author } = await req.json();
  try {
    await dbConnect();
    const updateData = {
      $set: {
        title: title,
        story: story,
        category: category,
        images: images,
        author: author,
      },
    };

    const result = await Blog.updateOne({ _id: id }, updateData);

    console.log("Matched count:", result.matchedCount);
    console.log("Modified count:", result.modifiedCount);

    // console.log("Body =>  ",{ id, title, story, category, images, author })
    console.log("Result =>  ", result);

    if (result.modifiedCount > 0) {
      return NextResponse.json({ message: "Update successful" });
    } else {
      return NextResponse.json({ message: "No documents were updated" });
    }
  } catch (e) {
    console.log("Failed to fetch Data => ", e);
    return NextResponse.json({ error: "Failed to fetch data" + e });
  }
}
