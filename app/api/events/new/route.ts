import dbConnect from "@/lib/db";
import Event from "@/models/Event";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const date = Date.now();
  const { title, images, eventDate, time, venue, description } =
    await req.json();
  try {
    await dbConnect();
    const newEvent = await Event.create({
      title,
      images,
      description,
      eventDate,
      time,
      venue,
      date,
    });

    if (newEvent) {
      return NextResponse.json({
        status: "true",
        message: "Event created successfully",
      });
    }
  } catch (err) {
    console.log(`Failed to post Event ${err}`);
    return NextResponse.json({
      status: "error",
      message: "Something went wrong",
    });
  }
}
