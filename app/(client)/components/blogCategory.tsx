type paramProps = {
    category: string;
};

const BlogCategory = ({ category }: paramProps) => {
    return (
        <main id="content">
            <div className="bg-gray-50 py-10">
                <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        {/* Left */}
                        <div className="w-full max-w-full flex-shrink overflow-hidden  lg:w-2/3">
                            <div className="w-full py-3">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    <span className="border-l-3 mr-2 inline-block h-5 border-red-600"></span>
                                    {category}
                                </h2>
                            </div>
                            <div className="-mx-3 flex flex-row flex-wrap">
                                <div className="w-full max-w-full flex-shrink px-3 pb-5">
                                    <div className="hover-img max-h-98 relative overflow-hidden">
                                        {/*thumbnail*/}
                                        <a href="#">
                                            <img
                                                className="mx-auto h-auto w-full max-w-full"
                                                src="/src/img/dummy/img22.jpg"
                                                alt="Image description"
                                            />
                                        </a>
                                        <div className="bg-gradient-cover absolute bottom-0 w-full px-5 pb-5 pt-8">
                                            {/*title*/}
                                            <a href="#">
                                                <h2 className="mb-3 text-3xl font-bold capitalize text-white">
                                                    Amazon Shoppers Are Ditching Designer Belts for This Best-Selling
                                                </h2>
                                            </a>
                                            <p className="hidden text-gray-100 sm:inline-block">
                                                Russia says a fire on its flagship vessel in the Black Sea detonated
                                                munitions - Ukraine says it fired missiles at the Moskva
                                            </p>
                                            {/* author and date */}
                                            <div className="pt-2">
                                                <div className="text-gray-100">
                                                    <div className="mr-2 inline-block h-3 border-l-2 border-red-600"></div>
                                                    Europe
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0">
                                    <div className="hover-img flex flex-row sm:block">
                                        <a href="">
                                            <img
                                                className="mx-auto w-full max-w-full"
                                                src="/src/img/dummy/img13.jpg"
                                                alt="alt title"
                                            />
                                        </a>
                                        <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                            <h3 className="mb-2 text-lg font-bold leading-tight">
                                                <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                            </h3>
                                            <p className="mb-1 hidden leading-tight text-gray-600 md:block">
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content.
                                            </p>
                                            <a className="text-gray-500" href="#">
                                                <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
                                                Europe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0">
                                    <div className="hover-img flex flex-row sm:block">
                                        <a href="">
                                            <img
                                                className="mx-auto w-full max-w-full"
                                                src="/src/img/dummy/img14.jpg"
                                                alt="alt title"
                                            />
                                        </a>
                                        <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                            <h3 className="mb-2 text-lg font-bold leading-tight">
                                                <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                            </h3>
                                            <p className="mb-1 hidden leading-tight text-gray-600 md:block">
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content.
                                            </p>
                                            <a className="text-gray-500" href="#">
                                                <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
                                                Europe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0">
                                    <div className="hover-img flex flex-row sm:block">
                                        <a href="">
                                            <img
                                                className="mx-auto w-full max-w-full"
                                                src="/src/img/dummy/img15.jpg"
                                                alt="alt title"
                                            />
                                        </a>
                                        <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                            <h3 className="mb-2 text-lg font-bold leading-tight">
                                                <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                            </h3>
                                            <p className="mb-1 hidden leading-tight text-gray-600 md:block">
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content.
                                            </p>
                                            <a className="text-gray-500" href="#">
                                                <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
                                                Europe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0">
                                    <div className="hover-img flex flex-row sm:block">
                                        <a href="">
                                            <img
                                                className="mx-auto w-full max-w-full"
                                                src="/src/img/dummy/img16.jpg"
                                                alt="alt title"
                                            />
                                        </a>
                                        <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                            <h3 className="mb-2 text-lg font-bold leading-tight">
                                                <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                            </h3>
                                            <p className="mb-1 hidden leading-tight text-gray-600 md:block">
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content.
                                            </p>
                                            <a className="text-gray-500" href="#">
                                                <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
                                                Europe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0">
                                    <div className="hover-img flex flex-row sm:block">
                                        <a href="">
                                            <img
                                                className="mx-auto w-full max-w-full"
                                                src="/src/img/dummy/img17.jpg"
                                                alt="alt title"
                                            />
                                        </a>
                                        <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                            <h3 className="mb-2 text-lg font-bold leading-tight">
                                                <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                            </h3>
                                            <p className="mb-1 hidden leading-tight text-gray-600 md:block">
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content.
                                            </p>
                                            <a className="text-gray-500" href="#">
                                                <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
                                                Europe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0">
                                    <div className="hover-img flex flex-row sm:block">
                                        <a href="">
                                            <img
                                                className="mx-auto w-full max-w-full"
                                                src="/src/img/dummy/img18.jpg"
                                                alt="alt title"
                                            />
                                        </a>
                                        <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                            <h3 className="mb-2 text-lg font-bold leading-tight">
                                                <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                            </h3>
                                            <p className="mb-1 hidden leading-tight text-gray-600 md:block">
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content.
                                            </p>
                                            <a className="text-gray-500" href="#">
                                                <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
                                                Europe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right */}
                        <div className="order-first w-full max-w-full flex-shrink lg:order-last lg:w-1/3 lg:pb-8 lg:pl-8 lg:pt-14">
                            <div className="w-full bg-white">
                                <div className="mb-6">
                                    <div className="bg-gray-100 p-4">
                                        <h2 className="text-lg font-bold">Most Popular</h2>
                                    </div>
                                    <ul className="post-number">
                                        <li className="border-b border-gray-100 hover:bg-gray-50">
                                            <a
                                                className="flex flex-row items-center px-6 py-3 text-lg font-bold"
                                                href="#"
                                            >
                                                Why the world would end without political polls
                                            </a>
                                        </li>
                                        <li className="border-b border-gray-100 hover:bg-gray-50">
                                            <a
                                                className="flex flex-row items-center px-6 py-3 text-lg font-bold"
                                                href="#"
                                            >
                                                Meet The Man Who Designed The Ducati Monster
                                            </a>
                                        </li>
                                        <li className="border-b border-gray-100 hover:bg-gray-50">
                                            <a
                                                className="flex flex-row items-center px-6 py-3 text-lg font-bold"
                                                href="#"
                                            >
                                                2020 Audi R8 Spyder spy shots release
                                            </a>
                                        </li>
                                        <li className="border-b border-gray-100 hover:bg-gray-50">
                                            <a
                                                className="flex flex-row items-center px-6 py-3 text-lg font-bold"
                                                href="#"
                                            >
                                                Lamborghini makes Huracán GT3 racer faster for 2019
                                            </a>
                                        </li>
                                        <li className="border-b border-gray-100 hover:bg-gray-50">
                                            <a
                                                className="flex flex-row items-center px-6 py-3 text-lg font-bold"
                                                href="#"
                                            >
                                                ZF plans $14 billion autonomous vehicle push, concept van
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="sticky py-6 text-sm">
                                <div className="w-full text-center">
                                    <a className="uppercase" href="#">
                                        Advertisement
                                    </a>
                                    <a href="#">
                                        <img className="mx-auto" src="/src/img/ads/250.jpg" alt="advertisement area" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BlogCategory;
