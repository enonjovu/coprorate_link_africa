import dbConnect from "@/lib/db";
import Tender from "@/models/Tender";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const date = Date.now();
  const { title, company, description, requirements } = await req.json();
  try {
    await dbConnect();
    const newDirectory = await Tender.create({
      title,
      company,
      description,
      requirements,
      date,
    });

    if (newDirectory) {
      return NextResponse.json({
        status: "true",
        message: "Tender created successfully",
      });
    }
  } catch (err) {
    console.log(`Failed to post Tender ${err}`);
    return NextResponse.json({
      status: "error",
      message: "Something went wrong",
    });
  }
}
