
"use client"
import { deleteEvent } from "@/app/action";
import { BsPencil, BsTrash } from "react-icons/bs";
import Image from "next/image";

type eventProps = {
    _id: string,
    title: string,
    description: string,
    images: { key: string, url: string }[],
    date: string
}[]

const EventsListing = ({ events }: { events: eventProps }) => {

    const handleDeleteEvent = async (id: string) => {
        const request = await deleteEvent(id);

        if (request) {
            alert("Blog deleted!")
        }
    }


    return (
        <div className="flex flex-row flex-wrap -mx-3">
            <>
                {
                    events?.map(event => (
                        <div key={event._id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                                <a href={`/events/single/${event._id}`}>
                                    <Image width={900} height={800} className="max-w-full w-full h-40 min-h-40 max-h-40 overflow-hidden object-cover mx-auto" src={event.images[0].url} alt="alt title" />
                                </a>
                                <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                    <h3 className="text-lg font-bold leading-tight mb-2">
                                        <a href={`/events/single/${event._id}`} className="text-gray-800">{event.title}</a>
                                    </h3>
                                </div>
                                <div className="w-full h-16 bg-red-700 roundeg-lg flex items-center justify-center space-x-16">
                                    <a href={`/admin/events/edit/${event._id}`} className="rounded-lg border-[1px] border-white p-2">
                                        <BsPencil size={20} color={"#fff"} />
                                    </a>

                                    <div onClick={() => (handleDeleteEvent(event._id))} className="cursor-pointer rounded-lg border-[1px] border-white p-2">
                                        <BsTrash size={20} color={"#fff"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        </div>
    );
}

export default EventsListing;