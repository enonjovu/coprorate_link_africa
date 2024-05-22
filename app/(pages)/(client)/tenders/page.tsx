import TenderCard from '@/app/_components/Tender/TenderCard';
import { fetchAllTenders } from '@/app/action';
import Image from 'next/image';
import Link from 'next/link';
import { getTenders, getTendersCount } from '@/lib/repositories/TenderRepository';
import Pagination from '@/app/_components/Pagination';
import { trimText } from '@/lib/helpers';
import { BsEye } from 'react-icons/bs';
import { EyeIcon } from '@heroicons/react/24/outline';

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
    const currentPage = parseInt(`${searchParams?.page ?? 1}`);

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
                                    <div className="mx-auto w-full max-w-screen-xl">
                                        <div className="relative overflow-x-auto">
                                            <table className="w-full text-left text-sm text-gray-500 ">
                                                <thead className="bg-red-600 text-xs uppercase text-gray-100 ">
                                                    <tr className="divide-x divide-gray-100">
                                                        <th scope="col" className="w-96 px-6 py-3">
                                                            Title
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Description
                                                        </th>

                                                        <th scope="col" className="w-12 px-6 py-3">
                                                            View
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {tenders.map((tender) => (
                                                        <tr
                                                            className="divide-x divide-gray-200 border-b bg-white"
                                                            key={tender.id}
                                                        >
                                                            <th
                                                                scope="row"
                                                                className="px-6 py-4 font-medium text-gray-900 "
                                                            >
                                                                <Link href={`/tenders/${tender._id}`}>
                                                                    {tender.title}
                                                                </Link>
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                {trimText(tender.description, 0, 20)}...
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <Link
                                                                    className="grid size-12 place-items-center rounded-md bg-red-600 p-2 text-white"
                                                                    href={`/tenders/${tender._id}`}
                                                                >
                                                                    <EyeIcon className="size-8" />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
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
