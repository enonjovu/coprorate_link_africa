import TopStories from "./TopStories";
import { fetchLatestBlogs, getItemsCount } from "../../action";
import Image from 'next/image';
import Link from "next/link";

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
            <div className="w-full flex justify-center overflow-hidden">
                <div className="flex flex-wrap justify-between mb-4 w-full md:w-1/2 md:mt-4">
                    <a href="/news/category/agriculture" className="scale-75 md:scale-100 text-white bg-red-700 hover:text-white p-3 rounded-md">Agriculture</a>
                    <a href="/news/category/business" className="scale-75 md:scale-100 text-white bg-red-700 hover:text-white p-3 rounded-md">Business</a>
                    <a href="/news/category/tech" className="scale-75 md:scale-100 text-white bg-red-700 hover:text-white p-3 rounded-md">Tech</a>
                    <a href="/news/category/environment" className="scale-75 md:scale-100 text-white bg-red-700 hover:text-white p-3 rounded-md">Environment</a>
                </div>
            </div>

            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    {/* post */}
                    <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                        <div className="w-full py-3">
                            <h2 className="text-gray-800 text-2xl font-bold">
                                <span className="inline-block h-5 border-l-2 border-red-600 mr-2"></span>Latest news
                            </h2>
                        </div>

                        <div className="flex flex-row flex-wrap -mx-3">
                            {blogs?.map(blog => (
                                <div key={blog.id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                    <div className="flex flex-row sm:block hover-img">
                                        <a href={`/news/single/${blog.id}`}>
                                            <Image width={900} height={800} className="max-w-full w-full h-40 min-h-40 max-h-40 overflow-hidden object-cover mx-auto" src={blog.image.url} alt="alt title" />
                                        </a>
                                        <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                            <h3 className="text-lg font-bold leading-tight mb-2">
                                                <a href={`/news/single/${blog.id}`} className="text-gray-800">{blog.title}</a>
                                            </h3>
                                            <p className="hidden md:block text-gray-600 leading-tight mb-1">{blog.story}</p>
                                            <a href={`/news/category/${blog.category}`} className="text-gray-500"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>{blog.category.toUpperCase()}</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-4">
                            <nav aria-label="Page navigation">
                                <ul className="flex justify-center items-center space-x-0">
                                    <li>
                                        {
                                            currentPage === 1 ? (null)
                                                : <Link className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5 rounded-r" href={`/?page=${prevPage}`} aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                </Link>
                                        }
                                    </li>

                                    {
                                        pageNumbers.map((pageNo, index) => (
                                            <li key={index}>
                                                <Link className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5" href={`/?page=${pageNo}`}>
                                                    {pageNo}
                                                </Link>
                                            </li>
                                        ))
                                    }

                                    <li>
                                        {
                                            currentPage === totalPages ? (null)
                                                : <Link className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5 rounded-r" href={`/?page=${nextPage}`} aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                </Link>
                                        }
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
}

export default LatestNews;