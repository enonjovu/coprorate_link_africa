// models/Leader.ts
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const LeaderSchema = new Schema(
  {
    name: String,
    images: Array,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Leader = mongoose.models.Leader || model("Leader", LeaderSchema);

export default Leader;
