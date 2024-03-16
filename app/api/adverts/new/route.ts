import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const date = Date.now();
  const { images } = await req.json();
  try {
    await dbConnect();
    const newAd = await Blog.create({ images, date });

    if (newAd) {
      return NextResponse.json({
        status: "true",
        message: "Advert created successfully",
      });
    }
  } catch (err) {
    console.log(`Failed to post Blog ${err}`);
    return NextResponse.json({
      status: "error",
      message: "Something went wrong",
    });
  }
}
