import { fetchLatestBlogs, getItemsCount } from '@/app/action';
import Link from 'next/link';
import UpdateNews from './UpdateNews';

const ListingComponent = async ({ page }: { page: string }) => {
    const blogs = await fetchLatestBlogs(page);
    const itemsCount = await getItemsCount();
    const totalPages = Math.ceil(itemsCount / 12);
    const pageNumber = parseInt(page);

    const pageNumbers = [];
    const offsetNumer = 3;

    for (let index = pageNumber - offsetNumer; index <= pageNumber + offsetNumer; index++) {
        if (index >= 1 && index <= totalPages) {
            pageNumbers.push(index);
        }
    }

    const currentPage = parseInt(page);
    const prevPage = currentPage - 1 > 0 ? currentPage - 1 : 1;
    const nextPage = currentPage + 1;

    return (
        <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                <div className="w-full max-w-full flex-shrink overflow-hidden">
                    <div className="w-full py-3">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                            <span className="border-l-3 mr-2 inline-block h-5 border-2 border-red-600"></span>
                            All Stories
                        </h2>
                    </div>
                    <div className="-mx-3 flex flex-row flex-wrap">
                        <UpdateNews blogs={blogs} />
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <nav aria-label="Page navigation">
                        <ul className="flex items-center justify-center space-x-0">
                            <li>
                                {currentPage === 1 ? null : (
                                    <Link
                                        className="relative -mr-0.5 block rounded-r border border-gray-200 bg-white px-4 py-3 hover:bg-gray-700 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        href={`/admin/news/?page=${prevPage}`}
                                        aria-label="Previous"
                                    >
                                        <span aria-hidden="true">«</span>
                                    </Link>
                                )}
                            </li>

                            {pageNumbers.map((pageNo, index) => (
                                <li key={index}>
                                    <Link
                                        className="relative -mr-0.5 block border border-gray-200 bg-white px-4 py-3 hover:bg-gray-700 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        href={`/admin/news/?page=${pageNo}`}
                                    >
                                        {pageNo}
                                    </Link>
                                </li>
                            ))}

                            <li>
                                {currentPage === totalPages ? null : (
                                    <Link
                                        className="relative -mr-0.5 block rounded-r border border-gray-200 bg-white px-4 py-3 hover:bg-gray-700 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        href={`/admin/news/?page=${nextPage}`}
                                        aria-label="Next"
                                    >
                                        <span aria-hidden="true">»</span>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default ListingComponent;
