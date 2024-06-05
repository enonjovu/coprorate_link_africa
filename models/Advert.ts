// models/Advert.ts
import type { AdvertDocument, AdvertVariant } from '@/lib/document-types';
import mongoose from 'mongoose';
import { Schema, model, type Model as ModelType } from 'mongoose';

export const AdvertVariantList: AdvertVariant[] = ['top', 'side', 'banner', 'normal'];

const AdvertSchema = new Schema(
    {
        images: Array,
        variant: {
            type: String,
            required: true,
            default: 'normal',
        },
        date: {
            type: Date,
            required: true,
        },
        link: {
            required: false,
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

const Advert = (mongoose.models.Advert as ModelType<AdvertDocument>) || model<AdvertDocument>('Advert', AdvertSchema);

export default Advert;
