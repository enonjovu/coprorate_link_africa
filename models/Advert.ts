// models/Advert.ts
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const AdvertSchema = new Schema(
  {
    images: Array,
  },
  {
    timestamps: true,
  }
);

const Advert = mongoose.models.Advert || model("Advert", AdvertSchema);

export default Advert;
