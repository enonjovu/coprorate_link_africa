import { fetchAllTenders } from "@/app/action";
import Image from "next/image";
import {BsPencilFill, BsTrashFill } from "react-icons/bs";

const AllTenders = async () => {
    const tenders = await fetchAllTenders();
    return ( 
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                <div className="flex-shrink max-w-full w-full overflow-hidden">
                    <div className="w-full py-3">
                        <h2 className="text-gray-800 dark:text-white text-2xl font-bold">
                            <span className="inline-block h-5 border-l-3 border-red-600 border-2 mr-2"></span>
                            All Tenders
                        </h2>
                    </div>
                    <div className="flex flex-row flex-wrap -mx-3">
                        {
                            tenders.map(tender=>(
                                <div key={tender._id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                    <div className="flex flex-row sm:block hover-img relative">
                                        <div className="flex w-full h-full absolute justify-center items-center space-x-8">
                                            {/* Edit */}
                                            <a href={`/admin/tenders/edit/${tender._id}`}><BsPencilFill size={30} color={"#fff"}/></a>

                                            {/* Delete */}
                                            <a href={`/admin/tenders/delete/${tender._id}`}><BsTrashFill size={30} color={"#fff"}/></a>
                                        </div>
                                        <Image width={800} height={800}  className="max-w-full w-full mx-auto" src="/src/img/dummy/img13.jpg" alt="alt title"/>
                                        <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                            <h3 className="text-lg text-black dark:text-white font-bold leading-tight mb-2">
                                                <a href="/events/1">{tender.title}</a>
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
     );
}
 
export default AllTenders;