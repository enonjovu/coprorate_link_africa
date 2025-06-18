'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import PrimaryButton from '../_components/Button/PrimaryButton';
import { HandleDeleteCategory } from './actions';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function DeleteCategoryButton({ id }: { id: string }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleDeleteCategory = async () => {
        if (!confirm('are you sure')) {
            return;
        }

        setIsLoading(true);

        const loadingToast = toast.loading('deleting category');

        const response = await HandleDeleteCategory(id);

        if (response.ok) {
            toast.dismiss(loadingToast);
            toast.success('deleted category', { duration: 5000 });
        } else {
            toast.error('failed to delete category', { duration: 5000 });
        }
    };

    return (
        <PrimaryButton disabled={isLoading} type="button" onClick={handleDeleteCategory}>
            <TrashIcon className="size-6 text-white" />
        </PrimaryButton>
    );
}
