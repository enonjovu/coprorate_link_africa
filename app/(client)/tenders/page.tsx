import { fetchAllTenders } from "@/app/action";
import Image from "next/image";

const TendersPage = async () => {
    const tenders = await fetchAllTenders();

    return (
        <div className="bg-gray-50 py-6">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    <div className="flex-shrink max-w-full w-full overflow-hidden">
                        <div className="w-full py-3">
                            <h2 className="text-gray-800 text-2xl font-bold">
                                <span className="inline-block h-5 border-l-3 border-red-600 border-2 mr-2"></span>
                                Tenders
                            </h2>
                        </div>
                        <div className="flex flex-row flex-wrap -mx-3">
                            <div className="flex-shrink max-w-full w-full px-3 pb-5">
                                <div className="relative hover-img max-h-[395px] overflow-hidden">
                                    {/*thumbnail*/}
                                    <a href="/events/1">
                                        <Image className="max-w-full w-full mx-auto h-auto object-contain"
                                            width={1265} height={394} src="/src/img/tenders.jpg" alt="Image description" />
                                    </a>
                                </div>
                            </div>

                            {
                                tenders?.map(tender => (
                                    <div key={tender._id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                        <div className="flex flex-row sm:block hover-img">
                                            <a href={`/tenders/${tender._id}`}>
                                                <img className="max-w-full w-full mx-auto" src={tender.company[0].logo[0].url} alt="alt title" />
                                            </a>
                                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                                <h3 className="text-lg text-black font-bold leading-tight text-center mb-2">
                                                    <a href={`/tenders/${tender._id}`}>{tender.title}</a>
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

export default TendersPage;