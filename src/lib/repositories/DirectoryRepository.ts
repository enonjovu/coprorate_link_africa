import Directory from '@/models/Directory';
import type { PaginatorableParameters, SearchablePaginationParameters } from '../types';
import connectToDatabase from '@/lib/db';
import config from '../config';
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

export async function getPaginatedDirectories(params: SearchablePaginationParameters) {
    await connectToDatabase();

    const queryParams: any = {};

    if (params.search) {
        queryParams['$text'] = { $search: params.search ? params.search : '' };
    }

    const page = params?.page ?? 1;
    const limit = params?.limit ?? config.DEFAULT_PAGINATION_COUNT;

    const skip = (page - 1) * limit;

    const collection = await Directory.find(queryParams)
        .populate('category')
        .sort({ created_at: -1, date: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit);

    const total = await Directory.countDocuments();

    const numberOfPages = Math.ceil(total / limit);

    return {
        collection,
        total,
        numberOfPages,
    };
}

export async function getDirectories(params: { category?: string } & PaginatorableParameters) {
    await connectToDatabase();

    const queryParameters: any = {};

    if (params.search) {
        queryParameters['$text'] = { $search: params.search ? params.search : '' };
    }

    if (params.category) {
        queryParameters['category'] = params.category;
    }

    const results = await Directory.find(queryParameters)
        .sort({ date: -1 })
        .skip(params.skip ?? 12 * (params.currentPage - 1))
        .limit(params.limit ?? 12);

    return results;
}

export async function getDirectoriesCount(options: object = {}) {
    await connectToDatabase();
    const itemsCount = await Directory.countDocuments(options);

    return itemsCount;
}

export async function getDirectoryById(id: string) {
    await connectToDatabase();

    const result = await Directory.findOne({ _id: id });

    return result;
}

export async function deleteDirectoryById(id: string) {
    await connectToDatabase();

    const result = await Directory.findOneAndDelete({ _id: id });

    return result;
}

export async function createDirectory(params: DirectoryParamters) {
    await connectToDatabase();

    const date = Date.now();

    if (params.category) {
        let category = await DirectoryCategory.findOne({ name: params.category.trim() });

        if (!category) {
            category = await DirectoryCategory.create({ name: params.category.trim() });
        }

        params.category = category.id;
    } else {
        params.category = null;
    }

    const result = await Directory.create({
        ...params,
        date,
    });

    return result;
}

export async function updateDirectoryById(id: string, params: Partial<DirectoryParamters>) {
    await connectToDatabase();

    const updateData = {
        $set: params,
    };

    const result = await Directory.updateOne({ _id: id }, updateData);
}
