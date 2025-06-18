'use client';
import { deleteEvent } from '@/app/action';
import { BsPencil, BsTrash } from 'react-icons/bs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type eventProps = {
    _id: string;
    title: string;
    description: string;
    images: { key: string; url: string }[];
    date: string;
}[];

const EventsListing = ({ events }: { events: eventProps }) => {
    const route = useRouter();

    const handleDeleteEvent = async (id: string) => {
        const request = await deleteEvent(id);

        if (request) {
            alert('Event deleted!');
            route.refresh();
        }
    };

    return (
        <div className="-mx-3 flex flex-row flex-wrap">
            <>
                {events?.map((event) => (
                    <div
                        key={event._id}
                        className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0"
                    >
                        <div className="hover-img flex flex-row sm:block">
                            <a href={`/events/single/${event._id}`}>
                                <Image
                                    width={900}
                                    height={800}
                                    className="mx-auto h-40 max-h-40 min-h-40 w-full max-w-full overflow-hidden object-cover"
                                    src={event.images[0].url}
                                    alt="alt title"
                                />
                            </a>
                            <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                <h3 className="mb-2 text-lg font-bold leading-tight">
                                    <a href={`/events/single/${event._id}`} className="text-gray-800">
                                        {event.title}
                                    </a>
                                </h3>
                            </div>
                            <div className="roundeg-lg flex h-16 w-full items-center justify-center space-x-16 bg-red-700">
                                <a
                                    href={`/admin/events/edit/${event._id}`}
                                    className="rounded-lg border-[1px] border-white p-2"
                                >
                                    <BsPencil size={20} color={'#fff'} />
                                </a>

                                <div
                                    onClick={() => handleDeleteEvent(event._id)}
                                    className="cursor-pointer rounded-lg border-[1px] border-white p-2"
                                >
                                    <BsTrash size={20} color={'#fff'} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        </div>
    );
};

export default EventsListing;
