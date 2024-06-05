import { deleteAds, fetchAds } from '@/app/action';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import Link from 'next/link';
import { BsTrash } from 'react-icons/bs';
import DashboardPageHeading from '../admin/_components/DashboardPageHeading';
import ButtonLink from '../admin/_components/Button/ButtonLink';
import Advert from '@/models/Advert';
import { deleteImageFiles } from '@/lib/helpers';
import Pagination from '@/app/_components/Pagination';

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

    async function handleDelete(id: string) {
        'use server';

        const result = await Advert.findById(id);

        if (!result) {
            return;
        }

        await Advert.findOneAndDelete({ _id: id });

        await deleteImageFiles(result.images);

        revalidatePath('/admin/ads');
    }

    return (
        <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                <div className="w-full max-w-full flex-shrink overflow-hidden">
                    <DashboardPageHeading title=" All Ads" className="my-6 inline-flex items-center justify-between">
                        <ButtonLink href="/admin/ads/new">Create</ButtonLink>
                    </DashboardPageHeading>

                    <div className="-mx-3 flex flex-row flex-wrap">
                        {ads.length > 0 ? (
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
                                            <button
                                                formAction={async () => {
                                                    'use server';
                                                    await handleDelete(advert._id);
                                                }}
                                                type="submit"
                                                className="cursor-pointer rounded-lg border-[1px] border-white p-2"
                                            >
                                                <BsTrash size={20} color={'#fff'} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h1 className="w-full text-center text-2xl font-bold">No Ads Found</h1>
                        )}
                    </div>
                </div>

                <div className="my-4">
                    <Pagination count={totalPages} current={currentPage} path="/admin/ads" />
                </div>
            </div>
        </div>
    );
};

export default AdsListingComponent;
