import DirectoryCard from '@/app/_components/Directory/DirectoryCard';
import Image from 'next/image';
import { getDirectories, getDirectoriesCount } from '@/lib/repositories/DirectoryRepository';
import Pagination from '@/app/_components/Pagination';
import DirectoryCategoryList from '@/app/_components/Directory/DirectoryCategoryList';
import AdvertBanner from '@/app/_components/Advert/AdvertBanner';
import DirectoryRepository from '@/app/_db/repositories/DirectoryRepository';
import { PageParameters } from '@/lib/types';
import DirectoryCategoryRepository from '@/app/_db/repositories/DirectoryCategoryRepository';
import DirectoryCategory from '@/models/DirectoryCategory';
import { notFound } from 'next/navigation';
import dbConnect from '@/lib/db';

export default async function DirectoryCategoryPage({ params, searchParams }: PageParameters<{ id: string }>) {
    const currentPage = parseInt(`${searchParams?.page ?? 1}`);

    await dbConnect();

    const category = await DirectoryCategory.findOne({ _id: params.id });

    if (!category) {
        return notFound();
    }

    const { data: directories, count: directoriesCount } = await DirectoryRepository.getPaginated({
        page: currentPage,
        options: {
            category: category.id,
        },
    });

    return (
        <div className="bg-gray-50 py-6">
            <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    <div className="w-full max-w-full flex-shrink overflow-hidden">
                        <div className="w-full py-3">
                            <h2 className="text-2xl font-bold text-gray-800">
                                <span className="border-l-3 mr-2 inline-block h-5 border-2 border-red-600"></span>
                                Directories
                            </h2>
                        </div>
                        <div className="-mx-3 flex flex-row flex-wrap">
                            <AdvertBanner />

                            <DirectoryCategoryList active={category} />

                            <div className="my-4 grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
                                {directories.length
                                    ? directories.map((directory) => (
                                          <DirectoryCard key={`id-${directory.id}`} directory={directory} />
                                      ))
                                    : null}
                            </div>

                            <Pagination
                                count={directoriesCount}
                                current={currentPage}
                                distribution={12}
                                path={`/directory`}
                                className="mt-4 text-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
