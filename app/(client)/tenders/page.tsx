import { fetchAllTenders } from "@/app/action";
import Image from "next/image";
import Link from "next/link";

type tender = {
    _id: string;
    title: string;
    description: string;
    company: {
        logo: { url: string; key: string }[];
    }[];
}[]

const TendersPage = async () => {
    const res = await fetchAllTenders();
    const tenders = res as tender;
    console.log("Tenders => ", tenders)

    return (
        <div className="bg-gray-50 py-6">
            {tenders.length ?
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        <div className="flex-shrink max-w-full w-full overflow-hidden">
                            <div className="w-full py-3">
                                <h2 className="text-gray-800 text-2xl font-bold">
                                    <span className="inline-block h-5 border-l-3 border-red-600 border-2 mr-2"></span>
                                    Tenders
                                </h2>
                            </div>

                            <div className="relative flex flex-col space-y-6 min-h-screen  justify-center overflow-hidden sm:py-12">
                                <div className="relative hover-img max-h-[395px] overflow-hidden">
                                    <Image className="max-w-full w-full mx-auto h-auto object-contain" width={1265} height={394} src="/src/img/tenders.jpg" alt="Image description" />
                                </div>
                                {
                                    tenders.length ?
                                        <div className="mx-auto max-w-screen-xl px-4 w-full">
                                            <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
                                                {
                                                    tenders.map(tender => (
                                                        <div className="relative flex flex-col shadow-lg rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                                                            <Link href={`tenders/${tender._id}`} className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</Link>
                                                            <div className="h-auto overflow-hidden">
                                                                <div className="h-44 overflow-hidden relative">
                                                                    <img src="/src/img/logo.png" className="w-full h-full object-cover" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="bg-white py-4 px-3">
                                                                <h3 className="font-bold mb-2 text-center text-black">{tender.title}</h3>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        : <h1 className="bg-red-700 text-white font-bold text-lg">No tenders found.</h1>
                                }
                            </div>
                        </div>
                    </div>
                </div> : <h1>Loading Tenders ...</h1>
            }
        </div>
    );
}

export default TendersPage;