import Image from 'next/image';
import Link from 'next/link';
import { BsPencil } from 'react-icons/bs';

import { DirectoryDocument } from '@/lib/document-types';

import DeleteDirectoryButton from './DeleteDirectoryButton';

export default function DirectoryCard({ company }: { company: DirectoryDocument }) {
    return (
        <div className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0">
            <div className="hover-img flex flex-row sm:block">
                <Image
                    width={900}
                    height={800}
                    className="mx-auto h-40 max-h-40 min-h-40 w-full max-w-full overflow-hidden object-cover"
                    src={company.logo[0].url}
                    alt={company.name}
                />
                <h1 className="text-center text-lg">{company.name}</h1>
                <div className="roundeg-lg flex h-16 w-full items-center justify-center space-x-4 bg-red-700">
                    <Link
                        href={`/admin/directories/${company.id}/edit`}
                        className="cursor-pointer rounded-lg border-[1px] border-white p-2"
                    >
                        <BsPencil size={20} color={'#fff'} />
                    </Link>
                    <DeleteDirectoryButton id={company.id} />
                </div>
            </div>
        </div>
    );
}
