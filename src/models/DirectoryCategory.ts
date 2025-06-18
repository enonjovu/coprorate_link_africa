// models/Directory.ts
import type { DirectoryCategoryDocument } from '@/lib/document-types';
import mongoose from 'mongoose';
import { Schema, model, type Model as ModelType } from 'mongoose';

const categorySchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
});

const DirectoryCategory =
    (mongoose.models.DirectoryCategory as ModelType<DirectoryCategoryDocument>) ||
    model<DirectoryCategoryDocument>('DirectoryCategory', categorySchema);

export default DirectoryCategory;
