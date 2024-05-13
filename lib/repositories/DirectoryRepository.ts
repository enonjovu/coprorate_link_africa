import Directory from '@/models/Directory';
import type { PaginatorableParameters } from '../types';
import connectToDatabase from '@/lib/db';

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
};

export async function getDirectories(params: PaginatorableParameters) {
    await connectToDatabase();

    const queryParameters: any = {};

    if (params.search) {
        queryParameters['$text'] = { $search: params.search ? params.search : '' };
    }

    const results = await Directory.find(queryParameters)
        .sort({ date: -1 })
        .skip(params.skip ?? 12 * (params.currentPage - 1))
        .limit(params.limit ?? 12);

    return results;
}

export async function getDirectoriesCount() {
    await connectToDatabase();
    const itemsCount = await Directory.countDocuments({});

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
