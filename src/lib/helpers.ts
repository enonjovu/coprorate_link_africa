import type { ModelDocumentWithId } from './types';
import { Document } from 'mongoose';
import { utapi } from '@/utils/utapicomponent';
import { ImageRecord } from './document-types';

export function convertDocumentToModelObject<TDocument extends Document>(
    document: TDocument,
): ModelDocumentWithId<TDocument> {
    const object = document.toJSON();

    const obj: any = {
        ...object,
        id: object._id as string,
    };

    return obj;
}

export function convertDocumentsToModelObjectCollection<TDocument extends Document>(
    documents: TDocument[],
): Array<ModelDocumentWithId<TDocument>> {
    return documents.map((doc) => convertDocumentToModelObject(doc));
}

export function getFormatedDate(date: any = new Date(Date.now())) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

export function trimText(story: String, from: number = 0, to: number = 8, stripHtml: boolean = true) {
    const words = story.split(' ');
    const trimmedWords = words.slice(from, to);
    let trimmedParagraph = trimmedWords.join(' ');

    if (stripHtml) {
        trimmedParagraph = trimmedParagraph.replace(/<[^>]*>/g, '');
    }

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

export async function deleteImageFiles(data: ImageRecord[]) {
    for (const imageFile of data) {
        await utapi.deleteFiles(imageFile.key);
    }
}
