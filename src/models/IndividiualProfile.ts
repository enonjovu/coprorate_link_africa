// models/IndividiualProfile.ts
import type { IndividiualProfileDocument } from '@/lib/document-types';
import mongoose from 'mongoose';
import { Schema, model, type Model as ModelType } from 'mongoose';

const IndividiualProfileSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        biography: {
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

        profession: {
            type: String,
            required: true,
        },

        website: {
            type: String,
            required: false,
        },

        promotion_adverts: Array,

        profile_image: {
            type: Array,
            required: true,
        },

        social_handlers: Array,

        date: { type: Date, required: true },

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'DirectoryCategory',
        },
    },
    {
        timestamps: true,
    },
);

const IndividiualProfile =
    (mongoose.models.IndividiualProfile as ModelType<IndividiualProfileDocument>) ||
    model<IndividiualProfileDocument>('IndividiualProfile', IndividiualProfileSchema);

export default IndividiualProfile;
