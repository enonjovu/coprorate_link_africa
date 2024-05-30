'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import PrimaryButton from '../_components/Button/PrimaryButton';
import { HandleUserDelete } from './actions';
import toast from 'react-hot-toast';

export default function DeleteUserButton({ id }: { id: string }) {
    const handleDeleteCategory = async () => {
        if (!confirm('are you sure')) {
            return;
        }

        const response = await HandleUserDelete(id);

        if (response.ok) {
            toast('deleted user', { duration: 5000 });
        } else {
            toast('failed to user category', { duration: 5000 });
        }
    };

    return (
        <PrimaryButton type="button" onClick={handleDeleteCategory}>
            <TrashIcon className="size-6 text-white" />
        </PrimaryButton>
    );
}
