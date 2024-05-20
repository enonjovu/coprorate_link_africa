import { PathParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import type { ModelDocumentWithId } from './types';
import { Document } from 'mongoose';

export function convertDocumentToModelObject<TDocument extends Document>(
    document?: TDocument | null,
): ModelDocumentWithId<TDocument> | null {
    if (!document) {
        return null;
    }

    const object = document.toObject();

    return {
        ...object,
        id: object._id,
    };
}

export function convertDocumentsToModelObjectCollection<TDocument extends Document>(
    documents: TDocument[],
): Array<ModelDocumentWithId<TDocument> | null> {
    return documents.map((doc) => convertDocumentToModelObject(doc));
}

export function getFormatedDate(date: Date = new Date(Date.now())) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

export function trimText(story: String, from: number = 0, to: number = 8) {
    const words = story.split(' ');
    const trimmedWords = words.slice(from, to);
    const trimmedParagraph = trimmedWords.join(' ');
    return trimmedParagraph;
}

export function checkApplicationInProduction() {
    return process.env.NODE_ENV == 'production';
}

export function createPaginationHandles(params: { count: number; current: number; distribution?: number }) {
    const totalPages = Math.ceil(params.count / (params.distribution ?? 12));

    const currentPage = params.current;

    const pageNumbers = [];
    const offsetNumer = 3;

    for (let index = currentPage - offsetNumer; index <= currentPage + offsetNumer; index++) {
        if (index >= 1 && index <= totalPages) {
            pageNumbers.push(index);
        }
    }

    const prev = currentPage - 1 > 0 ? currentPage - 1 : 1;
    const next = currentPage + 1;

    return {
        prev,
        next,
        current: currentPage,
        total: totalPages,
        pages: pageNumbers,
    };
}
