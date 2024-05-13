// models/Blog.ts
import type { BlogDocument } from '@/lib/document-types';
import mongoose from 'mongoose';
import { Schema, model, type Model as ModelType } from 'mongoose';

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
    },
);

const Blog = (mongoose.models.Blog as ModelType<BlogDocument>) || model<BlogDocument>('Blog', BlogSchema);

export default Blog;
