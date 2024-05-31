import type { PaginatableParameters, SearchQueryParameters, PaginatedCollection } from '@/app/_db/parameter-types';
import connectToDatabase from '@/lib/db';
import Blog from '@/models/Blog';
import type { BlogDocument, DocumentUrlObject, ImageRecord } from '@/lib/document-types';

import config from '@/lib/config';

export type BlogParamters = {
    title: string;
    story: string;
    category: string;
    images: Array<ImageRecord>;
    author: string;
    image_alt: string;
};

export default class BlogRepository {
    static async get(params: SearchQueryParameters<{ category?: string }>): Promise<BlogDocument[]> {
        const queryParameters: any = {};

        const skip = params.skip ?? 0;
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        if (params.options?.category) {
            queryParameters['category'] = params.options?.category;
        }

        await connectToDatabase();

        const results = await Blog.find(queryParameters).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit);

        return results;
    }

    static async getPaginated(
        params: PaginatableParameters<{ category?: string }>,
    ): Promise<PaginatedCollection<BlogDocument>> {
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

        const results = await Blog.find(queryParameters).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit);

        const count = await BlogRepository.count();

        const numberOfPages = Math.ceil(count / limit);

        return { data: results, count, numberOfPages };
    }

    static async count(params: object = {}) {
        await connectToDatabase();

        const itemsCount = await Blog.countDocuments(params);

        return itemsCount;
    }

    static async getById(id: string): Promise<BlogDocument | null> {
        await connectToDatabase();

        const result = await Blog.findOne({ _id: id });

        return result;
    }

    static async deleteById(id: string) {
        await connectToDatabase();

        const result = await Blog.findOneAndDelete({ _id: id });

        return result;
    }

    static async create(params: BlogParamters) {
        await connectToDatabase();

        const date = Date.now();

        const result = await Blog.create({
            ...params,
            date,
        });

        return result;
    }

    static async updateById(id: string, params: Partial<BlogParamters>) {
        await connectToDatabase();

        const updateData = {
            $set: params,
        };

        const result = await Blog.updateOne({ _id: id }, updateData);

        return result;
    }

    static async getRelatedTo(id: string, params: object = {}, options: { limit?: number } = {}) {
        const limit = options.limit ?? 4;

        const result = await Blog.find(params).where('_id').ne(id).sort({ createdAt: -1, date: -1 }).limit(limit);

        return result;
    }
}
