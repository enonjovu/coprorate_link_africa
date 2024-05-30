import {
    HomeIcon,
    NewspaperIcon,
    CalendarDaysIcon,
    BriefcaseIcon,
    UserGroupIcon,
    Cog6ToothIcon,
    TagIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';

import { FaAd, FaListAlt } from 'react-icons/fa';

const sidebar = () => {
    const navigationLinks = [
        { name: 'Dashboard', icon: <HomeIcon className="size-6" />, href: '/admin' },
        { name: 'News', icon: <NewspaperIcon className="size-6" />, href: '/admin/news' },
        { name: 'Categories', icon: <TagIcon className="size-6" />, href: '/admin/categories' },
        { name: 'Events', icon: <CalendarDaysIcon className="size-6" />, href: '/admin/events' },
        { name: 'Tenders', icon: <BriefcaseIcon className="size-6" />, href: '/admin/tenders' },
        { name: 'Directories', icon: <FaListAlt className="size-6" />, href: '/admin/directories' },
        { name: 'Profiles', icon: <UserGroupIcon className="size-6" />, href: '/admin/profiles' },
        { name: 'Adverts', icon: <FaAd className="size-6" />, href: '/admin/ads' },
        { name: 'Administration', icon: <Cog6ToothIcon className="size-6" />, href: '/admin/administration' },
    ];
    return (
        <div
            id="application-sidebar"
            className="hs-overlay fixed bottom-0 start-0 top-0 z-[60] hidden w-64 -translate-x-full transform overflow-y-auto border-e border-gray-200 bg-white pb-10 pt-7 transition-all duration-300 hs-overlay-open:translate-x-0 lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 dark:border-gray-700 dark:bg-gray-800 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar]:w-2"
        >
            <div className="px-6">
                <a
                    className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/admin"
                    aria-label="Brand"
                >
                    Corporate link Africa
                </a>
            </div>

            <nav className="flex w-full flex-col flex-wrap p-6">
                <ul className="space-y-1.5">
                    {navigationLinks.map((navlink) => (
                        <li key={navlink.href}>
                            <a
                                className="flex items-center gap-x-3.5 rounded-lg bg-gray-100 px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-900/40 dark:text-white dark:hover:bg-gray-900/90 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href={navlink.href}
                            >
                                {navlink.icon}
                                <p>{navlink.name}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default sidebar;
