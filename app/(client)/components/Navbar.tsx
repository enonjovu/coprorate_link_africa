import Image from 'next/image';
import TopAds from './TopAds';
import SearchForm from './SearchForm';
import AuthButtons from './AuthButons';

const Navbar = () => {
    return (
        <>
            {/* <TopAds /> */}
            <header className="z-50 flex w-full flex-wrap border-b border-gray-200 bg-white pb-2 text-sm dark:border-red-700 dark:bg-gray-100 sm:flex-col sm:justify-start sm:pb-0">
                <nav
                    className="relative mx-auto w-full max-w-[85rem] px-4 sm:flex sm:items-center sm:justify-between sm:px-12 lg:px-16"
                    aria-label="Global"
                >
                    <div className="flex h-16 items-center justify-between">
                        <a
                            className="flex h-full items-center justify-center py-4 text-xl font-semibold dark:text-white"
                            href="/"
                            aria-label="Brand"
                        >
                            <Image src={'/src/img/logo.png'} width={150} height={150} alt="" />
                        </a>
                        <div className="sm:hidden ">
                            <button
                                type="button"
                                className="hs-collapse-toggle flex h-9 w-9 items-center 
            justify-center rounded-lg border border-gray-200 text-sm font-semibold 
            text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50
             dark:border-red-500 dark:bg-red-800 dark:text-white 
             dark:hover:bg-red-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-red-600"
                                data-hs-collapse="#navbar-collapse-with-animation"
                                aria-controls="navbar-collapse-with-animation"
                                aria-label="Toggle navigation"
                            >
                                <svg
                                    className="h-4 w-4 flex-shrink-0 hs-collapse-open:hidden"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="3" x2="21" y1="6" y2="6" />
                                    <line x1="3" x2="21" y1="12" y2="12" />
                                    <line x1="3" x2="21" y1="18" y2="18" />
                                </svg>
                                <svg
                                    className="hidden h-4 w-4 flex-shrink-0 hs-collapse-open:block"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        id="navbar-collapse-with-animation"
                        className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
                    >
                        <div className="mt-5 flex flex-col gap-x-0 gap-y-4 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-x-7 sm:gap-y-0 sm:ps-7">
                            {/* News */}
                            <a
                                className="font-medium text-gray-800 hover:text-gray-500 dark:text-red-500 dark:hover:text-gray-400 sm:py-6"
                                href="/news/category/mining"
                            >
                                Mining
                            </a>
                            <a
                                className="font-medium text-gray-800 hover:text-gray-500 dark:text-red-500 dark:hover:text-gray-400 sm:py-6"
                                href="/news/category/energy"
                            >
                                Energy{' '}
                            </a>
                            <a
                                className="font-medium text-gray-800 hover:text-gray-500 dark:text-red-500 dark:hover:text-gray-400 sm:py-6"
                                href="/news/category/tourism"
                            >
                                Tourism{' '}
                            </a>
                            <div className="hs-dropdown [--adaptive:none] [--strategy:static] sm:py-4 sm:[--strategy:fixed] sm:[--trigger:hover]">
                                <button
                                    type="button"
                                    className="flex w-full items-center font-medium text-gray-800 hover:text-gray-500 dark:text-red-500 dark:hover:text-gray-400"
                                >
                                    Directory
                                    <svg
                                        className="ms-2 h-4 w-4 flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                <div className="hs-dropdown-menu top-full z-10 hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:start-0  before:h-5 before:w-full hs-dropdown-open:opacity-100 sm:w-48 sm:border sm:shadow-md sm:duration-[150ms] sm:dark:border">
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500"
                                        href="/directory"
                                    >
                                        Company Profiles
                                    </a>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500"
                                        href="/leaders"
                                    >
                                        Individial Profiles
                                    </a>
                                </div>
                            </div>

                            <a
                                className="font-medium text-gray-800 hover:text-gray-500 dark:text-red-500 dark:hover:text-gray-400 sm:py-6"
                                href="/tenders"
                            >
                                Tenders
                            </a>
                            <a
                                className="font-medium text-gray-800 hover:text-gray-500 dark:text-red-500 dark:hover:text-gray-400 sm:py-6"
                                href="/events"
                            >
                                Events
                            </a>
                            <a
                                className="font-medium text-gray-800 hover:text-gray-500 dark:text-red-500 dark:hover:text-gray-400 sm:py-6"
                                href="/services"
                            >
                                Services
                            </a>
                            <a
                                className="font-medium text-gray-800 hover:text-gray-500 dark:text-red-500 dark:hover:text-gray-400 sm:py-6"
                                href="/about"
                            >
                                About
                            </a>

                            <SearchForm />
                            <AuthButtons />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
