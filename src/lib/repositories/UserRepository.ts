import User from '@/models/User';
import type { PaginatorableParameters } from '../types';
import connectToDatabase from '@/lib/db';

type UserParamters = {
    name: String;
    email: String;
    password: String;
    role?: 'user' | 'admin';
};

export async function getUsers(params: PaginatorableParameters) {
    await connectToDatabase();

    const queryParameters: any = {};

    if (params.search) {
        queryParameters['$text'] = { $search: params.search ? params.search : '' };
    }

    const results = await User.find(queryParameters)
        .sort({ date: -1 })
        .skip(params.skip ?? 12 * (params.currentPage - 1))
        .limit(params.limit ?? 12);

    return results;
}

export async function getUsersCount() {
    await connectToDatabase();
    const itemsCount = await User.countDocuments({});

    return itemsCount;
}

export async function getUserById(id: string) {
    await connectToDatabase();

    const result = await User.findOne({ _id: id });

    return result;
}

export async function getUserByEmail(email: string) {
    await connectToDatabase();

    const result = await User.findOne({ email });

    return result;
}

export async function deleteUserById(id: string) {
    await connectToDatabase();

    const result = await User.findOneAndDelete({ _id: id });

    return result;
}

export async function createUser(params: UserParamters) {
    await connectToDatabase();

    const date = Date.now();

    const result = await User.create({
        ...params,
        date,
        role: params.role ?? 'user',
    });

    return result;
}

export async function updateUserById(id: string, params: Partial<UserParamters>) {
    await connectToDatabase();

    const updateData = {
        $set: params,
    };

    const result = await User.updateOne({ _id: id }, updateData);
}
