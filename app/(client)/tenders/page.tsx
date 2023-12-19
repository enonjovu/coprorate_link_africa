import Image from "next/image";

const TendersPage = () => {
    return ( 
        <div className="bg-gray-50 py-6">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    <div className="flex-shrink max-w-full w-full overflow-hidden">
                        <div className="w-full py-3">
                            <h2 className="text-gray-800 text-2xl font-bold">
                                <span className="inline-block h-5 border-l-3 border-red-600 border-2 mr-2"></span>
                                Tenders
                            </h2>
                        </div>
                        <div className="flex flex-row flex-wrap -mx-3">
                            <div className="flex-shrink max-w-full w-full px-3 pb-5">
                                <div className="relative hover-img max-h-[50vh] overflow-hidden">
                                {/*thumbnail*/}
                                <a href="#">
                                    <Image className="max-w-full w-full mx-auto h-auto object-contain" width={1000} height={1000} src="/src/img/dummy/img11.jpg" alt="Image description"/>
                                </a>
                                <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                                    {/*title*/}
                                    <a href="#">
                                    <h2 className="text-5xl font-bold capitalize text-white mb-3">Latest Tenders</h2>
                                    </a>
                                    <p className="text-gray-100 hidden sm:inline-block">Know whats going on around town & where to be, we got you covered.</p>
                                </div>
                                </div>
                            </div>

                            <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div className="flex flex-row sm:block hover-img">
                                <a href="">
                                    <img className="max-w-full w-full mx-auto" src="src/img/dummy/img13.jpg" alt="alt title"/>
                                </a>
                                <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                    <h3 className="text-lg text-black font-bold leading-tight mb-2">
                                        <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                    </h3>
                                    <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                                </div>
                                </div>
                            </div>
                        <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                            <a href="">
                                <img className="max-w-full w-full mx-auto" src="src/img/dummy/img14.jpg" alt="alt title"/>
                            </a>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg text-black font-bold leading-tight mb-2">
                                <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                </h3>
                                <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                            </div>
                            </div>
                        </div>
                        <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                            <a href="">
                                <img className="max-w-full w-full mx-auto" src="src/img/dummy/img15.jpg" alt="alt title"/>
                            </a>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg text-black font-bold leading-tight mb-2">
                                <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                </h3>
                                <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                            </div>
                            </div>
                        </div>
                        <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                            <a href="">
                                <img className="max-w-full w-full mx-auto" src="src/img/dummy/img16.jpg" alt="alt title"/>
                            </a>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg text-black font-bold leading-tight mb-2">
                                <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
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
                                <h3 className="text-lg text-black font-bold leading-tight mb-2">
                                <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                </h3>
                                <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                            </div>
                            </div>
                        </div>
                        <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                            <a href="">
                                <img className="max-w-full w-full mx-auto" src="src/img/dummy/img18.jpg" alt="alt title"/>
                            </a>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg text-black font-bold leading-tight mb-2">
                                <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                </h3>
                                <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TendersPage;