import Pagination from '@/app/_components/Pagination';
import UserRepository from '@/app/_db/repositories/UserRepository';
import { PageParameters } from '@/lib/types';
import ButtonLink from '../_components/Button/ButtonLink';
import DashboardPageHeading from '../_components/DashboardPageHeading';
import DeleteUserButton from './DeleteUserButton';

export default async function AdministrationsPage(props: PageParameters) {
    const page = parseInt((props.searchParams?.page as string) ?? '1');

    const { count, data } = await UserRepository.getPaginated({ page });
    return (
        <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                <div className="w-full max-w-full flex-shrink overflow-hidden">
                    <DashboardPageHeading title="All Users" className=" mb-6 inline-flex items-center justify-between">
                        <ButtonLink href="/admin/administration/create">Create</ButtonLink>
                    </DashboardPageHeading>
                    <div className="-mx-3 flex flex-row flex-wrap">
                        {data.length > 0 ? (
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
                                                            className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
                                                        >
                                                            Email
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
                                                        >
                                                            Role
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
                                                    {data.map((user) => (
                                                        <tr key={`id-${user.id}`}>
                                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                                {user.role}
                                                            </td>
                                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                                                                {user.email}
                                                            </td>
                                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                                                                {user.role}
                                                            </td>
                                                            <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                                                                <DeleteUserButton id={user.id} />
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <h1 className="w-full text-center text-2xl font-bold">No Users Found</h1>
                        )}
                    </div>
                </div>

                <div className="my-6 w-full">
                    <Pagination count={count} current={page} path={'/admin/administration'} />
                </div>
            </div>
        </div>
    );
}
