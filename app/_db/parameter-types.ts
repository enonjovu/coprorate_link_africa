import { Document } from 'mongoose';

export interface QueryParameters {
    skip?: number;
    limit?: number;
}

export interface SearchQueryParameters<TOptions = {}> extends QueryParameters {
    search?: string;
    options?: TOptions;
}

export interface PaginatableParameters<TOptions = {}> extends SearchQueryParameters<TOptions> {
    page: number;
}

export interface PaginatedCollection<TDocument extends Document> {
    data: TDocument[];
    count: number;
    numberOfPages: number;
}
