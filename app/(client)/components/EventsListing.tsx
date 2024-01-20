import Image from "next/image";
type eventProps = {
    events: {
        _id: string,
        title: string,
        description: string,
        images: { key: string, url: string }[],
        date: string
    }[]
}

const EventsListing = async ({ events }: eventProps) => {
    return (

        <div className="bg-gray-50 py-6">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    <div className="flex-shrink max-w-full w-full overflow-hidden">
                        <div className="flex flex-row flex-wrap -mx-3">
                            <div className="flex-shrink max-w-full w-full px-3 pb-5">
                                <div className="relative hover-img max-h-[50vh] overflow-hidden">
                                    {/*thumbnail*/}
                                    <a href="#">
                                        <Image className="max-w-full w-full mx-auto h-auto object-cover" width={1300} height={400} src="/src/img/events.jpg" alt="Image description" />
                                    </a>
                                </div>
                            </div>
                            {
                                events.map(event => (
                                    <div key={event._id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                        <div className="flex flex-row sm:block hover-img">
                                            <a href={`/events/${event._id}`}>
                                                <img className="max-w-[15rem] w-[15rem] h-[15rem] object-cover mx-auto" src={event.images[0].url} alt="alt title" />
                                            </a>
                                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                                <h3 className="text-2xl text-center text-black font-bold leading-tight mb-2">
                                                    <a href={`/events/${event._id}`}>{event.title}</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventsListing;