import type { Document } from 'mongoose';

export type DocumentUrlObject = {
    key: string;
    url: string;
};

export interface AdvertDocument extends Document {
    images: Array<DocumentUrlObject>;
}

export interface BlogDocument extends Document {
    title: string;
    story: string;
    category: string;
    images: Array<DocumentUrlObject>;
    author: string;
}

export interface DirectoryDocument extends Document {
    name: string;
    email: string;
    description: string;
    phone: string;
    address: string;
    website: string;
    lat: string;
    lon: string;
    logo: Array<DocumentUrlObject>;
}

export interface EventDocument extends Document {
    title: string;
    images: Array<DocumentUrlObject>;
    description: string;
    eventDate: string;
    time: string;
    venue: string;
}

export interface LeaderDocument extends Document {
    name: string;
    images: Array<DocumentUrlObject>;
    description: string;
}

export interface TenderDocument extends Document {
    title: string;
    description: string;
    requiremnets: Array<DocumentUrlObject>;
}

export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
}
