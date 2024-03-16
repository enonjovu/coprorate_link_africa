import dbConnect from "@/lib/db";
import Tender from "@/models/Tender";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    await dbConnect();
    if (!id) {
      // Handle the case where id is missing or null
      return NextResponse.json({ error: "Missing company ID" });
    }

    // Fetch the data
    const results = await Tender.find({ _id: id });

    if (!results) {
      return NextResponse.json({ error: "Missing Tender ID" });
    }

    // Return the result
    return NextResponse.json(results);
  } catch (e) {
    console.log("Failed to fetch Data => ", e);
    return NextResponse.json({ error: "Failed to fetch data" + e });
  }
}
