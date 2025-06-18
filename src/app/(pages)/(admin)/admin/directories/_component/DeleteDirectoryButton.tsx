'use client';

import { BsTrash } from 'react-icons/bs';
import { handleDeleteDirectory } from '../actions';
import toast from 'react-hot-toast';

export default function DeleteDirectoryButton({ id }: { id: string }) {
    const handleClick = async () => {
        if (!confirm('Are you sure')) {
            return;
        }

        const result = await handleDeleteDirectory(id);

        if (result.data) {
            toast('directory was deleted', { duration: 2000 });
        } else {
            toast('could not delete directory', { duration: 2000 });
        }
    };

    return (
        <button onClick={handleClick} type="button" className="cursor-pointer rounded-lg border-[1px] border-white p-2">
            <BsTrash size={20} color={'#fff'} />
        </button>
    );
}
