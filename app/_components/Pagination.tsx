import { createPaginationHandles } from '@/lib/helpers';
import Link from 'next/link';

export type PaginationProps = {
    count: number;
    current: number;
    distribution?: number | undefined;
    path: string;
    className?: string;
};

export default function Pagination(props: PaginationProps) {
    const pagination = createPaginationHandles({
        current: props.current,
        count: props.count,
        distribution: props.distribution,
    });

    return (
        <>
            {pagination.total > 1 ? (
                <nav
                    aria-label="Page navigation"
                    className={`flex w-full items-center justify-center ${props.className}`}
                >
                    <ul className="flex items-center justify-center space-x-0">
                        <li>
                            {pagination.current === 1 ? null : (
                                <Link
                                    className="relative -mr-0.5 block rounded-r border border-gray-200 bg-white px-4 py-3 hover:bg-gray-700 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    href={`${props.path}?page=${pagination.prev}`}
                                    aria-label="Previous"
                                >
                                    <span aria-hidden="true">«</span>
                                </Link>
                            )}
                        </li>

                        {pagination.pages.map((pageNo, index) => (
                            <li key={index}>
                                <Link
                                    className="relative -mr-0.5 block border border-gray-200 bg-white px-4 py-3 hover:bg-gray-700 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    href={`${props.path}?page=${pageNo}`}
                                >
                                    {pageNo}
                                </Link>
                            </li>
                        ))}

                        <li>
                            {pagination.current === pagination.total ? null : (
                                <Link
                                    className="relative -mr-0.5 block rounded-r border border-gray-200 bg-white px-4 py-3 hover:bg-gray-700 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    href={`${props.path}?page=${pagination.next}`}
                                    aria-label="Next"
                                >
                                    <span aria-hidden="true">»</span>
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
            ) : null}
        </>
    );
}
