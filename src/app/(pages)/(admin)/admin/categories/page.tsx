import DirectoryCategoryRepository from '@/app/_db/repositories/DirectoryCategoryRepository';
import DashboardPageHeading from '../_components/DashboardPageHeading';
import CreateCategoryDiaolog from './CreateCategoryDiaolog';
import { PageParameters } from '@/lib/types';
import Pagination from '@/app/_components/Pagination';
import DeleteCategoryButton from './DeleteCategoryButton';

export default async function CategoriesPage(props: PageParameters) {
    const page = parseInt((props.searchParams?.page as string) ?? '1');

    const { count, data } = await DirectoryCategoryRepository.getPaginated({ page });

    return (
        <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                <div className="w-full max-w-full flex-shrink overflow-hidden">
                    <DashboardPageHeading title="Categories" className=" inline-flex items-center justify-between">
                        <CreateCategoryDiaolog />
                    </DashboardPageHeading>
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="inline-block min-w-full p-1.5 align-middle">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
                                                >
                                                    Name
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-end text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            {data.map((category) => (
                                                <tr key={`id-${category.id}`}>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        {category.name}
                                                    </td>

                                                    <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                                                        <DeleteCategoryButton id={category.id} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-6">
                        <Pagination count={count} path="/admin/categories" current={page} />
                    </div>
                </div>
            </div>
        </div>
    );
}
