import '@/app/_styles/global.css';

import { Metadata } from 'next';

import AuthProvider from '@/app/context/AuthProvider';
import PrelineScript from '@/app/_components/PrelineScripts';
import Sidebar from './components/Sidebar';
import HeaderComponent from './components/HeaderComponent';
import InterFontWrapper from '@/app/_components/InterFontWrapper';
import { Bars3Icon } from '@heroicons/react/24/outline';
import ToastWrapper from '@/app/_components/ToastWrapper';

export const metadata: Metadata = {
    title: 'Corporate Link Africa',
    description: 'Simplified Business Narratives',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <InterFontWrapper>
                        <ToastWrapper>
                            <HeaderComponent />
                            <div className="sticky inset-x-0 top-0 z-20 border-y bg-white px-4 dark:border-gray-700 dark:bg-gray-800 sm:px-6 md:px-8 lg:hidden">
                                <div className="flex items-center py-4">
                                    <button
                                        type="button"
                                        className="text-gray-500 hover:text-gray-600"
                                        data-hs-overlay="#application-sidebar"
                                        aria-controls="application-sidebar"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="sr-only">Toggle Navigation</span>
                                        <Bars3Icon className="size-8" />
                                    </button>
                                    {/* End Navigation Toggle */}
                                </div>
                            </div>
                            <Sidebar />
                            <div className="w-full px-4 pb-16 pt-10 sm:px-6 md:px-8 lg:ps-72">{children}</div>
                        </ToastWrapper>
                        <PrelineScript />
                    </InterFontWrapper>
                </AuthProvider>
            </body>
        </html>
    );
}
