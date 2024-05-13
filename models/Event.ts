// models/Event.ts
import type { EventDocument } from '@/lib/document-types';
import mongoose from 'mongoose';
import { Schema, model, type Model as ModelType } from 'mongoose';

const EventSchema = new Schema(
    {
        title: String,
        images: Array,
        description: String,
        eventDate: String,
        time: String,
        venue: String,
    },
    {
        timestamps: true,
    },
);

const Event = (mongoose.models.Event as ModelType<EventDocument>) || model<EventDocument>('Event', EventSchema);

export default Event;
