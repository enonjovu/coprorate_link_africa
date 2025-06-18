'use client';

import { BsTrash } from 'react-icons/bs';
import { handleDeleteTender } from '../actions';
import toast from 'react-hot-toast';
import { TrashIcon } from '@heroicons/react/24/outline';
export default function DeleteTenderButton({ id }: { id: string }) {
    const handleClick = async () => {
        if (!confirm('Are you sure')) {
            return;
        }

        const result = await handleDeleteTender(id);

        if (result.data) {
            toast.success('blog was deleted', { duration: 2000 });
        } else {
            toast.error('could not delete blog', { duration: 2000 });
        }
    };

    return (
        <button
            onClick={handleClick}
            type="button"
            className="cursor-pointer rounded-lg border-[1px] border-white bg-red-600 p-2 text-white"
        >
            <TrashIcon className="size-6 text-white" />
        </button>
    );
}
