import { PropsWithChildren } from 'react';

export default function ButtonLink(
    props: PropsWithChildren<{
        className?: string;
        href: string;
    }>,
) {
    return (
        <a href={props.href} className={`shrink-0 rounded-md bg-red-600 px-3 py-2 text-white ${props.className ?? ''}`}>
            {props.children}
        </a>
    );
}
