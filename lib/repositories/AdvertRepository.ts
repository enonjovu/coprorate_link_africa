import Advert from '@/models/Advert';
import type { PaginatorableParameters, SearchablePaginationParameters } from '../types';
import connectToDatabase from '@/lib/db';
import ApplicationConfiguration from '../config';

export async function getPaginatedAdverts(params: SearchablePaginationParameters) {
    await connectToDatabase();

    const queryParams: any = {};

    if (params.search) {
        queryParams['$text'] = { $search: params.search ? params.search : '' };
    }

    const page = params?.page ?? 1;
    const limit = params?.limit ?? ApplicationConfiguration.DEFAULT_PAGINATION_COUNT;

    const skip = (page - 1) * limit;

    const collection = await Advert.find(queryParams).sort({ created_at: -1 }).skip(skip).limit(limit);
    const totalResults = await Advert.countDocuments();

    const numberOfPages = Math.ceil(totalResults / limit);

    return {
        collection,
        numberOfPages,
    };
}

export async function getAdverts(params: PaginatorableParameters) {
    await connectToDatabase();

    const results = await Advert.find({})
        .sort({ date: -1 })
        .skip(params.skip ?? 12 * (params.currentPage - 1))
        .limit(params.limit ?? 12);

    return results;
}

export async function getAllAdverts() {
    await connectToDatabase();

    const results = await Advert.find({}).sort({ date: -1 });

    return results;
}

export async function getAdvertsCount() {
    await connectToDatabase();

    const itemsCount = await Advert.countDocuments({});
    return itemsCount;
}

export async function deleteAdvertById(id: string) {
    await connectToDatabase();

    const result = await Advert.findOneAndDelete({ _id: id });
    return result;
}

export async function createNewAdvert(images: any) {
    await connectToDatabase();

    const date = Date.now();

    const result = await Advert.create({ images, date });

    return result;
}
