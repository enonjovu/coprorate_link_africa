import Image from 'next/image';
type eventProps = {
    events: {
        _id: string;
        title: string;
        description: string;
        images: { key: string; url: string }[];
        date: string;
    }[];
};

const EventsListing = async ({ events }: eventProps) => {
    return (
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
                                    <div
                                        key={event._id}
                                        className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0"
                                    >
                                        <div className="hover-img flex flex-col sm:block">
                                            <a href={`/events/${event._id}`}>
                                                <img
                                                    className="mx-auto h-[15rem] w-[15rem] max-w-[15rem] object-cover"
                                                    src={event.images[0].url}
                                                    alt="alt title"
                                                />
                                            </a>
                                            <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                                <h3 className="mb-2 text-center text-lg font-bold leading-tight text-black lg:text-2xl">
                                                    <a href={`/events/${event._id}`}>{event.title}</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsListing;
