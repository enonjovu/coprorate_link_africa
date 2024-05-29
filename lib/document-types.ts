import type { Document } from 'mongoose';

export type DocumentUrlObject = {
    key: string;
    url: string;
};

export type HasTimestamp = {
    createdAt: Date;
    updatedAt: Date;
};

export type ImageRecord = {
    name: string;
    size: string;
    key: string;
    serverData: string;
    url: string;
};

export interface AdvertDocument extends Document, HasTimestamp {
    images: Array<ImageRecord>;
    variant: 'normal' | 'top' | 'side';
    date: number;
}

export interface BlogDocument extends Document, HasTimestamp {
    title: string;
    story: string;
    category: string;
    images: Array<ImageRecord>;
    author: string;
    image_alt: string;
    date: number;
}

export interface DirectoryDocument extends Document, HasTimestamp {
    name: string;
    email: string;
    description: string;
    phone: string;
    address: string;
    website: string;
    lat?: string;
    lon?: string;
    logo: Array<ImageRecord>;
    iframe?: string;
    promotion_adverts?: Array<ImageRecord>;
    category?: DirectoryCategoryDocument;
    date: number;
}

export interface DirectoryCategoryDocument extends Document, HasTimestamp {
    name: string;
    date: number;
}

export interface EventDocument extends Document, HasTimestamp {
    title: string;
    images: Array<ImageRecord>;
    description: string;
    eventDate: string;
    time: string;
    venue: string;
    enquiries_link?: string | null;
    date: number;
}

export interface LeaderDocument extends Document, HasTimestamp {
    name: string;
    images: Array<ImageRecord>;
    description: string;
    date: number;
}

export interface TenderDocument extends Document, HasTimestamp {
    title: string;
    description: string;
    requirements: Array<string>;
    date: number;
}

export interface UserDocument extends Document, HasTimestamp {
    name: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
}
