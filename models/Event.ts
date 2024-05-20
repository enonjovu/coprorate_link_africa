// models/Event.ts
import type { EventDocument } from '@/lib/document-types';
import mongoose from 'mongoose';
import { Schema, model, type Model as ModelType } from 'mongoose';

const EventSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        images: Array,
        description: {
            type: String,
            required: true,
        },
        eventDate: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        venue: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Event = (mongoose.models.Event as ModelType<EventDocument>) || model<EventDocument>('Event', EventSchema);

export default Event;
