import type { PaginatableParameters, SearchQueryParameters, PaginatedCollection } from '@/app/_db/parameter-types';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';
import type { UserDocument } from '@/lib/document-types';

import config from '@/lib/config';

export type UserParamters = {
    name: String;
    email: String;
    password: String;
    role?: 'user' | 'admin';
};

export default class UserRepository {
    static async get(params: SearchQueryParameters): Promise<UserDocument[]> {
        const queryParameters: any = {};

        const skip = params.skip ?? 0;
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        await connectToDatabase();

        const results = await User.find(queryParameters).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit);

        return results;
    }

    static async getPaginated(params: PaginatableParameters): Promise<PaginatedCollection<UserDocument>> {
        await connectToDatabase();

        const queryParameters: any = {};

        const skip = (params.skip ?? 0) * (params.page - 1);
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        const results = await User.find(queryParameters).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit);

        const count = await UserRepository.count();

        const numberOfPages = Math.ceil(count / limit);

        return { data: results, count, numberOfPages };
    }

    static async count(params: object = {}) {
        await connectToDatabase();

        const itemsCount = await User.countDocuments(params);

        return itemsCount;
    }

    static async getById(id: string): Promise<UserDocument | null> {
        await connectToDatabase();

        const result = await User.findOne({ _id: id });

        return result;
    }

    static async deleteById(id: string) {
        await connectToDatabase();

        const result = await User.findOneAndDelete({ _id: id });

        return result;
    }

    static async create(params: UserParamters) {
        await connectToDatabase();

        const date = Date.now();

        const result = await User.create({
            ...params,
            date,
        });

        return result;
    }

    static async updateById(id: string, params: Partial<UserParamters>) {
        await connectToDatabase();

        const updateData = {
            $set: params,
        };

        const result = await User.updateOne({ _id: id }, updateData);

        return result;
    }
}
