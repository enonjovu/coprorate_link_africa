// models/Directory.ts
import type { DirectoryDocument } from '@/lib/document-types';
import mongoose from 'mongoose';
import { Schema, model, type Model as ModelType } from 'mongoose';

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
    },
);

const Directory =
    (mongoose.models.Directory as ModelType<DirectoryDocument>) ||
    model<DirectoryDocument>('Directory', DirectorySchema);

export default Directory;
