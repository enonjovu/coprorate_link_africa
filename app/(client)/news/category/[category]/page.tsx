import TopStories from '@/app/(client)/components/TopStories';
import { fetchBlogsByCategory } from '@/app/action';

import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import Link from 'next/link';
type paramProps = {
    params: Params;
};
const BlogCategoryPage = async ({ params }: paramProps) => {
    const category: string = params.category;
    const blogs = await fetchBlogsByCategory(category.toLocaleLowerCase());
    console.log('Blogs byt category => ', blogs);
    return (
        <main id="content">
            <div className="bg-gray-50 py-10">
                <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
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
                                          <div
                                              key={blog.id}
                                              className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0"
                                          >
                                              <div className="hover-img flex flex-row sm:block">
                                                  <Link href={`/news/single/${blog.id}`} className="">
                                                      <Image
                                                          width={1200}
                                                          height={800}
                                                          className="min-h-44 mx-auto h-44 max-h-52 w-full max-w-full overflow-hidden object-cover"
                                                          src={blog.image.url}
                                                          alt="alt title"
                                                      />
                                                  </Link>
                                                  <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                                      <h3 className="mb-2 text-lg font-bold leading-tight text-black">
                                                          <a href="#">{blog.title}</a>
                                                      </h3>
                                                      <p className="mb-1 hidden leading-tight text-gray-800 md:block">
                                                          {blog.story}
                                                      </p>
                                                      <a className="text-gray-500" href="#">
                                                          <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
                                                          {blog.category?.toUpperCase()}
                                                      </a>
                                                  </div>
                                              </div>
                                          </div>
                                      ))
                                    : null}
                            </div>
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
