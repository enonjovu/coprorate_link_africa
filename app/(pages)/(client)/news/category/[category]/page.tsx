import TopStories from '@/app/(pages)/(client)/components/TopStories';
import BlogCard from '@/app/_components/Blog/BlogCard';
import Pagination from '@/app/_components/Pagination';
import { getBlogsByCategory, getBlogsCount } from '@/lib/repositories/BlogRepository';

type PageProps = {
    params: { category: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

const BlogCategoryPage = async ({ params, searchParams }: PageProps) => {
    const category: string = params.category.toLocaleLowerCase();

    const currentPage = parseInt(`${searchParams?.pages ?? 1}`);

    const blogs = await getBlogsByCategory({
        category: category,
        currentPage,
    });

    const itemsCount = await getBlogsCount({
        category: category,
    });

    return (
        <main id="content">
            <div className="bg-gray-50 py-10">
                <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap items-start">
                        {/* Left */}
                        <div className="w-full max-w-full flex-shrink overflow-hidden  lg:w-2/3">
                            <div className="w-full py-3">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    <span className="border-l-3 mr-2 inline-block h-5 border-l-2 border-red-600"></span>
                                    {category.toUpperCase()} NEWS
                                </h2>
                            </div>
                            <div className="-mx-3 flex flex-row flex-wrap">
                                {/* Blogs */}
                                {blogs.length
                                    ? blogs.map((blog) => (
                                          <BlogCard blog={blog} image={{ width: 1200, height: 800 }} key={blog.id} />
                                      ))
                                    : null}
                            </div>
                            <Pagination
                                count={itemsCount}
                                current={currentPage}
                                distribution={12}
                                path={`/news/category/${category}`}
                                className="mt-4 text-center"
                            />
                        </div>
                        {/* right */}
                        <TopStories />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BlogCategoryPage;
