import { EventDocument } from '@/lib/document-types';

export default function EventCard({ event }: { event: EventDocument }) {
    return (
        <div className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0">
            <div className="hover-img flex flex-col sm:block">
                <a href={`/events/${event._id}`}>
                    <img
                        className="mx-auto h-[15rem] w-[15rem] max-w-[15rem] object-cover"
                        src={event.images[0].url}
                        alt={event.title}
                    />
                </a>
                <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                    <h3 className="mb-2 text-center text-lg font-bold leading-tight text-black lg:text-2xl">
                        <a href={`/events/${event._id}`}>{event.title}</a>
                    </h3>
                </div>
            </div>
        </div>
    );
}
