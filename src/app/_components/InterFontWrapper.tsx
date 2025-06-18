import { Inter } from 'next/font/google';
import { checkApplicationInProduction } from '@/lib/helpers';
import { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function InterFontWrapper(props: PropsWithChildren) {
    const production = checkApplicationInProduction();

    return <div className={production ? inter.className : ''}>{props.children}</div>;
}
