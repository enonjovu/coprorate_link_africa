import type { PaginatableParameters, SearchQueryParameters, PaginatedCollection } from '@/app/_db/parameter-types';
import connectToDatabase from '@/lib/db';
import Leader from '@/models/Leader';
import type { LeaderDocument } from '@/lib/document-types';

import config from '@/lib/config';

type LeaderParamters = {
    title: string;
    company: string;
    description: string;
    requirements: string;
};

export default class LeaderRepository {
    static async get(params: SearchQueryParameters): Promise<LeaderDocument[]> {
        const queryParameters: any = {};

        const skip = params.skip ?? 0;
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        const results = await Leader.find(queryParameters).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit);

        return results;
    }

    static async getPaginated(params: PaginatableParameters): Promise<PaginatedCollection<LeaderDocument>> {
        await connectToDatabase();

        const queryParameters: any = {};

        const skip = (params.skip ?? 0) * (params.page - 1);
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        const results = await Leader.find(queryParameters).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit);

        const count = await LeaderRepository.count();

        const numberOfPages = Math.ceil(count / limit);

        return { data: results, count, numberOfPages };
    }

    static async count(params: object = {}) {
        await connectToDatabase();

        const itemsCount = await Leader.countDocuments(params);

        return itemsCount;
    }

    static async getById(id: string): Promise<LeaderDocument | null> {
        await connectToDatabase();

        const result = await Leader.findOne({ _id: id });

        return result;
    }

    static async deleteById(id: string) {
        await connectToDatabase();

        const result = await Leader.findOneAndDelete({ _id: id });

        return result;
    }

    static async create(params: LeaderParamters) {
        await connectToDatabase();

        const date = Date.now();

        const result = await Leader.create({
            ...params,
            date,
        });

        return result;
    }

    static async updateById(id: string, params: Partial<LeaderParamters>) {
        await connectToDatabase();

        const updateData = {
            $set: params,
        };

        const result = await Leader.updateOne({ _id: id }, updateData);
    }
}
