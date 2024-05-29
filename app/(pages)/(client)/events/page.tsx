import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { fetchEvents } from '@/app/action';
import Link from 'next/link';
import EventsListing from '../components/EventsListing';
import TopStories from '../components/TopStories';
import { getEvents, getEventsCount } from '@/lib/repositories/EventRepository';
import Pagination from '@/app/_components/Pagination';
import Image from 'next/image';
import EventCard from '@/app/_components/Event/EventCard';

type PageProps = {
    searchParams?: { [key: string]: string | string[] | undefined };
};

export const metadata = {
    title: 'Corporate Link Africa - Events',
    description: 'Simplified Business Narratives',
};

const EventsPage = async ({ searchParams }: PageProps) => {
    const currentPage = parseInt(`${searchParams?.page ?? 1}`);

    const events = await getEvents({
        currentPage,
    });

    const eventCount = await getEventsCount();

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
                                <div className="bg-gray-50 py-6">
                                    <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
                                        <div className="flex flex-row flex-wrap">
                                            <div className="w-full max-w-full flex-shrink overflow-hidden">
                                                <div className="-mx-3 flex flex-row flex-wrap">
                                                    <div className="w-full max-w-full flex-shrink px-3 pb-5">
                                                        <div className="hover-img relative max-h-[50vh] overflow-hidden">
                                                            {/*thumbnail*/}
                                                            <a href="#">
                                                                <Image
                                                                    className="mx-auto h-auto w-full max-w-full object-cover"
                                                                    width={1300}
                                                                    height={400}
                                                                    src="/src/img/events.jpg"
                                                                    alt="Image description"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {events.length ? (
                                                        events.map((event) => (
                                                            <EventCard event={event} key={event._id} />
                                                        ))
                                                    ) : (
                                                        <></>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Pagination
                                count={eventCount}
                                current={currentPage}
                                distribution={12}
                                path={`/events`}
                                className="mt-4 text-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EventsPage;
