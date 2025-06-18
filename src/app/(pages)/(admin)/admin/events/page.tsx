import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import EventsListing from '../../components/EventsListing';
import { fetchEvents } from '@/app/action';
import Link from 'next/link';
import ButtonLink from '../_components/Button/ButtonLink';
import DashboardPageHeading from '../_components/DashboardPageHeading';
import Pagination from '@/app/_components/Pagination';

const AllEvents = async ({ searchParams }: { searchParams: Params }) => {
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
        <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                <div className="w-full max-w-full flex-shrink overflow-hidden">
                    <DashboardPageHeading title="All Events" className=" inline-flex items-center justify-between">
                        <ButtonLink href="/admin/events/new">Create</ButtonLink>
                    </DashboardPageHeading>
                    <EventsListing events={events} />
                </div>
                <div className="mt-4 text-center">
                    <Pagination current={currentPage} count={itemsCount} path="/admin/events" />
                </div>
            </div>
        </div>
    );
};

export default AllEvents;
