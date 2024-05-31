'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import PrimaryButton from '../_components/Button/PrimaryButton';
import { HandleDeleteCategory } from './actions';
import toast from 'react-hot-toast';

export default function DeleteCategoryButton({ id }: { id: string }) {
    const handleDeleteCategory = async () => {
        if (!confirm('are you sure')) {
            return;
        }

        const response = await HandleDeleteCategory(id);

        if (response.ok) {
            toast('deleted category', { duration: 5000 });
        } else {
            toast('failed to delete category', { duration: 5000 });
        }
    };

    return (
        <PrimaryButton type="button" onClick={handleDeleteCategory}>
            <TrashIcon className="size-6 text-white" />
        </PrimaryButton>
    );
}
