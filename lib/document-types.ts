import type { Document } from 'mongoose';

export type DocumentUrlObject = {
    key: string;
    url: string;
};

export type ImageRecord = {
    name: string;
    size: string;
    key: string;
    serverData: string;
    url: string;
};

export interface AdvertDocument extends Document {
    images: Array<ImageRecord>;
}

export interface BlogDocument extends Document {
    title: string;
    story: string;
    category: string;
    images: Array<ImageRecord>;
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
    logo: Array<ImageRecord>;
}

export interface EventDocument extends Document {
    title: string;
    images: Array<ImageRecord>;
    description: string;
    eventDate: string;
    time: string;
    venue: string;
}

export interface LeaderDocument extends Document {
    name: string;
    images: Array<ImageRecord>;
    description: string;
}

export interface TenderDocument extends Document {
    title: string;
    description: string;
    requirements: Array<string>;
}

export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
}
