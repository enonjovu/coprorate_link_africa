// models/IndividiualProfile.ts
import type { IndividiualProfileDocument } from '@/lib/document-types';
import mongoose from 'mongoose';
import { Schema, model, type Model as ModelType } from 'mongoose';

const IndividiualProfileSchema = new Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        biography: {
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

        promotion_adverts: Array,

        profile_image: Array,

        social_handlers: Array,

        date: { type: Date, required: true },

        category: mongoose.Schema.Types.ObjectId,
    },
    {
        timestamps: true,
    },
);

const IndividiualProfile =
    (mongoose.models.IndividiualProfile as ModelType<IndividiualProfileDocument>) ||
    model<IndividiualProfileDocument>('IndividiualProfile', IndividiualProfileSchema);

export default IndividiualProfile;
