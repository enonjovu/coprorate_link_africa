'use server';

import AdvertRepository from '@/app/_db/repositories/AdvertRepository';
import { deleteImageFiles } from '@/lib/helpers';
import { revalidatePath } from 'next/cache';

export async function HandleDeleteAdvert(id: string) {
    try {
        const data = await AdvertRepository.deleteById(id);

        if (data) {
            deleteImageFiles(data.images);
        }

        revalidatePath('/admin/ads');

        return { data, ok: true, error: null };
    } catch (error: any) {
        return { data: null, ok: false, error: error.message };
    }
}
