import { PropsWithChildren } from 'react';

export default function DashboardPageHeading(props: PropsWithChildren<{ title: string; className?: string }>) {
    return (
        <div className={`w-full py-3 ${props.className ?? ''}`}>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                <span className="border-l-3 mr-2 inline-block h-5 border-2 border-red-600"></span>
                {props.title}
            </h2>

            {props.children}
        </div>
    );
}
