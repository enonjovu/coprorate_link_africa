import { trimText } from '@/lib/helpers';
import Event from '@/models/Event';
import Tender from '@/models/Tender';
import Image from 'next/image';

const EveTend = async (params: { eventsCount?: number; tendersCount?: number; minimal?: boolean }) => {
    const envents = await Event.find({})
        .sort({ createdAt: -1 })
        .limit(params.eventsCount ?? 4)
        .find();

    const tenders = params.minimal
        ? []
        : await Tender.find({})
              .sort({ createdAt: -1 })
              .limit(params.tendersCount ?? 4)
              .find();

    return (
        <div className="w-full space-y-6 bg-white">
            {envents && (
                <div>
                    <div className="bg-gray-100 p-4">
                        <h2 className="text-lg font-bold text-black">Events</h2>
                    </div>
                    <ul className="post-number">
                        {envents.map((event) => (
                            <li
                                key={`id-${event.id}`}
                                className="flex items-center border-b border-gray-100 px-6 py-3 hover:bg-gray-50"
                            >
                                <div className="shrink-0">
                                    <Image
                                        alt={event.title}
                                        width={200}
                                        height={200}
                                        className="size-20 origin-center rounded-sm object-cover"
                                        src={event.images[0].url}
                                    />
                                </div>
                                <div className="ml-2 flex flex-1 flex-col">
                                    <a
                                        className="flex flex-row items-center text-lg font-bold  capitalize text-black hover:underline"
                                        href={`/events/${event.id}`}
                                    >
                                        {event.title}
                                    </a>
                                    {event.venue ? (
                                        <p className="text-sm capitalize text-gray-500">{event.venue}</p>
                                    ) : null}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {!params.minimal && tenders && (
                <div>
                    <div className="bg-gray-100 p-4">
                        <h2 className="text-lg font-bold text-black">Tenders</h2>
                    </div>
                    <ul className="post-number">
                        {tenders.map((tender) => (
                            <li key={`id-${tender.id}`} className="border-b border-gray-100 px-6 py-3 hover:bg-gray-50">
                                <a
                                    className="flex flex-row items-center text-lg  font-bold text-black hover:underline"
                                    href={`/tender/${tender.id}`}
                                >
                                    {tender.title}
                                </a>
                                {tender.description ? (
                                    <p className="text-gray-500">{trimText(tender.description, 0, 10)}...</p>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default EveTend;
