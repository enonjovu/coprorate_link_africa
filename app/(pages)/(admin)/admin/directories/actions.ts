'use server';

import { revalidatePath } from 'next/cache';
import DirectoryRepository, { DirectoryParamters } from '@/app/_db/repositories/DirectoryRepository';

export async function handleDeleteDirectory(id: string) {
    try {
        await DirectoryRepository.deleteById(id);
        revalidatePath('/admin/directories');

        return {
            data: true,
            errors: null,
        };
    } catch (error: unknown) {
        console.error({
            message: 'Failed to delete directory',
            error,
        });

        return {
            data: null,
            errors: 'Something went wrong',
        };
    }
}

export async function handleUpdateDirectory(id: string, data: Partial<DirectoryParamters>) {
    try {
        const result = await DirectoryRepository.updateById(id, data);

        revalidatePath(`/admin/directories/${id}/edit`);

        const directory = await DirectoryRepository.getById(id);

        if (!directory) {
            return { data: null, errors: null };
        }

        const directoryPropeties = DirectoryRepository.getPropeties(directory);

        return { data: directoryPropeties, errors: null };
    } catch (error: unknown) {
        console.log('Failed to delete the company!');
        return { data: null, errors: 'Something went wrong' };
    }
}

export async function handleCreateDirectory(data: DirectoryParamters) {
    try {
        const result = await DirectoryRepository.create(data);

        return { data: result, errors: null };
    } catch (error: unknown) {
        console.error({
            message: 'could not create directory',
            error,
        });

        return { data: null, errors: 'Something went wrong' };
    }
}
