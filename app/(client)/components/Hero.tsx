import Slider from "./Slider";
import { fetchLatestBlogs } from "../../action";
import Image from 'next/image';
import Link from "next/link";

const Hero = async () => {
    const blogs = await fetchLatestBlogs();
    console.log(blogs);
    return ( 
        <div className="bg-white py-6">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                {/* big grid 1 */}
                <div className="flex flex-row flex-wrap">

                {/*Start left cover*/}
                <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                    <Slider/>
                </div>

                {/*Start box news*/}
                <div className="flex-shrink max-w-full w-full lg:w-1/2">
                    <div className="box-one flex flex-row flex-wrap">
                        {
                            blogs.length?(
                                blogs.map((blog)=>(
                                    
                                        <article key={blog.id} className="flex-shrink max-w-full w-full sm:w-1/2">
                                            <div className="relative hover-img max-h-48 overflow-hidden">
                                                <Link href={`/news/single/${blog.id}`}>
                                                    <Image width={500} height={500} className="max-w-full w-full mx-auto h-auto" src={blog.image.url} alt="Image description"/>
                                                    <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full h-full bg-[#00000075] flex flex-col justify-end">
                                                        <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">{blog.title}</h2>
                                                        <div className="pt-1">
                                                            <div className="text-gray-100">
                                                                <div className="inline-block h-3 border-l-2 border-red-600 mr-2 text-gray-100"></div>
                                                                {blog.category.toUpperCase()}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </article>
                                ))
                            ):null
                    }
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;