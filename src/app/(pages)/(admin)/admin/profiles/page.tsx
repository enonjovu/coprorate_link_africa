import Pagination from '@/app/_components/Pagination';
import IndividiualProfileRepository from '@/app/_db/repositories/IndividiualProfileRepository';
import { PageParameters } from '@/lib/types';
import ButtonLink from '../_components/Button/ButtonLink';
import DashboardPageHeading from '../_components/DashboardPageHeading';
import ProfileCard from './_components/ProfileCard';

export default async function ProfilesPage({ searchParams }: PageParameters) {
    let page = parseInt((searchParams?.page as string) ?? '1');

    const { count: directoryCount, data: profiles } = await IndividiualProfileRepository.getPaginated({ page });

    return (
        <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                <div className="w-full max-w-full flex-shrink overflow-hidden">
                    <DashboardPageHeading title="Leaders" className=" mb-6 inline-flex items-center justify-between">
                        <ButtonLink href="/admin/profiles/create">Create</ButtonLink>
                    </DashboardPageHeading>
                    <div className="-mx-3 flex flex-row flex-wrap">
                        {profiles.length > 0 ? (
                            profiles.map((profile) => <ProfileCard key={profile.id} profile={profile} />)
                        ) : (
                            <h1 className="w-full text-center text-2xl font-bold">No Individual Profiles Found</h1>
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
