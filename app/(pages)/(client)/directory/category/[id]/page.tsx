import DirectoryCard from '@/app/_components/Directory/DirectoryCard';
import Image from 'next/image';
import { getDirectories, getDirectoriesCount } from '@/lib/repositories/DirectoryRepository';
import Pagination from '@/app/_components/Pagination';
import DirectoryCategoryList from '@/app/_components/Directory/DirectoryCategoryList';

type PageProps = {
    params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function DirectoryCategoryPage({ params, searchParams }: PageProps) {
    const currentPage = parseInt(`${searchParams?.page ?? 1}`);

    const directories = await getDirectories({
        currentPage,
        category: params.id,
    });

    const directoriesCount = await getDirectoriesCount();

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
                            <div className="w-full max-w-full flex-shrink px-3 pb-5">
                                <div className="hover-img relative max-h-[50vh] overflow-hidden">
                                    {/*thumbnail*/}
                                    <a href="#">
                                        <Image
                                            className="mx-auto h-auto w-full max-w-full object-cover"
                                            width={1300}
                                            height={400}
                                            src="/src/img/directory.jpg"
                                            alt="Image description"
                                        />
                                    </a>
                                </div>
                            </div>

                            {/* <DirectoryCategoryList /> */}

                            <div className="my-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
