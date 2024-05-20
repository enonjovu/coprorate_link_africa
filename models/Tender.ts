// models/Tender.ts
import type { TenderDocument } from '@/lib/document-types';
import mongoose from 'mongoose';
import { Schema, model, type Model as ModelType } from 'mongoose';

const TenderSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        requiremnets: Array,
    },
    {
        timestamps: true,
    },
);

const Tender = (mongoose.models.Tender as ModelType<TenderDocument>) || model<TenderDocument>('Tender', TenderSchema);

export default Tender;
