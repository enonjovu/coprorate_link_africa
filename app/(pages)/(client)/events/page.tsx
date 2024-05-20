import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { fetchEvents } from '@/app/action';
import Link from 'next/link';
import EventsListing from '../components/EventsListing';
import TopStories from '../components/TopStories';

const EventsPage = async ({ searchParams }: { searchParams: Params }) => {
    let page = searchParams['page'] ?? '1';
    const results = await fetchEvents(page);
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
        <main id="content">
            <div className="bg-gray-50 py-10">
                <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        {/* Left */}
                        <div className="w-full max-w-full flex-shrink overflow-hidden  lg:w-full">
                            <div className="w-full py-3">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    <span className="border-l-3 mr-2 inline-block h-5 border-l-2 border-red-600"></span>
                                    EVENTS
                                </h2>
                            </div>
                            <div className="-mx-3 flex flex-row flex-wrap">
                                {/* Events */}
                                <EventsListing events={events} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EventsPage;
