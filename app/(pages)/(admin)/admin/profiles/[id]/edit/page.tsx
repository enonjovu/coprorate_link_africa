import { PageParameters } from '@/lib/types';
import EditProfileForm from './EditProfileForm';
import { notFound } from 'next/navigation';
import IndividiualProfileRepository from '@/app/_db/repositories/IndividiualProfileRepository';

export default async function ProfileEditPage(props: PageParameters<{ id: string }>) {
    const id = props.params?.id;

    if (!id) {
        return notFound();
    }

    const profile = await IndividiualProfileRepository.getById(id);

    console.log({ profile });
    if (!profile) {
        return notFound();
    }

    const profilePropeties = IndividiualProfileRepository.getPropeties(profile);
    console.log({ profilePropeties });

    return (
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">edit profile</h1>
                </div>

                <EditProfileForm id={id} profile={profilePropeties} />
            </div>
        </div>
    );
}
