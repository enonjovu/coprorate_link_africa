import TopStories from "@/app/(client)/components/TopStories";
import { fetchBlogsByCategory } from "@/app/action";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";
type paramProps = {
    params: Params
}
const BlogCategoryPage = async ({ params }: paramProps) => {
    const category: string = params.category;
    const blogs = await fetchBlogsByCategory(category.toLocaleLowerCase());
    console.log("Blogs byt category => ", blogs)
    return (
        <main id="content">
            <div className="bg-gray-50 py-10">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        {/* Left */}
                        <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
                            <div className="w-full py-3">
                                <h2 className="text-gray-800 text-2xl font-bold">
                                    <span className="inline-block h-5 border-l-3 border-red-600 border-l-2 mr-2"></span>
                                    {category.toUpperCase()} NEWS
                                </h2>
                            </div>
                            <div className="flex flex-row flex-wrap -mx-3">
                                {/* Blogs */}
                                {
                                    blogs.length ? (
                                        blogs.map(blog => (
                                            <div key={blog.id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                                <div className="flex flex-row sm:block hover-img">
                                                    <Link href={`/news/single/${blog.id}`} className="">
                                                        <Image width={1200} height={800} className="max-w-full w-full mx-auto h-44 min-h-44 max-h-52 overflow-hidden object-cover" src={blog.image.url} alt="alt title" />
                                                    </Link>
                                                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                                        <h3 className="text-lg font-bold text-black leading-tight mb-2">
                                                            <a href="#">{blog.title}</a>
                                                        </h3>
                                                        <p className="hidden md:block text-gray-800 leading-tight mb-1">{blog.story}</p>
                                                        <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                                                            {blog.category?.toUpperCase()}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))) : null
                                }
                            </div>
                        </div>
                        {/* right */}
                        <TopStories />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default BlogCategoryPage;