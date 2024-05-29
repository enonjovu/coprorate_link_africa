import Image from 'next/image';
import Link from 'next/link';
import { BsPencil } from 'react-icons/bs';

import { IndividiualProfileDocument } from '@/lib/document-types';

import DeleteDirectoryButton from './DeleteDirectoryButton';

export default function ProfileCard({ profile }: { profile: IndividiualProfileDocument }) {
    return (
        <div className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0">
            <div className="hover-img flex flex-row sm:block">
                <Image
                    width={900}
                    height={800}
                    className="mx-auto h-40 max-h-40 min-h-40 w-full max-w-full overflow-hidden object-cover"
                    src={profile.profile_image[0]?.url}
                    alt={profile.name}
                />
                <h1 className="text-center text-lg">{profile.name}</h1>
                <div className="roundeg-lg flex h-16 w-full items-center justify-center space-x-4 bg-red-700">
                    <a
                        href={`/admin/profiles/${profile.id}/edit`}
                        className="cursor-pointer rounded-lg border-[1px] border-white p-2"
                    >
                        <BsPencil size={20} color={'#fff'} />
                    </a>
                    <DeleteDirectoryButton id={profile.id} />
                </div>
            </div>
        </div>
    );
}
