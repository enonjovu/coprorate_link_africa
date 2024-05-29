import type { PageParameters } from '@/lib/types';
import Pagination from '@/app/_components/Pagination';
import DirectoryRepository from '@/app/_db/repositories/DirectoryRepository';

import DirectoryCard from './_component/DirectoryCard';
import DashboardPageHeading from '../_components/DashboardPageHeading';
import ButtonLink from '../_components/Button/ButtonLink';

async function AllDirectories({ searchParams }: PageParameters) {
    let page = parseInt((searchParams?.page as string) ?? '1');

    const { count: directoryCount, data: directories } = await DirectoryRepository.getPaginated({ page });

    return (
        <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                <div className="w-full max-w-full flex-shrink overflow-hidden">
                    <DashboardPageHeading title="All Companies" className=" inline-flex items-center justify-between">
                        <ButtonLink href="/admin/directories/new">Create</ButtonLink>
                    </DashboardPageHeading>
                    <div className="-mx-3 flex flex-row flex-wrap">
                        {directories.length > 0 ? (
                            directories.map((company) => <DirectoryCard key={company.id} company={company} />)
                        ) : (
                            <h1 className="w-full text-center text-2xl font-bold">No companies Found</h1>
                        )}
                    </div>
                </div>

                <div className="my-6 w-full">
                    <Pagination count={directoryCount} current={page} path={'/admin/companies'} />
                </div>
            </div>
        </div>
    );
}

export default AllDirectories;
