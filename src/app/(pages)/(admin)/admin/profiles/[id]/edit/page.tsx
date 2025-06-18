import { PageParameters } from '@/lib/types';
import EditProfileForm from './EditProfileForm';
import { notFound } from 'next/navigation';
import IndividiualProfileRepository from '@/app/_db/repositories/IndividiualProfileRepository';
import DirectoryCategoryRepository from '@/app/_db/repositories/DirectoryCategoryRepository';

export default async function ProfileEditPage(props: PageParameters<{ id: string }>) {
    const id = props.params?.id;

    if (!id) {
        return notFound();
    }

    const profile = await IndividiualProfileRepository.getById(id);

    if (!profile) {
        return notFound();
    }

    const profilePropeties = IndividiualProfileRepository.getPropeties(profile);

    const categories = await DirectoryCategoryRepository.getList({ limit: 20 });

    return (
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">edit profile</h1>
                </div>

                <EditProfileForm categories={categories} id={id} profile={profilePropeties} />
            </div>
        </div>
    );
}
