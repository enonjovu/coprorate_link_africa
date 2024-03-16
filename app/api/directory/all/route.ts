import dbConnect from "@/lib/db";
import Directory from "@/models/Directory";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
  try {
    await dbConnect();

    // Fetch the data
    const results = await Directory.find({}).sort({ date: -1 });

    // Return the result
    return NextResponse.json(results);
  } catch (e) {
    console.log("Failed to fetch Data => ", e);
    return NextResponse.json({ error: "Failed to fetch data" + e });
  }
}
