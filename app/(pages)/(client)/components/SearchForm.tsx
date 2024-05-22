'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
const SearchForm: React.FC = () => {
    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/results/${searchQuery}`);
    };

    return (
        <div className="flex h-full items-center gap-x-2 font-semibold text-gray-500 hover:text-red-600 sm:my-6 sm:border-s sm:border-gray-300 sm:ps-6 dark:border-gray-700 dark:text-red-500 dark:hover:text-red-500">
            <input
                type="text"
                placeholder="Search"
                className="h-full rounded-lg border-2 border-red-500 p-1 text-black"
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                }}
            />
            <button type="submit" onClick={handleSubmit}>
                <BsSearch size={15} className="text-red-500" />
            </button>
        </div>
    );
};

export default SearchForm;
