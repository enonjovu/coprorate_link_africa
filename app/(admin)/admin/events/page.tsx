import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import EventsListing from "../../components/EventsListing";
import { fetchEvents } from "@/app/action";
import Link from "next/link"

const AllEvents = async ({ searchParams, }: { searchParams: Params }) => {
    let page = searchParams['page'] ?? "1";
    const results = await fetchEvents(page)
    const events = results.events;
    const itemsCount = results.itemsCount;

    const totalPages = Math.ceil(itemsCount / 12);
    const pageNumber = parseInt(page);

    const pageNumbers = [];
    const offsetNumer = 3;

    for (let index = pageNumber - offsetNumer; index <= pageNumber + offsetNumer; index++) {
        if (index >= 1 && index <= totalPages) {
            pageNumbers.push(index);
        }

    }

    const currentPage = parseInt(page);
    const prevPage = currentPage - 1 > 0 ? currentPage - 1 : 1;
    const nextPage = currentPage + 1;

    return (
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                <div className="flex-shrink max-w-full w-full overflow-hidden">
                    <div className="w-full py-3">
                        <h2 className="text-gray-800 dark:text-white text-2xl font-bold">
                            <span className="inline-block h-5 border-l-3 border-red-600 border-2 mr-2"></span>
                            All Events
                        </h2>
                    </div>
                    <EventsListing events={events} />
                </div>
                <div className="text-center mt-4">
                    <nav aria-label="Page navigation">
                        <ul className="flex justify-center items-center space-x-0">
                            <li>
                                {
                                    currentPage === 1 ? (null)
                                        : <Link className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5 rounded-r" href={`/admin/news/?page=${prevPage}`} aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                        </Link>
                                }
                            </li>

                            {
                                pageNumbers.map((pageNo, index) => (
                                    <li key={index}>
                                        <Link className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5" href={`/admin/news/?page=${pageNo}`}>
                                            {pageNo}
                                        </Link>
                                    </li>
                                ))
                            }

                            <li>
                                {
                                    currentPage === totalPages ? (null)
                                        : <Link className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5 rounded-r" href={`/admin/news/?page=${nextPage}`} aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                        </Link>
                                }
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default AllEvents;