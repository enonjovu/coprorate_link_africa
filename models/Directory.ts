// models/Directory.ts
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const DirectorySchema = new Schema(
  {
    name: String,
    email: String,
    description: String,
    phone: String,
    address: String,
    website: String,
    lat: String,
    lon: String,
    logo: Array,
  },
  {
    timestamps: true,
  }
);

const Directory =
  mongoose.models.Directory || model("Directory", DirectorySchema);

export default Directory;
