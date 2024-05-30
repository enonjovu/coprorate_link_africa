'use server';

import DirectoryCategoryRepository from '@/app/_db/repositories/DirectoryCategoryRepository';
import { revalidatePath } from 'next/cache';

export async function HandleCreateCategory(name: string) {
    try {
        const data = await DirectoryCategoryRepository.fistOrCreate(name);
        revalidatePath('/admin/categories');

        return { data, ok: true, error: null };
    } catch (error: any) {
        return { data: null, ok: false, error: error.message };
    }
}

export async function HandleDeleteCategory(id: string) {
    try {
        const data = await DirectoryCategoryRepository.deleteById(id);

        revalidatePath('/admin/categories');

        return { data, ok: true, error: null };
    } catch (error: any) {
        return { data: null, ok: false, error: error.message };
    }
}
