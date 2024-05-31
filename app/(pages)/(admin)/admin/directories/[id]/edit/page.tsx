import DirectoryRepository from '@/app/_db/repositories/DirectoryRepository';
import { PageParameters } from '@/lib/types';
import { notFound } from 'next/navigation';
import EditDirectoryForm from './_compoents/EditDirectoryForm';
import DirectoryCategoryRepository from '@/app/_db/repositories/DirectoryCategoryRepository';

export default async function EditDirectoryPage(props: PageParameters<{ id: string }>) {
    const id = props.params?.id;

    if (!id) {
        return notFound();
    }

    const directory = await DirectoryRepository.getById(id);

    if (!directory) {
        return notFound();
    }

    const directoryPropeties = DirectoryRepository.getPropeties(directory);

    const categories = await DirectoryCategoryRepository.getList({ limit: 20 });

    return (
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Edit a new company directory
                    </h1>
                </div>

                <div className="mt-12">
                    <EditDirectoryForm categories={categories} id={directory.id} propeties={directoryPropeties} />
                </div>
            </div>
        </div>
    );
}
