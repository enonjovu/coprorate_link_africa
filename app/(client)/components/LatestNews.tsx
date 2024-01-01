import TopStories from "./TopStories";
import { fetchLatestBlogs } from "../../action";
import Image from 'next/image';

const LatestNews = async () => {
    const blogs = await fetchLatestBlogs();
    
    return ( 
        <div className="bg-gray-50 py-2">
            <div className="w-full flex justify-center overflow-hidden">
                <div className="flex flex-wrap justify-between mb-4 w-full md:w-1/2 md:mt-4">
                    <a href="/news/category/agriculture" className="scale-75 md:scale-100 text-white bg-red-700 hover:text-white p-3 rounded-md">Agriculture</a>
                    <a href="/news/category/business" className="scale-75 md:scale-100 text-white bg-red-700 hover:text-white p-3 rounded-md">Business</a>
                    <a href="/news/category/tech" className="scale-75 md:scale-100 text-white bg-red-700 hover:text-white p-3 rounded-md">Tech</a>
                    <a href="/news/category/enviroment" className="scale-75 md:scale-100 text-white bg-red-700 hover:text-white p-3 rounded-md">Enviroment</a>
                </div>
            </div>

            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    {/* post */}
                    <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                        <div className="w-full py-3">
                        <h2 className="text-gray-800 text-2xl font-bold">
                            <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Latest news
                        </h2>
                        </div>
                        <div className="flex flex-row flex-wrap -mx-3">
                            {blogs?.map(blog=>(
                                <div key={blog.id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                    <div className="flex flex-row sm:block hover-img">
                                        <a href={`/news/single/${blog.id}`}>
                                            <Image width={900} height={800} className="max-w-full w-full h-full max-h-40 overflow-hidden object-cover mx-auto" src={blog.image.url} alt="alt title"/>
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
                    </div>
                    {/* sidebar */}
                    <TopStories/>
                </div>
            </div>
        </div>
     );
}
 
export default LatestNews;