import InterFontWrapper from '@/app/_components/InterFontWrapper';
import '@/app/_styles/global.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Error',
    description: 'Simplified Business Narratives',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <InterFontWrapper>{children}</InterFontWrapper>
            </body>
        </html>
    );
}
