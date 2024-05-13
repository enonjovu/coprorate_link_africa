import Advert from '@/models/Advert';
import type { PaginatorableParameters } from '../types';
import connectToDatabase from '@/lib/db';

export async function getAdverts(params: PaginatorableParameters) {
    await connectToDatabase();

    const results = await Advert.find({})
        .sort({ date: -1 })
        .skip(params.skip ?? 12 * (params.currentPage - 1))
        .limit(params.limit ?? 12);

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
