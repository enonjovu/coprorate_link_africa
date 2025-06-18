import type { PaginatableParameters, SearchQueryParameters, PaginatedCollection } from '@/app/_db/parameter-types';
import connectToDatabase from '@/lib/db';
import IndividiualProfile from '@/models/IndividiualProfile';
import type { IndividiualProfileDocument, ImageRecord, SocialPlatform } from '@/lib/document-types';

import config from '@/lib/config';

import DirectoryCategory from '@/models/DirectoryCategory';
import DirectoryCategoryRepository from './DirectoryCategoryRepository';

export type IndividiualProfileParamters = {
    name: string;
    email: string;
    biography: string;
    phone: string;
    address: string;
    website: string;
    profile_image?: Array<ImageRecord>;
    social_handlers?: Array<SocialPlatform>;
    category?: string | null;
    profession: string;
};

export default class IndividiualProfileRepository {
    static async get(params: SearchQueryParameters): Promise<IndividiualProfileDocument[]> {
        const queryParameters: any = {};

        const skip = params.skip ?? 0;
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        const results = await IndividiualProfile.find(queryParameters)
            .sort({ date: -1, createdAt: -1 })
            .skip(skip)
            .limit(limit);

        return results;
    }

    static async getPaginated(params: PaginatableParameters): Promise<PaginatedCollection<IndividiualProfileDocument>> {
        await connectToDatabase();

        const queryParameters: any = {};

        const skip = (params.skip ?? 0) * (params.page - 1);
        const limit = params.limit ?? config.DEFAULT_PAGINATION_ITEM_COUNT;

        if (params.search) {
            queryParameters['$text'] = { $search: params.search ? params.search : '' };
        }

        const results = await IndividiualProfile.find(queryParameters)
            .sort({ date: -1, createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const count = await IndividiualProfileRepository.count();

        const numberOfPages = Math.ceil(count / limit);

        return { data: results, count, numberOfPages };
    }

    static async count(params: object = {}) {
        await connectToDatabase();

        const itemsCount = await IndividiualProfile.countDocuments(params);

        return itemsCount;
    }

    static async getById(id: string): Promise<IndividiualProfileDocument | null> {
        await connectToDatabase();

        const result = await IndividiualProfile.findOne({ _id: id });

        return result;
    }

    static async deleteById(id: string) {
        await connectToDatabase();

        const result = await IndividiualProfile.findOneAndDelete({ _id: id });

        return result;
    }

    static async create(params: IndividiualProfileParamters) {
        await connectToDatabase();

        const date = Date.now();

        const profile = new IndividiualProfile({
            ...params,
            date,
        });

        const result = await profile.save();

        return result;
    }

    static async updateById(id: string, params: Partial<IndividiualProfileParamters>) {
        await connectToDatabase();

        const updateData = {
            $set: params,
        };

        const result = await IndividiualProfile.updateOne({ _id: id }, updateData);

        return result;
    }

    static getPropeties(IndividiualProfile: IndividiualProfileDocument): Partial<IndividiualProfileParamters> {
        return {
            name: IndividiualProfile.name,
            email: IndividiualProfile.email,
            biography: IndividiualProfile.biography,
            phone: IndividiualProfile.phone,
            address: IndividiualProfile.address,
            website: IndividiualProfile.website,
            profession: IndividiualProfile.profession,

            profile_image: IndividiualProfile.profile_image,
            social_handlers: IndividiualProfile.social_handlers,
            category: IndividiualProfile.category?.name,
        };
    }

    static getPropetiesWithId(
        IndividiualProfile: IndividiualProfileDocument,
    ): Partial<IndividiualProfileParamters> & { id: string } {
        return {
            name: IndividiualProfile.name,
            email: IndividiualProfile.email,
            biography: IndividiualProfile.biography,
            phone: IndividiualProfile.phone,
            address: IndividiualProfile.address,
            website: IndividiualProfile.website,
            profession: IndividiualProfile.profession,

            profile_image: IndividiualProfile.profile_image,
            social_handlers: IndividiualProfile.social_handlers,
            category: IndividiualProfile.category?.name,

            id: IndividiualProfile.id,
        };
    }
}
