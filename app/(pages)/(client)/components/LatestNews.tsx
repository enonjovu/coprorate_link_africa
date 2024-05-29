import TopStories from './TopStories';
import { getBlogs, getBlogsCount } from '@/lib/repositories/BlogRepository';
import Pagination from '@/app/_components/Pagination';
import BlogCard from '@/app/_components/Blog/BlogCard';
import HomeCategoryList from '@/app/_components/Categories/HomeCategoryList';
import TenderEventWrapper from '@/app/_components/Wrapper/TenderEventWrapper';
import SideAds from './SideAds';
import EveTend from './EveTend';

const LatestNews = async ({ page }: { page: string }) => {
    const pageNumber = parseInt(page);

    const blogs = await getBlogs({
        currentPage: pageNumber,
        skip: pageNumber,
    });

    const itemsCount = await getBlogsCount();

    return (
        <div className="bg-gray-50 py-2">
            <HomeCategoryList />

            <div className="flex flex-col items-start lg:flex-row">
                <div className="w-full lg:flex-1">
                    <div className="w-full py-3">
                        <h2 className="text-2xl font-bold text-gray-800">
                            <span className="mr-2 inline-block h-5 border-l-2 border-red-600"></span>Latest news
                        </h2>
                    </div>

                    <div className="-mx-3 flex flex-row flex-wrap">
                        {blogs?.map((blog) => <BlogCard blog={blog} key={blog.id} />)}
                    </div>

                    <Pagination
                        count={itemsCount}
                        current={pageNumber}
                        distribution={12}
                        path="/"
                        className="mt-4 text-center"
                    />
                </div>
                <div className="w-full shrink-0 lg:w-[300px]">
                    <SideAds />
                    <EveTend />
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
