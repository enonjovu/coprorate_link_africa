import Leader from '@/models/Leader';
import type { PaginatorableParameters } from '../types';
import connectToDatabase from '@/lib/db';

type LeaderParamters = {
    name: String;
    description: String;
};

export async function getLeaders(params: PaginatorableParameters) {
    await connectToDatabase();

    const queryParameters: any = {};

    if (params.search) {
        queryParameters['$text'] = { $search: params.search ? params.search : '' };
    }

    const results = await Leader.find(queryParameters)
        .sort({ date: -1 })
        .skip(params.skip ?? 12 * (params.currentPage - 1))
        .limit(params.limit ?? 12);

    return results;
}

export async function getLeadersCount() {
    await connectToDatabase();
    const itemsCount = await Leader.countDocuments({});

    return itemsCount;
}

export async function getLeaderById(id: string) {
    await connectToDatabase();

    const result = await Leader.findOne({ _id: id });

    return result;
}

export async function deleteLeaderById(id: string) {
    await connectToDatabase();

    const result = await Leader.findOneAndDelete({ _id: id });

    return result;
}

export async function createLeader(params: LeaderParamters) {
    await connectToDatabase();

    const date = Date.now();

    const result = await Leader.create({
        ...params,
        date,
    });

    return result;
}

export async function updateLeaderById(id: string, params: Partial<LeaderParamters>) {
    await connectToDatabase();

    const updateData = {
        $set: params,
    };

    const result = await Leader.updateOne({ _id: id }, updateData);
}
