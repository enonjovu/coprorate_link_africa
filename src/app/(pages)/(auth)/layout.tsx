import type { Metadata } from 'next';

//import '@/app/_styles/global.css';
import '@/app/_styles/client.css';

import PrelineScript from '@/app/_components/PrelineScripts';
import AuthProvider from '@/app/context/AuthProvider';

export const metadata: Metadata = {
    title: 'Corporate Link Africa',
    description: 'Simplified Business Narratives',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>{children}</AuthProvider>
                <PrelineScript />
            </body>
        </html>
    );
}
