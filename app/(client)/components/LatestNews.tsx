import TopStories from "./TopStories";

const LatestNews = () => {
    return ( 
        <div className="bg-gray-50 py-2">
            <div className="w-full flex justify-center overflow-hidden">
                            <div className="flex flex-wrap justify-between mb-4 w-full md:w-1/2 md:mt-4">
                                <a href="/news/category/agriculture" className="scale-75 md:scale-100 dark:text-white bg-red-700 hover:text-white p-3 rounded-md">Agriculture</a>
                                <a href="/news/category/business" className="scale-75 md:scale-100 dark:text-white bg-red-700 hover:text-white p-3 rounded-md">Business</a>
                                <a href="/news/category/tech" className="scale-75 md:scale-100 dark:text-white bg-red-700 hover:text-white p-3 rounded-md">Tech</a>
                                <a href="/news/category/enviroment" className="scale-75 md:scale-100 dark:text-white bg-red-700 hover:text-white p-3 rounded-md">Enviroment</a>
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
                        <div className="flex-shrink max-w-full w-full px-3 pb-5">
                            <div className="relative hover-img max-h-98 overflow-hidden">
                                {/*thumbnail*/}
                                <a href="#">
                                    <img className="max-w-full w-full mx-auto h-auto" src="src/img/dummy/img15.jpg" alt="Image description"/>
                                </a>
                                <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                                    {/*title*/}
                                    <a href="#">
                                    <h2 className="text-3xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designer Belts for This Best-Selling</h2>
                                    </a>
                                    <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>                                                  
                                    {/* author and date */}
                                    <div className="pt-2">
                                    <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Europe</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                                <a href="">
                                    <img className="max-w-full w-full mx-auto" src="src/img/dummy/img24.jpg" alt="alt title"/>
                                </a>
                                <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                    <h3 className="text-lg font-bold leading-tight mb-2">
                                    <a href="#" className="text-black">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                    </h3>
                                    <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                            <a href="">
                                <img className="max-w-full w-full mx-auto" src="src/img/dummy/img7.jpg" alt="alt title"/>
                            </a>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg font-bold leading-tight mb-2">
                                <a href="#" className="text-black">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                </h3>
                                <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                            </div>
                            </div>
                        </div>
                        <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                            <a href="">
                                <img className="max-w-full w-full mx-auto" src="src/img/dummy/img17.jpg" alt="alt title"/>
                            </a>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg font-bold leading-tight mb-2">
                                <a href="#" className="text-black">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                </h3>
                                <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                            </div>
                            </div>
                        </div>
                        <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                            <a href="">
                                <img className="max-w-full w-full mx-auto" src="src/img/dummy/img25.jpg" alt="alt title"/>
                            </a>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg font-bold leading-tight mb-2">
                                <a href="#" className="text-black">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                </h3>
                                <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                            </div>
                            </div>
                        </div>
                        <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                            <a href="">
                                <img className="max-w-full w-full mx-auto" src="src/img/dummy/img12.jpg" alt="alt title"/>
                            </a>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg font-bold leading-tight mb-2">
                                <a href="#" className="text-black">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                </h3>
                                <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                            </div>
                            </div>
                        </div>
                        <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                            <a href="">
                                <img className="max-w-full w-full mx-auto" src="src/img/dummy/img8.jpg" alt="alt title"/>
                            </a>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg font-bold leading-tight mb-2">
                                <a href="#" className="text-black">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                </h3>
                                <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                            </div>
                            </div>
                        </div>
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