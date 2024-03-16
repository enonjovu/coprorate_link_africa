// models/Blog.ts
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const BlogSchema = new Schema(
  {
    title: String,
    story: String,
    category: String,
    images: {
      type: Array,
      of: Object, // Assuming images are stored as URLs
    },
    author: String,
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models.Blog || model("Blog", BlogSchema);

export default Blog;
