import '@/app/_styles/global.css';
import '@/app/_styles/client.css';

import type { Metadata } from 'next';

import AuthProvider from '@/app/context/AuthProvider';
import PrelineScript from '@/app/_components/PrelineScripts';
import InjectAnalyticsScripts from '@/app/_components/InjectAnalyticsScripts';
import InterFontWrapper from '@/app/_components/InterFontWrapper';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
                            <Navbar />
                            {children}
                            <Footer />
                        </ToastWrapper>
                    </InterFontWrapper>
                    <PrelineScript />
                </AuthProvider>
                <InjectAnalyticsScripts />
            </body>
        </html>
    );
}
