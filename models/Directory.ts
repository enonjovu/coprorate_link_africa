// models/Directory.ts
import type { DirectoryDocument } from '@/lib/document-types';
import mongoose from 'mongoose';
import { Schema, model, type Model as ModelType } from 'mongoose';

const DirectorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        website: {
            type: String,
            required: true,
        },
        lat: {
            type: String,
            required: true,
        },
        lon: {
            type: String,
            required: true,
        },
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
