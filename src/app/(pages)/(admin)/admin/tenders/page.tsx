import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import TenderListingComponent from '../../components/TenderListing';
import { PageParameters } from '@/lib/types';
import { deleteTender, fetchTenders } from '@/app/action';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import Link from 'next/link';
import { BsPencil, BsTrash } from 'react-icons/bs';
import TenderRepository from '@/app/_db/repositories/TenderRepository';
import Pagination from '@/app/_components/Pagination';
import TenderCard from './_components/TenderCard';
import DashboardPageHeading from '../_components/DashboardPageHeading';
import ButtonLink from '../_components/Button/ButtonLink';
import { trimText } from '@/lib/helpers';
import { EyeIcon, PencilIcon } from '@heroicons/react/24/outline';
import DeleteTenderButton from './_components/DeleteTenderButton';

export default async function TendersPage({ searchParams }: PageParameters) {
    let page = parseInt((searchParams?.page ?? '1') as string) ?? '1';

    const { count, data: tenders } = await TenderRepository.getPaginated({ page });

    return (
        <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                <div className="w-full max-w-full flex-shrink overflow-hidden">
                    <DashboardPageHeading title="All Tenders" className="mb-4 inline-flex items-center justify-between">
                        <ButtonLink href="/admin/tenders/new">Create</ButtonLink>
                    </DashboardPageHeading>
                    <div className="-mx-3 flex flex-row flex-wrap">
                        {tenders.length > 0 ? (
                            <div className="mx-auto w-full max-w-screen-xl">
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-left text-sm text-gray-500 ">
                                        <thead className="bg-red-600 text-xs uppercase text-gray-100 ">
                                            <tr className="divide-x divide-gray-100">
                                                <th scope="col" className=" px-6 py-3">
                                                    Title
                                                </th>
                                                <th scope="col" className="w-16 px-6 py-3">
                                                    actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tenders.map((tender) => (
                                                <tr
                                                    className="divide-x divide-gray-200 border-b bg-white dark:bg-gray-900 dark:text-white"
                                                    key={tender.id}
                                                >
                                                    <th
                                                        scope="row"
                                                        className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                                                    >
                                                        <a href={`/admin/tenders/edit/${tender._id}`}>{tender.title}</a>
                                                    </th>

                                                    <td className="inline-flex items-center space-x-4 px-6 py-4">
                                                        <a
                                                            className="block rounded-md bg-red-600 p-2 text-white"
                                                            href={`/admin/tenders/edit/${tender._id}`}
                                                        >
                                                            <PencilIcon className="size-6" />
                                                        </a>
                                                        <DeleteTenderButton id={tender.id} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) : (
                            <h1 className="w-full text-center text-2xl font-bold">No tenders Found</h1>
                        )}
                    </div>
                </div>
                <Pagination current={page} count={count} path="/admin/tenders" />
            </div>
        </div>
    );
}
