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
