import type { PaginatableParameters, SearchQueryParameters, PaginatedCollection } from '@/app/_db/parameter-types';
import connectToDatabase from '@/lib/db';
import Tender from '@/models/Tender';
import type { TenderDocument } from '@/lib/document-types';

import config from '@/lib/config';

export type TenderParamters = {
    title: string;
    company: string;
    description: string;
    requirements: Array<string>;
};

export default class TenderRepository {
    static async get(params: SearchQueryParameters): Promise<TenderDocument[]> {
        const queryParameters: any = {};

        const skip = params.skip ?? 0;
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        const results = await Tender.find(queryParameters).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit);

        return results;
    }

    static async getPaginated(params: PaginatableParameters): Promise<PaginatedCollection<TenderDocument>> {
        await connectToDatabase();

        const queryParameters: any = {};

        const skip = (params.skip ?? 0) * (params.page - 1);
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        const results = await Tender.find(queryParameters).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit);

        const count = await TenderRepository.count();

        const numberOfPages = Math.ceil(count / limit);

        return { data: results, count, numberOfPages };
    }

    static async count(params: object = {}) {
        await connectToDatabase();

        const itemsCount = await Tender.countDocuments(params);

        return itemsCount;
    }

    static async getById(id: string): Promise<TenderDocument | null> {
        await connectToDatabase();

        const result = await Tender.findOne({ _id: id });

        return result;
    }

    static async deleteById(id: string) {
        await connectToDatabase();

        const result = await Tender.findOneAndDelete({ _id: id });

        return result;
    }

    static async create(params: TenderParamters) {
        await connectToDatabase();

        const date = Date.now();

        const result = await Tender.create({
            ...params,
            date,
        });

        return result;
    }

    static async updateById(id: string, params: Partial<TenderParamters>) {
        await connectToDatabase();

        const updateData = {
            $set: params,
        };

        const result = await Tender.updateOne({ _id: id }, updateData);

        return result;
    }
}
