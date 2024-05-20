import TenderCard from '@/app/_components/Tender/TenderCard';
import { fetchAllTenders } from '@/app/action';
import Image from 'next/image';
import Link from 'next/link';
import { getTenders, getTendersCount } from '@/lib/repositories/TenderRepository';
import Pagination from '@/app/_components/Pagination';

type tender = {
    _id: string;
    title: string;
    description: string;
    company: {
        logo: { url: string; key: string }[];
    }[];
}[];

type PageProps = {
    // params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
};

const TendersPage = async ({ searchParams }: PageProps) => {
    const currentPage = parseInt(`${searchParams?.pages ?? 1}`);

    const tenders = await getTenders({
        currentPage,
    });

    const tendersCount = await getTendersCount();

    return (
        <div className="bg-gray-50 py-6">
            {tenders.length ? (
                <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        <div className="w-full max-w-full flex-shrink overflow-hidden">
                            <div className="w-full py-3">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    <span className="border-l-3 mr-2 inline-block h-5 border-2 border-red-600"></span>
                                    Tenders
                                </h2>
                            </div>

                            <div className="relative flex min-h-screen flex-col justify-center  space-y-6 overflow-hidden sm:py-12">
                                <div className="hover-img relative max-h-[395px] overflow-hidden">
                                    <Image
                                        className="mx-auto h-auto w-full max-w-full object-contain"
                                        width={1265}
                                        height={394}
                                        src="/src/img/tenders.jpg"
                                        alt="Image description"
                                    />
                                </div>
                                {tenders.length ? (
                                    <div className="mx-auto w-full max-w-screen-xl px-4">
                                        <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4">
                                            {tenders.map((tender) => (
                                                <TenderCard tender={tender} key={tender.id} />
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <h1 className="bg-red-700 text-lg font-bold text-white">No tenders found.</h1>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h1>Loading Tenders ...</h1>
            )}
            <Pagination
                count={tendersCount}
                current={currentPage}
                distribution={12}
                path={`/tenders`}
                className="my-6 text-center"
            />
        </div>
    );
};

export default TendersPage;
