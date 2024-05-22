// models/Leader.ts
import type { LeaderDocument } from '@/lib/document-types';
import mongoose from 'mongoose';
import { Schema, model, type Model as ModelType } from 'mongoose';

const LeaderSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        images: Array,
        description: {
            type: String,
            required: true,
        },
        date: { type: Date, default: () => Date.now },
    },
    {
        timestamps: true,
    },
);

const Leader = (mongoose.models.Leader as ModelType<LeaderDocument>) || model<LeaderDocument>('Leader', LeaderSchema);

export default Leader;
