import connectToDatabase from '@/lib/db';
import bcrypt from 'bcrypt';
import { getUserByEmail, createUser } from '../repositories/UserRepository';

type CreateUserAccountParameters = {
    name: string;
    email: string;
    password: string;
    role?: 'user' | 'admin';
};

type GetUserParameters = {
    email: string;
    password: string;
};

export async function createUserAccount(params: CreateUserAccountParameters) {
    await connectToDatabase();

    const exists = await getUserByEmail(params.email);

    if (!exists) {
        throw new Error(`This email already belongs to a registered user.`);
    }

    params.password = await bcrypt.hash(params.password, 10);
    params.role = params.role ? params.role : 'user';

    const result = createUser(params);

    return result;
}

export async function getUser(params: GetUserParameters) {
    await connectToDatabase();

    const user = await getUserByEmail(params.email);

    if (!user) {
        throw new Error(`details provided dont match any registered user.`);
    }

    const approved = await bcrypt.compare(params.password, user.password);

    if (!approved) {
        throw new Error(`details provided dont match any registered user.`);
    }

    return user;
}
