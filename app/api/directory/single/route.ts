import dbConnect from "@/lib/db";
import Directory from "@/models/Directory";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      // Handle the case where id is missing or null
      return NextResponse.json({ error: "Missing company ID" });
    }

    // Fetch the data
    const results = await Directory.find({ _id: id });
    console.log("Compnay from backend => ", results);
    // Return the result
    return NextResponse.json(results);
  } catch (e) {
    console.log("Failed to fetch Data => ", e);
    return NextResponse.json({ error: "Failed to fetch data" + e });
  }
}
