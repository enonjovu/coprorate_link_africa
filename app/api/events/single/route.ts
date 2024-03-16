import dbConnect from "@/lib/db";
import Event from "@/models/Event";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      // Handle the case where id is missing or null
      return NextResponse.json({ error: "Missing event ID" });
    }

    // Fetch the data
    const results = await Event.find({ _id: id });

    const result = [];
    const formatdDate = async (date: Date) => {
      const newDate = new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      return newDate;
    };

    if (results) {
      const event = results[0];

      result.push({
        id: event._id,
        title: event.title,
        description: event.description,
        images: event.images,
        eventDate: event.eventDate,
        time: event.time,
        venue: event.venue,
        date: await formatdDate(event.date),
      });
    }

    // Return the result
    return NextResponse.json(result);
  } catch (e) {
    console.log("Failed to fetch Data => ", e);
    return NextResponse.json({ error: "Failed to fetch data" + e });
  }
}
