import type { PaginatableParameters, SearchQueryParameters, PaginatedCollection } from '@/app/_db/parameter-types';
import connectToDatabase from '@/lib/db';
import Directory from '@/models/Directory';
import type { DirectoryDocument, ImageRecord } from '@/lib/document-types';

import config from '@/lib/config';

import DirectoryCategory from '@/models/DirectoryCategory';
import DirectoryCategoryRepository from './DirectoryCategoryRepository';

export type DirectoryParamters = {
    name: string;
    email: string;
    description: string;
    phone: string;
    address: string;
    website: string;
    lat?: string;
    lon?: string;
    logo: Array<ImageRecord>;
    iframe?: string;
    promotion_adverts?: Array<ImageRecord>;
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
            params.category = (await DirectoryCategoryRepository.fistOrCreate(params.category)).id;
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

        if (params.category) {
            params.category = (await DirectoryCategoryRepository.fistOrCreate(params.category)).id;
        } else {
            params.category = null;
        }

        const updateData = {
            $set: params,
        };

        const result = await Directory.updateOne({ _id: id }, updateData);

        return result;
    }

    static getPropeties(directory: DirectoryDocument): Partial<DirectoryParamters> {
        return {
            name: directory.name,
            email: directory.email,
            description: directory.description,
            phone: directory.phone,
            address: directory.address,
            website: directory.website,
            lon: directory.lon,
            lat: directory.lat,
            logo: directory.logo,
            iframe: directory.iframe,
            promotion_adverts: directory.promotion_adverts,
        };
    }

    static getPropetiesWithId(directory: DirectoryDocument): Partial<DirectoryParamters> & { id: string } {
        return {
            name: directory.name,
            email: directory.email,
            description: directory.description,
            phone: directory.phone,
            address: directory.address,
            website: directory.website,
            lon: directory.lon,
            lat: directory.lat,
            logo: directory.logo,
            iframe: directory.iframe,
            promotion_adverts: directory.promotion_adverts,
            id: directory.id,
        };
    }
}
