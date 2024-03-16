import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    const pageNo = searchParams.get("page");
    const page = pageNo ? parseInt(pageNo) : 1;
    await dbConnect();

    // Fetch the data
    const results = await Blog.find({})
      .sort({ date: -1 })
      .skip(12 * (page - 1))
      .limit(12);
    const itemsCount = await Blog.countDocuments({});

    const data = {
      ads: results,
      itemsCount: itemsCount,
    };
    // Return the result
    return NextResponse.json(data);
  } catch (e) {
    console.log("Failed to fetch Data => ", e);
    return NextResponse.json({ error: "Failed to fetch data" + e });
  }
}
