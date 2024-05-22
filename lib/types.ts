import { Document } from 'mongoose';

export type ModelDocumentWithId<TDocument extends Document> = { id: string } & TDocument;

export type PaginatorableParameters = {
    skip?: number;
    limit?: number;
    currentPage: number;
    search?: string;
    step?: number;
};

export interface PaginationParameters {
    page?: number;
    limit?: number;
    skip?: number;
}

export interface SearchParameter {
    search?: string;
}

export interface SearchablePaginationParameters extends PaginationParameters, SearchParameter {}
