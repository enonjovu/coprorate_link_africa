import Slider from "./Slider";
import { fetchTopBlogs } from "../../action";
import Image from 'next/image';
import Link from "next/link";
import Ads from "./Advertisment";

const Hero = async () => {
    const blogs = await fetchTopBlogs();
    console.log(blogs);
    return ( 
        <div className="bg-white">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                {/* big grid 1 */}
                <div className="flex flex-row flex-wrap md:h-[65vh] overflow-hidden">

                    {/*Start left cover*/}
                    <div className="flex-shrink max-w-full h-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                        <Ads/>
                    </div>

                    {/*Start box news*/}
                    <div className="flex-shrink max-w-full w-full h-full lg:w-1/2">
                        <div className="box-one flex flex-row flex-wrap h-full w-full">
                            {
                                blogs.length?(
                                    blogs.map((blog)=>(
                                        <article key={blog.id} className="flex-shrink max-w-full w-full sm:w-1/2">
                                            <Link href={`/news/single/${blog.id}`}>
                                                <div className="relative hover-img ">
                                                    
                                                        <Image width={500} height={500} className="max-w-full w-full mx-auto h-auto" src={blog.image.url} alt="Image description"/>
                                                        <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full h-full bg-[#00000075] flex flex-col justify-end">
                                                            <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">{blog.title}</h2>
                                                            <div className="pt-1">
                                                                <div className="text-gray-100">
                                                                    <div className="inline-block h-3 border-l-2 border-red-600 mr-2 text-gray-100"></div>
                                                                    {blog.category?.toUpperCase()}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                </div>
                                            </Link>
                                        </article>
                                    ))
                                ):null
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    //     <div className="bg-white py-6">
    //   <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
    //     {/* big grid 1 */}
    //     <div className="flex flex-row flex-wrap">
    //       {/*Start left cover*/}
    //       <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
    //         <div className="relative hover-img max-h-98 overflow-hidden">
    //           <a href="#">
    //             <img className="max-w-full w-full mx-auto h-auto" src="src/img/dummy/img1.jpg" alt="Image description"/>
    //           </a>
    //           <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
    //             <a href="#">
    //               <h2 className="text-3xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designer Belts for This Best-Selling</h2>
    //             </a>
    //             <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>
    //             <div className="pt-2">
    //               <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Europe</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/*Start box news*/}
    //       <div className="flex-shrink max-w-full w-full lg:w-1/2">
    //         <div className="box-one flex flex-row flex-wrap">
    //           <article className="flex-shrink max-w-full w-full sm:w-1/2">
    //             <div className="relative hover-img max-h-48 overflow-hidden">
    //               <a href="#">
    //                 <img className="max-w-full w-full mx-auto h-auto" src="src/img/dummy/img2.jpg" alt="Image description"/>
    //               </a>
    //               <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
    //                 <a href="#">
    //                   <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">News magazines are becoming obsolete, replaced by gadgets</h2>
    //                 </a>
    //                 <div className="pt-1">
    //                   <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Techno</div>
    //                 </div>
    //               </div>
    //             </div>
    //           </article>
    //           <article className="flex-shrink max-w-full w-full sm:w-1/2">
    //             <div className="relative hover-img max-h-48 overflow-hidden">
    //               <a href="#">
    //                 <img className="max-w-full w-full mx-auto h-auto" src="src/img/dummy/img3.jpg" alt="Image description"/>
    //               </a>
    //               <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
    //                 <a href="#">
    //                   <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">Minimalist designs are starting to be popular with the next generation</h2>
    //                 </a>
    //                 <div className="pt-1">
    //                   <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Architecture</div>
    //                 </div>
    //               </div>
    //             </div>
    //           </article>
    //           <article className="flex-shrink max-w-full w-full sm:w-1/2">
    //             <div className="relative hover-img max-h-48 overflow-hidden">
    //               <a href="#">
    //                 <img className="max-w-full w-full mx-auto h-auto" src="src/img/dummy/img4.jpg" alt="Image description"/>
    //               </a>
    //               <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
    //                 <a href="#">
    //                   <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">Tips for decorating the interior of the living room</h2>
    //                 </a>
    //                 <div className="pt-1">
    //                   <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Interior</div>
    //                 </div>
    //               </div>
    //             </div>
    //           </article>
    //           <article className="flex-shrink max-w-full w-full sm:w-1/2">
    //             <div className="relative hover-img max-h-48 overflow-hidden">
    //               <a href="#">
    //                 <img className="max-w-full w-full mx-auto h-auto" src="src/img/dummy/img5.jpg" alt="Image description"/>
    //               </a>
    //               <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
    //                 <a href="#">
    //                   <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">Online taxi users are increasing drastically ahead of the new year</h2>
    //                 </a>
    //                 <div className="pt-1">
    //                   <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Lifestyle</div>
    //                 </div>
    //               </div>
    //             </div>
    //           </article>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
     );
}
 
export default Hero;