import { deleteTopAds, fetchTopAds } from "@/app/action";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link"
import { BsTrash } from "react-icons/bs";


const TopAdsListingComponent = async ({ page }: { page: string }) => {
    const result = await fetchTopAds(page);
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

    async function handleDelete(data: FormData) {
        "use server";

        const itemId = data.get("itemId") as string;

        if (itemId != null) {
            try {
                const res = await deleteTopAds(itemId);
                if (res) {
                    revalidatePath("/admin/ads")
                } else {
                    console.log("Failed to delete the advert!")
                }
            } catch (error) {
                console.log(error)
            }
        }
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
                            ads?.length ?
                                (
                                    ads.map(advert => (
                                        <div key={advert._id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                            <div className="flex flex-row sm:block hover-img">
                                                <Image width={900} height={800} className="max-w-full w-full h-40 min-h-40 max-h-40 overflow-hidden object-cover mx-auto" src={advert.images[0].url} alt="alt title" />
                                                <div className="w-full h-16 bg-red-700 roundeg-lg flex items-center justify-center">
                                                    <form action={handleDelete}>
                                                        <input name="itemId" className="hidden" value={advert._id} />
                                                        <button type="submit" className="cursor-pointer rounded-lg border-[1px] border-white p-2">
                                                            <BsTrash size={20} color={"#fff"} />
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) :
                                <h1 className="text-2xl font-bold text-center w-full">No Ads Found</h1>
                        }
                    </div>
                </div>
                {
                    totalPages > 1 ?
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
                        : null
                }
            </div>
        </div>

    );
}

export default TopAdsListingComponent;