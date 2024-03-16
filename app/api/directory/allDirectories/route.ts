import dbConnect from "@/lib/db";
import Directory from "@/models/Directory";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const pageNo = searchParams.get("page");
    const page = pageNo ? parseInt(pageNo) : 1;
    // Fetch the data
    const results = await Directory.find({})
      .sort({ date: -1 })
      .skip(12 * (page - 1))
      .limit(12);
    const itemsCount = await Directory.countDocuments({});

    const data = {
      companies: results,
      itemsCount: itemsCount,
    };
    // Return the result
    return NextResponse.json(data);
  } catch (e) {
    console.log("Failed to fetch Data => ", e);
    return NextResponse.json({ error: "Failed to fetch data" + e });
  }
}
