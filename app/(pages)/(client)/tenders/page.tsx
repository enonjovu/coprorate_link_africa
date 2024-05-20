import { fetchAllTenders } from '@/app/action';
import Image from 'next/image';
import Link from 'next/link';

type tender = {
    _id: string;
    title: string;
    description: string;
    company: {
        logo: { url: string; key: string }[];
    }[];
}[];

const TendersPage = async () => {
    const res = await fetchAllTenders();
    const tenders = res as tender;
    console.log('Tenders => ', tenders);

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
                                                <div
                                                    key={tender._id}
                                                    className="relative flex max-w-sm flex-col overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                                >
                                                    <Link
                                                        href={`tenders/${tender._id}`}
                                                        className="absolute left-0 top-0 z-20 h-full w-full "
                                                    >
                                                        &nbsp;
                                                    </Link>
                                                    <div className="h-auto overflow-hidden">
                                                        <div className="relative h-44 overflow-hidden">
                                                            <img
                                                                src="/src/img/logo.png"
                                                                className="h-full w-full object-cover"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="bg-white px-3 py-4">
                                                        <h3 className="mb-2 text-center font-bold text-black">
                                                            {tender.title}
                                                        </h3>
                                                    </div>
                                                </div>
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
        </div>
    );
};

export default TendersPage;
