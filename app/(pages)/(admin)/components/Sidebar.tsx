'use client';
import { BsBriefcase, BsCalendarEvent, BsNewspaper } from 'react-icons/bs';
import {
    FaAd,
    FaArrowRight,
    FaArrowUp,
    FaBriefcase,
    FaListAlt,
    FaNewspaper,
    FaPlusCircle,
    FaUser,
} from 'react-icons/fa';

const sidebar = () => {
    return (
        <div
            id="application-sidebar"
            className="hs-overlay fixed bottom-0 start-0 top-0 z-[60] hidden w-64 -translate-x-full transform overflow-y-auto border-e border-gray-200 bg-white pb-10 pt-7 transition-all duration-300 hs-overlay-open:translate-x-0 lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 dark:border-gray-700 dark:bg-gray-800 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar]:w-2"
        >
            <div className="px-6">
                <a
                    className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                    aria-label="Brand"
                >
                    Corporate link Africa
                </a>
            </div>

            <nav className="hs-accordion-group flex w-full flex-col flex-wrap p-6" data-hs-accordion-always-open>
                <ul className="space-y-1.5">
                    <li>
                        <a
                            className="flex items-center gap-x-3.5 rounded-lg bg-gray-100 px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="/admin/"
                        >
                            <svg
                                className="h-4 w-4 flex-shrink-0"
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
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            Dashboard
                        </a>
                    </li>

                    {/* News */}
                    <li className="hs-accordion" id="users-accordion">
                        <button
                            type="button"
                            className="hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-accordion-active:text-white"
                        >
                            <BsNewspaper size={20} color="#fff" />
                            News
                            <svg
                                className="ms-auto hidden h-4 w-4 hs-accordion-active:block"
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
                                <path d="m18 15-6-6-6 6" />
                            </svg>
                            <svg
                                className="ms-auto block h-4 w-4 hs-accordion-active:hidden"
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

                        <div
                            id="users-accordion-child"
                            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        >
                            <ul className="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="/admin/news/"
                                    >
                                        <FaNewspaper size={20} color="#fff" />
                                        All Articles
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="/admin/news/new"
                                    >
                                        <FaPlusCircle size={20} color="#fff" />
                                        New Article
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* Events */}
                    <li className="hs-accordion" id="users-accordion">
                        <button
                            type="button"
                            className="hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-accordion-active:text-white"
                        >
                            <BsCalendarEvent size={20} color="#fff" />
                            Events
                            <svg
                                className="ms-auto hidden h-4 w-4 hs-accordion-active:block"
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
                                <path d="m18 15-6-6-6 6" />
                            </svg>
                            <svg
                                className="ms-auto block h-4 w-4 hs-accordion-active:hidden"
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

                        <div
                            id="users-accordion-child"
                            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        >
                            <ul className="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="/admin/events/"
                                    >
                                        <FaNewspaper size={20} color="#fff" />
                                        All Events
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="/admin/events/new"
                                    >
                                        <FaPlusCircle size={20} color="#fff" />
                                        New Event
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* Adverts */}
                    <li className="hs-accordion" id="users-accordion">
                        <button
                            type="button"
                            className="hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-accordion-active:text-white"
                        >
                            <FaAd size={20} color="#fff" />
                            Main Adverts
                            <svg
                                className="ms-auto hidden h-4 w-4 hs-accordion-active:block"
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
                                <path d="m18 15-6-6-6 6" />
                            </svg>
                            <svg
                                className="ms-auto block h-4 w-4 hs-accordion-active:hidden"
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

                        <div
                            id="users-accordion-child"
                            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        >
                            <ul className="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="/admin/ads/"
                                    >
                                        <FaAd size={20} color="#fff" />
                                        All Main Adverts
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="/admin/ads/new"
                                    >
                                        <FaPlusCircle size={20} color="#fff" />
                                        New Main Advert
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="hs-accordion" id="users-accordion">
                        <button
                            type="button"
                            className="hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-accordion-active:text-white"
                        >
                            <FaArrowUp size={20} color="#fff" />
                            Top Adverts
                            <svg
                                className="ms-auto hidden h-4 w-4 hs-accordion-active:block"
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
                                <path d="m18 15-6-6-6 6" />
                            </svg>
                            <svg
                                className="ms-auto block h-4 w-4 hs-accordion-active:hidden"
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

                        <div
                            id="users-accordion-child"
                            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        >
                            <ul className="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="/admin/topAds/"
                                    >
                                        <FaArrowUp size={20} color="#fff" />
                                        All Top Adverts
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="/admin/topAds/new"
                                    >
                                        <FaPlusCircle size={20} color="#fff" />
                                        New Top Advert
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="hs-accordion" id="users-accordion">
                        <button
                            type="button"
                            className="hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-accordion-active:text-white"
                        >
                            <FaArrowRight size={20} color="#fff" />
                            Right Side Adverts
                            <svg
                                className="ms-auto hidden h-4 w-4 hs-accordion-active:block"
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
                                <path d="m18 15-6-6-6 6" />
                            </svg>
                            <svg
                                className="ms-auto block h-4 w-4 hs-accordion-active:hidden"
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

                        <div
                            id="users-accordion-child"
                            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        >
                            <ul className="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="/admin/rightAds/"
                                    >
                                        <FaArrowRight size={20} color="#fff" />
                                        All Right Side Adverts
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="/admin/rightAds/new"
                                    >
                                        <FaPlusCircle size={20} color="#fff" />
                                        New Right Side Advert
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* Tenders */}
                    <li className="hs-accordion" id="users-accordion">
                        <button
                            type="button"
                            className="hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-accordion-active:text-white"
                        >
                            <BsBriefcase size={20} color="#fff" />
                            Tenders
                            <svg
                                className="ms-auto hidden h-4 w-4 hs-accordion-active:block"
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
                                <path d="m18 15-6-6-6 6" />
                            </svg>
                            <svg
                                className="ms-auto block h-4 w-4 hs-accordion-active:hidden"
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

                        <div
                            id="users-accordion-child"
                            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        >
                            <ul className="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="/admin/tenders/"
                                    >
                                        <BsBriefcase size={20} color="#fff" />
                                        All Tenders
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="/admin/tenders/new"
                                    >
                                        <FaPlusCircle size={20} color="#fff" />
                                        New Tender
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* Directory */}
                    <li className="hs-accordion" id="users-accordion">
                        <button
                            type="button"
                            className="hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-accordion-active:text-white"
                        >
                            <FaListAlt size={20} color="#fff" />
                            Directories
                            <svg
                                className="ms-auto hidden h-4 w-4 hs-accordion-active:block"
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
                                <path d="m18 15-6-6-6 6" />
                            </svg>
                            <svg
                                className="ms-auto block h-4 w-4 hs-accordion-active:hidden"
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

                        <div
                            id="users-accordion-child"
                            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        >
                            <ul className="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="/admin/directories/"
                                    >
                                        <FaListAlt size={20} color="#fff" />
                                        All Directories
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="/admin/directories/new"
                                    >
                                        <FaPlusCircle size={20} color="#fff" />
                                        New Directory
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default sidebar;
