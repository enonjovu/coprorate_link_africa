import dbConnect from "@/lib/db";
import Tender from "@/models/Tender";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
  try {
    await dbConnect();
    // Fetch the data
    const tenders = await Tender.find({}).sort({ date: -1 });

    if (tenders) {
      // Return the result
      return NextResponse.json(tenders);
    }
  } catch (e) {
    console.log("Failed to fetch Data => ", e);
    return NextResponse.json({ error: "Failed to fetch data" + e });
  }
}
