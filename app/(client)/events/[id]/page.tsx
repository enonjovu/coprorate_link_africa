import { fetchEventById } from "@/app/action";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import Image from "next/image";
import { BsCalendar, BsClock, BsHouse, BsTicket } from "react-icons/bs";

type paramProps = {
  params: Params
}

const EventSingle = async ({ params }: paramProps) => {
  const id = params.id;
  const res = await fetchEventById(id);
  const event = res[0];

  return (
    <main id="content">
      <>
        <Head>
          <title>Events</title>
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://www.clafrica.online/event/${id}`} />
          <meta property="og:title" content={event.title} />
          <meta property="og:description" content={event.description} />
          <meta property="og:image" content={event.images[0].url} />
        </Head>
        <div className="py-10 bg-white">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 space-y-10">
            <div className="flex flex-col md:flex-row flex-wrap max-w-full w-full">
              <div className="w-full h-full flex flex-col items-center rounded-2xl p-4 shadow-lg space-y-6">
                <div className="w-[25rem] h-[25rem]">
                  <Image src={event.images[0].url} className="w-full h-full object-cover" width={640} height={424} alt="Company Logo" />
                </div>
                <h1 className="text-3xl font-bold text-black">{event.title}</h1>

                <div className="flex flex-col md:flex-row items-center justify-center w-full h-full space-y-6 md:space-y-0 md:space-x-16">
                  <p className="flex space-x-4 justify-start md:justify-center w-2/3 md:w-1/3">
                    <BsClock size={20} color={"#000000"} />
                    <span className="font-bold text-black">{event.time}</span>
                  </p>

                  <p className="flex space-x-4 justify-start md:justify-center w-2/3 md:w-1/3">
                    <BsHouse size={20} color={"#000000"} />
                    <span className="font-bold text-black">{event.venue}</span>
                  </p>

                  <p className="flex space-x-4 justify-start md:justify-center w-2/3 md:w-1/3">
                    <BsCalendar size={20} color={"#000000"} />
                    <span className="font-bold text-black">{event.eventDate}</span>
                  </p>
                </div>
                <p className="w-11/12 mb-5 text-black whitespace-pre-wrap ">
                  {event.description}
                </p>

                <button className="bg-red-700 text-white font-bold text-center w-11/12 md:w-1/3 h-16 rounded-lg">Get Tickets</button>

              </div>
            </div>
          </div>
        </div>
      </>
    </main>
  );
}

export default EventSingle;