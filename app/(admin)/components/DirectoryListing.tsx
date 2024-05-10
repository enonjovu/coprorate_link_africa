import { deleteCompany, fetchAllCompanies } from '@/app/action';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import Link from 'next/link';
import { BsPencil, BsTrash } from 'react-icons/bs';

const DirectoryListingComponent = async ({ page }: { page: string }) => {
    const result = await fetchAllCompanies(page);
    const { companies, itemsCount } = result;
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
                const res = await deleteCompany(itemId);
                if (res) {
                    revalidatePath('/admin/companies');
                } else {
                    console.log('Failed to delete the company!');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    // console.log("companies => ", companies)

    return (
        <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                <div className="w-full max-w-full flex-shrink overflow-hidden">
                    <div className="w-full py-3">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                            <span className="border-l-3 mr-2 inline-block h-5 border-2 border-red-600"></span>
                            All Companies
                        </h2>
                    </div>
                    <div className="-mx-3 flex flex-row flex-wrap">
                        {companies.length > 0 ? (
                            companies.map((company) => (
                                <div
                                    key={company._id}
                                    className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0"
                                >
                                    <div className="hover-img flex flex-row sm:block">
                                        <Image
                                            width={900}
                                            height={800}
                                            className="min-h-40 mx-auto h-40 max-h-40 w-full max-w-full overflow-hidden object-cover"
                                            src={company.logo[0].url}
                                            alt="alt title"
                                        />
                                        <h1 className="text-center text-lg">{company.name}</h1>
                                        <div className="roundeg-lg flex h-16 w-full items-center justify-center space-x-4 bg-red-700">
                                            <button
                                                type="submit"
                                                className="cursor-pointer rounded-lg border-[1px] border-white p-2"
                                            >
                                                <BsPencil size={20} color={'#fff'} />
                                            </button>
                                            <form action={handleDelete}>
                                                <input name="itemId" className="hidden" value={company._id} />
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
                            <h1 className="w-full text-center text-2xl font-bold">No companies Found</h1>
                        )}
                    </div>
                </div>
                {totalPages > 1 ? (
                    <div className="mt-4 text-center">
                        <nav aria-label="Page navigation">
                            <ul className="flex items-center justify-center space-x-0">
                                <li>
                                    {currentPage === 1 ? null : (
                                        <Link
                                            className="relative -mr-0.5 block rounded-r border border-gray-200 bg-white px-4 py-3 hover:bg-gray-700 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                            href={`/admin/directories/?page=${prevPage}`}
                                            aria-label="Previous"
                                        >
                                            <span aria-hidden="true">«</span>
                                        </Link>
                                    )}
                                </li>

                                {pageNumbers.map((pageNo, index) => (
                                    <li key={index}>
                                        <Link
                                            className="relative -mr-0.5 block border border-gray-200 bg-white px-4 py-3 hover:bg-gray-700 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                            href={`/admin/directories/?page=${pageNo}`}
                                        >
                                            {pageNo}
                                        </Link>
                                    </li>
                                ))}

                                <li>
                                    {currentPage === totalPages ? null : (
                                        <Link
                                            className="relative -mr-0.5 block rounded-r border border-gray-200 bg-white px-4 py-3 hover:bg-gray-700 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                            href={`/admin/directories/?page=${nextPage}`}
                                            aria-label="Next"
                                        >
                                            <span aria-hidden="true">»</span>
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </nav>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default DirectoryListingComponent;
