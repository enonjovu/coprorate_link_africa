import { createPaginationHandles } from '@/lib/helpers';
import Link from 'next/link';

import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

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

    const linkClasses = (active?: boolean) => {
        const defaultStyles = 'flex h-10 items-center justify-center border px-4 leading-tight px-4 leading-tight';

        const activeStyle = active
            ? 'z-10 border-red-300 bg-blue-50 text-red-600 hover:bg-red-100 hover:text-red-700'
            : ' border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700';

        return `${activeStyle} ${defaultStyles}`;
    };

    return (
        <>
            {pagination.total > 1 ? (
                <nav aria-label="pagination" className="flex w-full items-center justify-center">
                    <ul className="flex h-10 items-center -space-x-px text-base">
                        {pagination.current == 1 ? (
                            <li>
                                <span className="ms-0 flex h-10 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                    <span className="sr-only">Previous</span>

                                    <ChevronDoubleLeftIcon className="h-3 w-3 rtl:rotate-180" />
                                </span>
                            </li>
                        ) : (
                            <li>
                                <Link
                                    href={`${props.path}?page=${pagination.prev}`}
                                    aria-label="Previous"
                                    className="ms-0 flex h-10 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <span className="sr-only">Previous</span>

                                    <ChevronDoubleLeftIcon className="h-3 w-3 rtl:rotate-180" />
                                </Link>
                            </li>
                        )}

                        {pagination.pages.map((pageNo, index) =>
                            pagination.current == pageNo ? (
                                <li key={index}>
                                    <span className={linkClasses(pagination.current == pageNo)}>{pageNo}</span>
                                </li>
                            ) : (
                                <li key={index}>
                                    <Link
                                        href={`${props.path}?page=${pageNo}`}
                                        className={linkClasses(pagination.current == pageNo)}
                                    >
                                        {pageNo}
                                    </Link>
                                </li>
                            ),
                        )}

                        {pagination.current == pagination.total ? (
                            <li>
                                <span className="flex h-10 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                    <span className="sr-only">Next</span>
                                    <ChevronDoubleRightIcon className="h-3 w-3 rtl:rotate-180" />
                                </span>
                            </li>
                        ) : (
                            <li>
                                <Link
                                    href={`${props.path}?page=${pagination.next}`}
                                    aria-label="Next"
                                    className="flex h-10 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <span className="sr-only">Next</span>
                                    <ChevronDoubleRightIcon className="h-3 w-3 rtl:rotate-180" />
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            ) : null}
        </>
    );
}
