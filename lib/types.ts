import { Document } from 'mongoose';

export type ModelDocumentWithId<TDocument extends Document> = { id: string } & TDocument;

export type PaginatorableParameters = {
    skip?: number;
    limit?: number;
    currentPage: number;
    search?: string;
};
