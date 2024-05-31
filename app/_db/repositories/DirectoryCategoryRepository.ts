import DirectoryCategory from '@/models/DirectoryCategory';
import connectToDatabase from '@/lib/db';

import type { PaginatableParameters, SearchQueryParameters, PaginatedCollection } from '@/app/_db/parameter-types';
import type { DirectoryCategoryDocument, DocumentUrlObject, ImageRecord } from '@/lib/document-types';

import config from '@/lib/config';

export type DirectoryCategoryParamters = {
    name: string;
};

export type DirectoryCategoryType = {
    name: string;
    id: string;
};

export default class DirectoryCategoryRepository {
    static async getList({ limit = 20 }: { limit?: number }) {
        await connectToDatabase();

        const results = await DirectoryCategory.find({}).sort({ date: -1, createdAt: -1 }).limit(limit);

        const categoriesList = results.map((cat) => ({ id: cat.id, name: cat.name }));

        return categoriesList;
    }

    static async get(params: SearchQueryParameters): Promise<DirectoryCategoryDocument[]> {
        const queryParameters: any = {};

        const skip = params.skip ?? 0;
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        await connectToDatabase();

        const results = await DirectoryCategory.find(queryParameters)
            .sort({ date: -1, createdAt: -1 })
            .skip(skip)
            .limit(limit);

        return results;
    }

    static async fistOrCreate(name: string) {
        await connectToDatabase();

        const date = Date.now();

        const label = name.trim();

        let category = await DirectoryCategory.findOne({ name: label });

        if (!category) {
            category = await DirectoryCategory.create({
                name: label,
                date,
            });
        }

        return category;
    }

    static async getPaginated(
        params: PaginatableParameters<{ category?: string }>,
    ): Promise<PaginatedCollection<DirectoryCategoryDocument>> {
        await connectToDatabase();

        const queryParameters: any = {};

        const skip = (params.skip ?? 0) * (params.page - 1);
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        if (params.options?.category) {
            queryParameters['category'] = params.options?.category;
        }

        const results = await DirectoryCategory.find(queryParameters)
            .sort({ date: -1, createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const count = await DirectoryCategoryRepository.count();

        const numberOfPages = Math.ceil(count / limit);

        return { data: results, count, numberOfPages };
    }

    static async count(params: object = {}) {
        await connectToDatabase();

        const itemsCount = await DirectoryCategory.countDocuments(params);

        return itemsCount;
    }

    static async getById(id: string): Promise<DirectoryCategoryDocument | null> {
        await connectToDatabase();

        const result = await DirectoryCategory.findOne({ _id: id });

        return result;
    }

    static async deleteById(id: string) {
        await connectToDatabase();

        const result = await DirectoryCategory.findOneAndDelete({ _id: id });

        return result;
    }

    static async updateById(id: string, params: Partial<DirectoryCategoryParamters>) {
        await connectToDatabase();

        const updateData = {
            $set: params,
        };

        const result = await DirectoryCategory.updateOne({ _id: id }, updateData);

        return result;
    }

    static async getRelatedTo(id: string, params: object = {}, options: { limit?: number } = {}) {
        const limit = options.limit ?? 4;

        const result = await DirectoryCategory.find(params)
            .where('_id')
            .ne(id)
            .sort({ createdAt: -1, date: -1 })
            .limit(limit);

        return result;
    }
}
