'use server';

import TenderRepository from '@/app/_db/repositories/TenderRepository';
import { revalidatePath } from 'next/cache';

export async function handleDeleteTender(id: string) {
    try {
        await TenderRepository.deleteById(id);

        revalidatePath('/admin/news');

        return {
            data: true,
            errors: null,
        };
    } catch (error: unknown) {
        console.log('Failed to delete the tender!');

        console.log(error);

        return {
            data: null,
            errors: 'Something went wrong',
        };
    }
}
