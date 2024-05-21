import { trimText } from '@/lib/helpers';
import Event from '@/models/Event';

const EventsSideList = async (params: { eventsCount?: number }) => {
    const envents = await Event.find({})
        .sort({ createdAt: -1 })
        .limit(params.eventsCount ?? 3)
        .find();

    return (
        <div>
            <div className="bg-gray-100 p-4">
                <h2 className="text-lg font-bold text-black">Events</h2>
            </div>
            <ul className="post-number">
                {envents.map((event) => (
                    <li key={`id-${event.id}`} className="border-b border-gray-100 px-6 py-3 hover:bg-gray-50">
                        <a
                            className="flex flex-row items-center text-lg  font-bold text-black hover:underline"
                            href={`/events/${event.id}`}
                        >
                            {event.title}
                        </a>
                        {event.description ? <p className="text-gray-500">{trimText(event.description)}</p> : null}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventsSideList;
