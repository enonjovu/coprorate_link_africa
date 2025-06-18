// models/Directory.ts
import type { DirectoryDocument } from '@/lib/document-types';
import mongoose from 'mongoose';
import { Schema, model, type Model as ModelType } from 'mongoose';
import DirectoryCategory from './DirectoryCategory';

const DirectorySchema = new Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        description: {
            type: String,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
        website: {
            type: String,
        },
        lat: {
            type: String,
        },
        lon: {
            type: String,
        },
        iframe: String,
        promotion_adverts: Array,
        logo: Array,
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'DirectoryCategory',
        },
        date: { type: Date, required: true },
    },
    {
        timestamps: true,
    },
);

const Directory =
    (mongoose.models.Directory as ModelType<DirectoryDocument>) ||
    model<DirectoryDocument>('Directory', DirectorySchema);

export default Directory;
