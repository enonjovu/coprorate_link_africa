'use server';

import BlogRepository from '@/app/_db/repositories/BlogRepository';
import { revalidatePath } from 'next/cache';

export async function handleDeleteBlog(id: string) {
    try {
        await BlogRepository.deleteById(id);

        revalidatePath('/admin/news');

        return {
            data: true,
            errors: null,
        };
    } catch (error: unknown) {
        console.log('Failed to delete the company!');

        console.log(error);

        return {
            data: null,
            errors: 'Something went wrong',
        };
    }
}
