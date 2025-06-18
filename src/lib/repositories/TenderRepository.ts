import Tender from '@/models/Tender';
import type { PaginatorableParameters } from '../types';
import connectToDatabase from '@/lib/db';

type TenderParamters = {
    title: String;
    company: String;
    description: String;
    requirements: String;
};

export async function getTenders(params: PaginatorableParameters) {
    await connectToDatabase();

    const queryParameters: any = {};

    if (params.search) {
        queryParameters['$text'] = { $search: params.search ? params.search : '' };
    }

    const results = await Tender.find(queryParameters)
        .sort({ date: -1 })
        .skip(params.skip ?? 12 * (params.currentPage - 1))
        .limit(params.limit ?? 12);

    return results;
}

export async function getTendersCount() {
    await connectToDatabase();
    const itemsCount = await Tender.countDocuments({});

    return itemsCount;
}

export async function getTenderById(id: string) {
    await connectToDatabase();

    const result = await Tender.findOne({ _id: id });

    return result;
}

export async function deleteTenderById(id: string) {
    await connectToDatabase();

    const result = await Tender.findOneAndDelete({ _id: id });

    return result;
}

export async function createTender(params: TenderParamters) {
    await connectToDatabase();

    const date = Date.now();

    const result = await Tender.create({
        ...params,
        date,
    });

    return result;
}

export async function updateTenderById(id: string, params: Partial<TenderParamters>) {
    await connectToDatabase();

    const updateData = {
        $set: params,
    };

    const result = await Tender.updateOne({ _id: id }, updateData);
}
