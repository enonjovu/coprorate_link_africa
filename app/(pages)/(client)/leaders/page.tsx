import LeaderCard from '@/app/_components/Leader/LeaderCard';
import Pagination from '@/app/_components/Pagination';
import { getLeaders, getLeadersCount } from '@/lib/repositories/LeaderRepository';

type PageProps = {
    // params: { category: string };
    searchParams?: { [key: string]: string | string[] | undefined };
};

const AllLaeders = async (params: PageProps) => {
    const currentPage = parseInt(`${params.searchParams?.page ?? 1}`);

    const leaders = await getLeaders({
        currentPage,
    });

    const leadersCount = await getLeadersCount();

    return (
        <div className="relative flex min-h-screen flex-col  overflow-hidden bg-white py-6">
            <div className="mx-auto w-full max-w-screen-xl px-4">
                <h2 className="mb-4 text-xl font-bold text-gray-600">Business Profiles.</h2>
                <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {leaders.length > 0 ? (
                        leaders.map((leader) => <LeaderCard key={leader.id} leader={leader} />)
                    ) : (
                        <div className="w-full">Not Content Found</div>
                    )}
                </div>

                <Pagination
                    count={leadersCount}
                    current={currentPage}
                    distribution={12}
                    path={`/leaders`}
                    className="mt-4 text-center"
                />
            </div>
        </div>
    );
};

export default AllLaeders;
