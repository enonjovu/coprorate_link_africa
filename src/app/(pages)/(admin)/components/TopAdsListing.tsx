import Pagination from '@/app/(pages)/(client)/components/Pagination';
import { deleteTopAds, fetchTopAds } from '@/app/action';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import { BsTrash } from 'react-icons/bs';

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
        'use server';

        const itemId = data.get('itemId') as string;

        if (itemId != null) {
            try {
                const res = await deleteTopAds(itemId);
                if (res) {
                    revalidatePath('/admin/ads');
                } else {
                    console.log('Failed to delete the advert!');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                <div className="w-full max-w-full flex-shrink overflow-hidden">
                    <div className="w-full py-3">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                            <span className="border-l-3 mr-2 inline-block h-5 border-2 border-red-600"></span>
                            All Ads
                        </h2>
                    </div>
                    <div className="-mx-3 flex flex-row flex-wrap">
                        {ads?.length ? (
                            ads.map((advert) => (
                                <div
                                    key={advert._id}
                                    className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0"
                                >
                                    <div className="hover-img flex flex-row sm:block">
                                        <Image
                                            width={900}
                                            height={800}
                                            className="mx-auto h-40 max-h-40 min-h-40 w-full max-w-full overflow-hidden object-cover"
                                            src={advert.images[0].url}
                                            alt="alt title"
                                        />
                                        <div className="roundeg-lg flex h-16 w-full items-center justify-center bg-red-700">
                                            <form action={handleDelete}>
                                                <input name="itemId" className="hidden" value={advert._id} />
                                                <button
                                                    type="submit"
                                                    className="cursor-pointer rounded-lg border-[1px] border-white p-2"
                                                >
                                                    <BsTrash size={20} color={'#fff'} />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h1 className="w-full text-center text-2xl font-bold">No Ads Found</h1>
                        )}
                    </div>
                </div>
                <Pagination itemCount={itemsCount} path="/admin/news" currentPage={pageNumber} />
            </div>
        </div>
    );
};

export default TopAdsListingComponent;
