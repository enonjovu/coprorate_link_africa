import { fetchEventById } from '@/app/action';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import Link from 'next/link';
import { BsCalendar, BsClock, BsHouse, BsTicket } from 'react-icons/bs';

type paramProps = {
    params: Params;
};

const EventSingle = async ({ params }: paramProps) => {
    const id = params.id;
    const res = await fetchEventById(id);
    const event = res[0];

    return (
        <main id="content">
            <>
                <head>
                    <meta property="og:title" content={event.title} />
                    <meta property="og:description" content={event.description} />
                    <meta property="og:image" content={event.images[0].url} />
                    <meta property="og:url" content={`https://www.clafrica.online/events/${id}`} />
                    <meta property="fb:app_id" content={``} />
                    <meta property="og:type" content={`event`} />
                </head>
                <div className="w-full bg-white py-10">
                    <div className="mx-auto space-y-10 px-3 xl:container sm:px-4 xl:px-2">
                        <div className="flex w-full max-w-full flex-col flex-wrap md:flex-row">
                            <div className="flex h-full w-full flex-col justify-between space-y-6 rounded-2xl p-4 shadow-lg md:flex-row">
                                <Link
                                    href={event.images[0].url}
                                    target="_blank"
                                    className="h-full w-full md:max-w-[40%]"
                                >
                                    <Image
                                        src={event.images[0].url}
                                        className="h-full w-full object-cover"
                                        width={1000}
                                        height={1000}
                                        alt="Company Logo"
                                    />
                                </Link>
                                <div className="flex h-full w-full flex-col items-center space-y-4">
                                    <h1 className="text-3xl font-bold text-black">{event.title}</h1>

                                    <div className="flex h-full w-full flex-col items-center justify-center space-y-6 md:flex-row md:space-x-16 md:space-y-0">
                                        <p className="flex w-2/3 justify-start space-x-4 md:w-1/3 md:justify-center">
                                            <BsClock size={20} color={'#000000'} />
                                            <span className="font-bold text-black">{event.time}</span>
                                        </p>

                                        <p className="flex w-2/3 justify-start space-x-4 md:w-1/3 md:justify-center">
                                            <BsHouse size={20} color={'#000000'} />
                                            <span className="font-bold capitalize text-black">{event.venue}</span>
                                        </p>

                                        <p className="flex w-2/3 justify-start space-x-4 md:w-1/3 md:justify-center">
                                            <BsCalendar size={20} color={'#000000'} />
                                            <span className="font-bold text-black">{event.eventDate}</span>
                                        </p>
                                    </div>
                                    <p className="mb-5 w-11/12 whitespace-pre-wrap text-black ">{event.description}</p>

                                    {event.enquiries_link ? (
                                        <Link
                                            href={event.enquiries_link}
                                            className="h-16 w-11/12 rounded-lg bg-red-700 text-center font-bold text-white md:w-1/3"
                                        >
                                            Enquiries
                                        </Link>
                                    ) : (
                                        <button className="h-16 w-11/12 rounded-lg bg-red-700 text-center font-bold text-white md:w-1/3">
                                            Enquiries
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </main>
    );
};

export default EventSingle;
