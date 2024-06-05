'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import PrimaryButton from '../_components/Button/PrimaryButton';
import { HandleDeleteAdvert } from './actions';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function DeleteAdvertButton({ id }: { id: string }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        if (!confirm('are you sure')) {
            return;
        }

        setIsLoading(true);

        const loadingToast = toast.loading('deleting advert');

        const response = await HandleDeleteAdvert(id);

        if (response.ok) {
            toast.dismiss(loadingToast);
            toast.success('deleted advert', { duration: 5000 });
        } else {
            toast.error('failed to delete advert', { duration: 5000 });
        }

        setIsLoading(false);
    };

    return (
        <PrimaryButton disabled={isLoading} type="button" onClick={handleDelete}>
            <TrashIcon className="size-6 text-white" />
        </PrimaryButton>
    );
}
