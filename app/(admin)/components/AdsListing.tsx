import { deleteAds, fetchAds, getItemsCount } from "@/app/action";
import Image from "next/image";
import Link from "next/link"
import { BsPencil, BsTrash } from "react-icons/bs";


const AdsListingComponent = async ({ page }: { page: string }) => {
    const result = await fetchAds(page);
    const ads = result.ads;
    const itemsCount = result.itemsCount;
    const totalPages = Math.ceil(itemsCount / 12);
    const pageNumber = parseInt(page);

    const pageNumbers = [];
    const offsetNumer = 3;

    for (let index = pageNumber - offsetNumer; index <= pageNumber + offsetNumer; index++) {
        if (index >= 1 && index <= totalPages) {
            pageNumbers.push(index);
        }

    }

    const currentPage = parseInt(page);
    const prevPage = currentPage - 1 > 0 ? currentPage - 1 : 1;
    const nextPage = currentPage + 1;

    const deleteAd = async (id: string) => {
        await deleteAds(id)
    }

    return (
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                <div className="flex-shrink max-w-full w-full overflow-hidden">
                    <div className="w-full py-3">
                        <h2 className="text-gray-800 dark:text-white text-2xl font-bold">
                            <span className="inline-block h-5 border-l-3 border-red-600 border-2 mr-2"></span>
                            All Ads
                        </h2>
                    </div>
                    <div className="flex flex-row flex-wrap -mx-3">
                        {
                            ads.length > 0 ?
                                ads.map(advert => (
                                    <div key={advert._id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                        <div className="flex flex-row sm:block hover-img">
                                            <Image width={900} height={800} className="max-w-full w-full h-40 min-h-40 max-h-40 overflow-hidden object-cover mx-auto" src={advert.images[0].url} alt="alt title" />
                                            <div className="w-full h-16 bg-red-700 roundeg-lg flex items-center justify-center">
                                                <div className="cursor-pointer rounded-lg border-[1px] border-white p-2">
                                                    <BsTrash size={20} color={"#fff"} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) :
                                <h1>No Ads Found</h1>
                        }
                    </div>
                </div>
                <div className="text-center mt-4">
                    <nav aria-label="Page navigation">
                        <ul className="flex justify-center items-center space-x-0">
                            <li>
                                {
                                    currentPage === 1 ? (null)
                                        : <Link className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5 rounded-r" href={`/admin/news/?page=${prevPage}`} aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                        </Link>
                                }
                            </li>

                            {
                                pageNumbers.map((pageNo, index) => (
                                    <li key={index}>
                                        <Link className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5" href={`/admin/news/?page=${pageNo}`}>
                                            {pageNo}
                                        </Link>
                                    </li>
                                ))
                            }

                            <li>
                                {
                                    currentPage === totalPages ? (null)
                                        : <Link className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5 rounded-r" href={`/admin/news/?page=${nextPage}`} aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                        </Link>
                                }
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    );
}

export default AdsListingComponent;