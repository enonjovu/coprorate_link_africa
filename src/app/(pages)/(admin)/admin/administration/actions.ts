'use server';
import { revalidatePath } from 'next/cache';
import UserRepository from '@/app/_db/repositories/UserRepository';

export async function HandleUserDelete(id: string) {
    try {
        const data = await UserRepository.deleteById(id);

        revalidatePath('/admin/administration', 'page');

        return { data, ok: true, error: null };
    } catch (error: any) {
        return { data: null, ok: false, error: error.message };
    }
}
