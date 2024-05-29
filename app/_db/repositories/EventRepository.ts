import type { PaginatableParameters, SearchQueryParameters, PaginatedCollection } from '@/app/_db/parameter-types';
import connectToDatabase from '@/lib/db';
import Event from '@/models/Event';
import type { EventDocument, ImageRecord } from '@/lib/document-types';

import config from '@/lib/config';

export type EventParamters = {
    title: string;
    images: Array<ImageRecord>;
    description: string;
    eventDate: string;
    time: string;
    venue: string;
    enquiries_link?: string | null;
};

export default class EventRepository {
    static async get(params: SearchQueryParameters): Promise<EventDocument[]> {
        const queryParameters: any = {};

        const skip = params.skip ?? 0;
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        const results = await Event.find(queryParameters).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit);

        return results;
    }

    static async getPaginated(params: PaginatableParameters): Promise<PaginatedCollection<EventDocument>> {
        await connectToDatabase();

        const queryParameters: any = {};

        const skip = (params.skip ?? 0) * (params.page - 1);
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        const results = await Event.find(queryParameters).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit);

        const count = await EventRepository.count();

        const numberOfPages = Math.ceil(count / limit);

        return { data: results, count, numberOfPages };
    }

    static async count(params: object = {}) {
        await connectToDatabase();

        const itemsCount = await Event.countDocuments(params);

        return itemsCount;
    }

    static async getById(id: string): Promise<EventDocument | null> {
        await connectToDatabase();

        const result = await Event.findOne({ _id: id });

        return result;
    }

    static async deleteById(id: string) {
        await connectToDatabase();

        const result = await Event.findOneAndDelete({ _id: id });

        return result;
    }

    static async create(params: EventParamters) {
        await connectToDatabase();

        const date = Date.now();

        const result = await Event.create({
            ...params,
            date,
        });

        return result;
    }

    static async updateById(id: string, params: Partial<EventParamters>) {
        await connectToDatabase();

        const updateData = {
            $set: params,
        };

        const result = await Event.updateOne({ _id: id }, updateData);

        return result;
    }
}
