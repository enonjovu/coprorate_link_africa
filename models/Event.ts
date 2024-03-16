// models/Event.ts
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const EventSchema = new Schema(
  {
    title: String,
    images: Array,
    description: String,
    eventDate: String,
    time: String,
    venue: String,
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.models.Event || model("Event", EventSchema);

export default Event;
