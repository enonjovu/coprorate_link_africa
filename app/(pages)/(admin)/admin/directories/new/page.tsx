import DirectoryCategoryRepository from '@/app/_db/repositories/DirectoryCategoryRepository';
import CreateDirectoryForm from './_components/CreateDirectoryForm';

export default async function NewDirectory() {
    const categories = await DirectoryCategoryRepository.getList({ limit: 20 });

    return (
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Create a new company directory
                    </h1>
                </div>

                <CreateDirectoryForm categories={categories} />
            </div>
        </div>
    );
}
