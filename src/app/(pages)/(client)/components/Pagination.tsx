import Link from 'next/link';

type PaginationProps = {
    itemCount: number;
    currentPage: number | string;
    path: string;
};

export default function Pagination(props: PaginationProps) {
    const currentPage = parseInt(`${props.currentPage}`);

    const itemsCount = props.itemCount;
    const totalPages = Math.ceil(itemsCount / 12);
    const pageNumber = currentPage;

    const pageNumbers = [];
    const offsetNumer = 3;

    for (let index = pageNumber - offsetNumer; index <= pageNumber + offsetNumer; index++) {
        if (index >= 1 && index <= totalPages) {
            pageNumbers.push(index);
        }
    }

    const prevPage = currentPage - 1 > 0 ? currentPage - 1 : 1;
    const nextPage = currentPage + 1;

    return (
        <>
            {totalPages > 1 ? (
                <nav aria-label="Page navigation">
                    <ul className="flex items-center justify-center space-x-0">
                        <li>
                            {currentPage === 1 ? null : (
                                <Link
                                    className="relative -mr-0.5 block rounded-r border border-gray-200 bg-white px-4 py-3 hover:bg-gray-700 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    href={`${props.path}/?page=${prevPage}`}
                                    aria-label="Previous"
                                >
                                    <span aria-hidden="true">«</span>
                                </Link>
                            )}
                        </li>

                        {pageNumbers.map((pageNo, index) => (
                            <li key={index}>
                                <Link
                                    className="relative -mr-0.5 block border border-gray-200 bg-white px-4 py-3 hover:bg-gray-700 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    href={`${props.path}/?page=${pageNo}`}
                                >
                                    {pageNo}
                                </Link>
                            </li>
                        ))}

                        <li>
                            {currentPage === totalPages ? null : (
                                <Link
                                    className="relative -mr-0.5 block rounded-r border border-gray-200 bg-white px-4 py-3 hover:bg-gray-700 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    href={`${props.path}/?page=${nextPage}`}
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
