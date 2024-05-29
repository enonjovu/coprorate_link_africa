'use server';

import IndividiualProfileRepository, {
    IndividiualProfileParamters,
} from '@/app/_db/repositories/IndividiualProfileRepository';
import { revalidatePath } from 'next/cache';

export async function handleDeleteIndividiualProfile(id: string) {
    try {
        await IndividiualProfileRepository.deleteById(id);

        revalidatePath('/admin/profiles');

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

export async function handleUpdateProfile(id: string, data: Partial<IndividiualProfileParamters>) {
    try {
        const result = await IndividiualProfileRepository.updateById(id, data);

        revalidatePath(`/admin/profiles/${id}/edit`);

        const directory = await IndividiualProfileRepository.getById(id);

        if (!directory) {
            return { data: null, errors: null, ok: false };
        }

        const profilePropeties = IndividiualProfileRepository.getPropeties(directory);

        return { data: profilePropeties, errors: null, ok: true };
    } catch (error: unknown) {
        console.log('Failed to delete the company!');
        return { data: null, errors: 'Something went wrong', ok: false };
    }
}

export async function handleCreateProfile(data: IndividiualProfileParamters) {
    try {
        const result = await IndividiualProfileRepository.create(data);

        return { data: result, errors: null };
    } catch (error: unknown) {
        console.error({
            message: 'could not create directory',
            error,
        });

        return { data: null, errors: 'Something went wrong' };
    }
}
