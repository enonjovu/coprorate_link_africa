import TopStories from './TopStories';
import { fetchLatestBlogs, getItemsCount } from '../../action';
import Image from 'next/image';
import Link from 'next/link';

const LatestNews = async ({ page }: { page: string }) => {
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
        <div className="bg-gray-50 py-2">
            <div className="flex w-full justify-center overflow-hidden">
                <div className="mb-4 flex w-full flex-wrap justify-between md:mt-4 md:w-1/2">
                    <a
                        href="/news/category/agriculture"
                        className="scale-75 rounded-md bg-red-700 p-3 text-white hover:text-white md:scale-100"
                    >
                        Agriculture
                    </a>
                    <a
                        href="/news/category/business"
                        className="scale-75 rounded-md bg-red-700 p-3 text-white hover:text-white md:scale-100"
                    >
                        Business
                    </a>
                    <a
                        href="/news/category/tech"
                        className="scale-75 rounded-md bg-red-700 p-3 text-white hover:text-white md:scale-100"
                    >
                        Tech
                    </a>
                    <a
                        href="/news/category/environment"
                        className="scale-75 rounded-md bg-red-700 p-3 text-white hover:text-white md:scale-100"
                    >
                        Environment
                    </a>
                </div>
            </div>

            <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    {/* post */}
                    <div className="w-full max-w-full flex-shrink overflow-hidden lg:w-2/3">
                        <div className="w-full py-3">
                            <h2 className="text-2xl font-bold text-gray-800">
                                <span className="mr-2 inline-block h-5 border-l-2 border-red-600"></span>Latest news
                            </h2>
                        </div>

                        <div className="-mx-3 flex flex-row flex-wrap">
                            {blogs?.map((blog) => (
                                <div
                                    key={blog.id}
                                    className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0"
                                >
                                    <div className="hover-img flex flex-col sm:block">
                                        <a href={`/news/single/${blog.id}`}>
                                            <Image
                                                width={900}
                                                height={800}
                                                className="min-h-44 mx-auto h-44 max-h-44 w-full max-w-full overflow-hidden object-cover"
                                                src={blog.image.url}
                                                alt="alt title"
                                            />
                                        </a>
                                        <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                            <h3 className="mb-2 text-lg font-bold leading-tight">
                                                <a href={`/news/single/${blog.id}`} className="text-gray-800">
                                                    {blog.title}
                                                </a>
                                            </h3>
                                            <p className="mb-1 hidden leading-tight text-gray-600 md:block">
                                                {blog.story}
                                            </p>
                                            <a href={`/news/category/${blog.category}`} className="text-gray-500">
                                                <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
                                                {blog.category.toUpperCase()}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 text-center">
                            <nav aria-label="Page navigation">
                                <ul className="flex items-center justify-center space-x-0">
                                    <li>
                                        {currentPage === 1 ? null : (
                                            <Link
                                                className="relative -mr-0.5 block rounded-r border border-gray-200 bg-white px-4 py-3 hover:bg-gray-700 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                                href={`/?page=${prevPage}`}
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
                                                href={`/?page=${pageNo}`}
                                            >
                                                {pageNo}
                                            </Link>
                                        </li>
                                    ))}

                                    <li>
                                        {currentPage === totalPages ? null : (
                                            <Link
                                                className="relative -mr-0.5 block rounded-r border border-gray-200 bg-white px-4 py-3 hover:bg-gray-700 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                                href={`/?page=${nextPage}`}
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
                    {/* sidebar */}
                    <TopStories />
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
