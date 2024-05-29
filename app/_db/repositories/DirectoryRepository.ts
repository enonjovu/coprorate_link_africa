import type { PaginatableParameters, SearchQueryParameters, PaginatedCollection } from '@/app/_db/parameter-types';
import connectToDatabase from '@/lib/db';
import Directory from '@/models/Directory';
import type { DirectoryDocument } from '@/lib/document-types';

import config from '@/lib/config';

import DirectoryCategory from '@/models/DirectoryCategory';

type DirectoryParamters = {
    name: String;
    email: String;
    description: String;
    phone: String;
    address: String;
    website: String;
    lat: String;
    lon: String;
    logo: String;
    iframe?: string;
    category?: string | null;
};

export default class DirectoryRepository {
    static async get(params: SearchQueryParameters): Promise<DirectoryDocument[]> {
        const queryParameters: any = {};

        const skip = params.skip ?? 0;
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        const results = await Directory.find(queryParameters).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit);

        return results;
    }

    static async getPaginated(params: PaginatableParameters): Promise<PaginatedCollection<DirectoryDocument>> {
        await connectToDatabase();

        const queryParameters: any = {};

        const skip = (params.skip ?? 0) * (params.page - 1);
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        const results = await Directory.find(queryParameters).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit);

        const count = await DirectoryRepository.count();

        const numberOfPages = Math.ceil(count / limit);

        return { data: results, count, numberOfPages };
    }

    static async count(params: object = {}) {
        await connectToDatabase();

        const itemsCount = await Directory.countDocuments(params);

        return itemsCount;
    }

    static async getById(id: string): Promise<DirectoryDocument | null> {
        await connectToDatabase();

        const result = await Directory.findOne({ _id: id });

        return result;
    }

    static async deleteById(id: string) {
        await connectToDatabase();

        const result = await Directory.findOneAndDelete({ _id: id });

        return result;
    }

    static async create(params: DirectoryParamters) {
        await connectToDatabase();

        const date = Date.now();

        if (params.category) {
            let category = await DirectoryCategory.findOne({ name: params.category.trim() });

            if (!category) {
                category = await DirectoryCategory.create({ name: params.category.trim() });
            }

            params.category = category._id as string;
        } else {
            params.category = null;
        }

        const result = await Directory.create({
            ...params,
            date,
        });

        return result;
    }

    static async updateById(id: string, params: Partial<DirectoryParamters>) {
        await connectToDatabase();

        const updateData = {
            $set: params,
        };

        const result = await Directory.updateOne({ _id: id }, updateData);
    }
}
