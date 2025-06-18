import type { PaginatableParameters, SearchQueryParameters, PaginatedCollection } from '@/app/_db/parameter-types';
import connectToDatabase from '@/lib/db';
import Advert from '@/models/Advert';
import type { AdvertDocument, AdvertVariant, ImageRecord } from '@/lib/document-types';

import config from '@/lib/config';

export type AdvertParamters = {
    images: Array<ImageRecord>;
    variant: AdvertVariant;
};

export default class AdvertRepository {
    static async get(params: SearchQueryParameters<{ variant?: AdvertVariant }>): Promise<AdvertDocument[]> {
        const queryParameters: any = {};

        const skip = params.skip ?? 0;
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        if (params.options?.variant) {
            queryParameters['variant'] = params.options?.variant;
        }

        await connectToDatabase();

        const results = await Advert.find(queryParameters).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit);

        return results;
    }

    static async getPaginated(params: PaginatableParameters): Promise<PaginatedCollection<AdvertDocument>> {
        await connectToDatabase();

        const queryParameters: any = {};

        const skip = (params.skip ?? 0) * (params.page - 1);
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        const results = await Advert.find(queryParameters).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit);

        const count = await AdvertRepository.count();

        const numberOfPages = Math.ceil(count / limit);

        return { data: results, count, numberOfPages };
    }

    static async count(params: object = {}) {
        await connectToDatabase();

        const itemsCount = await Advert.countDocuments(params);

        return itemsCount;
    }

    static async getById(id: string): Promise<AdvertDocument | null> {
        await connectToDatabase();

        const result = await Advert.findOne({ _id: id });

        return result;
    }

    static async deleteById(id: string) {
        await connectToDatabase();

        const result = await Advert.findOneAndDelete({ _id: id });

        return result;
    }

    static async create(params: AdvertParamters) {
        await connectToDatabase();

        const date = Date.now();

        const result = await Advert.create({
            ...params,
            date,
        });

        return result;
    }

    static async updateById(id: string, params: Partial<AdvertParamters>) {
        await connectToDatabase();

        const updateData = {
            $set: params,
        };

        const result = await Advert.updateOne({ _id: id }, updateData);

        return result;
    }

    static async getOneRandom(params: { variant: AdvertVariant }) {
        await connectToDatabase();

        const record = await Advert.aggregate([
            {
                $match: params,
            },
            { $sample: { size: 1 } },
        ]);

        const result = record[0] ?? null;

        return result;
    }

    static async getOneLatest(params: { variant: AdvertVariant }) {}

    static async getRandom(params: { variant: AdvertVariant; limit?: number }) {}
    static async getLatest(params: { variant: AdvertVariant; limit?: number }) {}
}
