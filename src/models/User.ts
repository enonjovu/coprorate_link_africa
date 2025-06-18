// models/User.ts
import type { UserDocument } from '@/lib/document-types';
import mongoose from 'mongoose';
import { Schema, model, type Model as ModelType } from 'mongoose';

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: [true, 'Email already exists'],
            required: [true, 'Email required.'],
        },
        password: { type: String, required: [true, 'Password required.'] },
        role: { type: String, required: true, default: 'user' },
    },
    {
        timestamps: true,
    },
);

const User = (mongoose.models.User as ModelType<UserDocument>) || model<UserDocument>('User', UserSchema);

export default User;
