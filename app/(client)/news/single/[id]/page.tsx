// import Ads from "@/app/(client)/components/Advertisment";

import PicturesSlider from "@/app/(client)/components/PicturesSlider";
import SocialMediaButtons from "@/app/(client)/components/SocialMediaButtons";
import TopStories from "@/app/(client)/components/TopStories";
import { fetchBlogsById } from "@/app/action";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
type paramProps = {
    params:Params
}

const SingleBlogPage = async ({params}:paramProps) => {
    const id: string = params.id;
    const result = await fetchBlogsById(id);
    const blog = result[0]
    return (
        <main id="content">
            {/* block news */}
            <div className="bg-gray-50 py-10">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        {/* Left */}
                        <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                            <div className="w-full py-3 mb-3">
                                <h2 className="text-gray-800 text-3xl font-bold">
                                    <span className="inline-block h-5 border-l-2 border-red-600 mr-2"></span> 
                                    {blog?.title}
                                </h2>
                                <p className="text-black">{blog.date}</p>
                                <span className="text-gray-500">Written by {blog.author}</span>
                            </div>
                            <div className="flex flex-row flex-wrap -mx-3">
                                <div className="max-w-full w-full px-4">
                                    {/* Post content */}
                                    <div className="leading-relaxed pb-4">
                                        <figure className="text-center mb-6 w-full h-full max-h-[60vh] overflow-hidden">
                                            <PicturesSlider images={blog.images}/>
                                            <figcaption className='text-black'> Image Description</figcaption>
                                        </figure>
                                        
                                        <p className="mb-5 text-black whitespace-pre-wrap ">
                                            {blog?.story}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                                <SocialMediaButtons url={`https://coprorate-link-africa.vercel.app/news/single/${blog.id}`}/>
                            </div>
                            <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                                <div className="w-full py-3">
                                <h2 className="text-gray-800 text-2xl font-bold">
                                    <span className="inline-block h-5 border-l-2 border-red-600 mr-2"></span>Related Articles 
                                </h2>
                                </div>
                                <div className="flex flex-row flex-wrap -mx-3">
                                    {
                                        blog.related?.map(related=>(
                                            <div key={related.id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                                <div className="flex flex-row sm:block hover-img">
                                                <a href="">
                                                    <img className="max-w-full w-full mx-auto" src={related.images[0].url} alt="alt title"/>
                                                </a>
                                                <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                                    <h3 className="text-lg font-bold leading-tight mb-2">
                                                    <a href="#" className="text-black">{related.title}</a>
                                                    </h3>
                                                    {/* <p className="hidden md:block text-gray-600 leading-tight mb-1">{related.story}</p> */}
                                                    <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>{related.category}</a>
                                                </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        {/* right */}
                        <TopStories/>
                    </div>
                </div>
            </div>
        </main>
    );
} 
export default SingleBlogPage;