import { PageParameters } from '@/lib/types';
import CreateProfileForm from './CreateProfileForm';
import DirectoryCategoryRepository from '@/app/_db/repositories/DirectoryCategoryRepository';

export default async function ProfileCreatePage(props: PageParameters) {
    const categories = await DirectoryCategoryRepository.getList({ limit: 20 });

    return (
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">
                        Create a new individual profile directory
                    </h1>
                </div>

                <CreateProfileForm categories={categories} />
            </div>
        </div>
    );
}
