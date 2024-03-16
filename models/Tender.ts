// models/Tender.ts
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const TenderSchema = new Schema(
  {
    title: String,
    description: String,
    requiremnets: Array,
  },
  {
    timestamps: true,
  }
);

const Tender = mongoose.models.Tender || model("Tender", TenderSchema);

export default Tender;
