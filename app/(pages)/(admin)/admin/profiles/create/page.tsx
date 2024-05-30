import { PageParameters } from '@/lib/types';
import CreateProfileForm from './CreateProfileForm';
import DirectoryCategoryRepository from '@/app/_db/repositories/DirectoryCategoryRepository';

export default async function ProfileCreatePage(props: PageParameters) {
    const categories = await DirectoryCategoryRepository.get({ limit: 20 });

    const categoriesList = categories.map((cat) => ({ id: cat.id, name: cat.name }));

    return (
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Create a new individual profile directory
                    </h1>
                </div>

                <CreateProfileForm categories={categoriesList} />
            </div>
        </div>
    );
}
