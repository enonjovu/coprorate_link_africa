import { PageParameters } from '@/lib/types';
import BlogRepository from '@/app/_db/repositories/BlogRepository';
import Pagination from '@/app/_components/Pagination';

import BlogCard from './_components/BlogCard';
import ButtonLink from '../_components/Button/ButtonLink';
import DashboardPageHeading from '../_components/DashboardPageHeading';

export default async function AllNews({ searchParams }: PageParameters) {
    let page = parseInt((searchParams?.page as string) ?? '1');

    const { count, data: blogs } = await BlogRepository.getPaginated({ page });

    return (
        <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                <div className="w-full max-w-full flex-shrink overflow-hidden">
                    <DashboardPageHeading title="All Articles" className=" inline-flex items-center justify-between">
                        <ButtonLink href="/admin/news/new">Create</ButtonLink>
                    </DashboardPageHeading>

                    <div className="-mx-3 flex flex-row flex-wrap">
                        {blogs && blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
                    </div>
                </div>
                <div className="mb-6 mt-4 w-full text-center">
                    <Pagination count={count} current={page} path="/admin/news" />
                </div>
            </div>
        </div>
    );
}
