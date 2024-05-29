import LeaderCard from '@/app/_components/Leader/LeaderCard';
import Pagination from '@/app/_components/Pagination';
import IndividiualProfileRepository from '@/app/_db/repositories/IndividiualProfileRepository';
import { trimText } from '@/lib/helpers';
import { getLeaders, getLeadersCount } from '@/lib/repositories/LeaderRepository';
import { BsEye } from 'react-icons/bs';

type PageProps = {
    // params: { category: string };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export const metadata = {
    title: 'Corporate Link Africa - Leaders',
    description: 'Simplified Business Narratives',
};

const AllLaeders = async (params: PageProps) => {
    const currentPage = parseInt(`${params.searchParams?.page ?? 1}`);

    const { count, data: profiles } = await IndividiualProfileRepository.getPaginated({ page: currentPage });

    // const leaders = await getLeaders({
    //     currentPage,
    // });

    // const leadersCount = await getLeadersCount();

    return (
        <div className="relative flex min-h-screen flex-col  overflow-hidden bg-white py-6">
            <div className="mx-auto w-full max-w-screen-xl px-4">
                <h2 className="mb-4 text-xl font-bold text-gray-600">Business Profiles.</h2>
                {/* <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {leaders.length > 0 ? (
                        leaders.map((leader) => <LeaderCard key={leader.id} leader={leader} />)
                    ) : (
                        <div className="w-full">Not Content Found</div>
                    )}
                </div> */}

                <div className="relative flex min-h-screen flex-col  overflow-hidden bg-white py-6">
                    <div className="mx-auto w-full max-w-screen-xl px-4">
                        <h2 className="mb-4 text-xl font-bold text-gray-600">Business Profiles.</h2>
                        <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            {profiles.length > 0 ? (
                                profiles.map((profile) => (
                                    <div className="relative flex max-w-sm flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                        <a
                                            href={`/leaders/${profile.id}`}
                                            className="absolute left-0 top-0 z-20 h-full w-full "
                                        >
                                            &nbsp;
                                        </a>
                                        <div className="h-auto overflow-hidden">
                                            <div className="relative h-44 overflow-hidden">
                                                <img src={profile.profile_image[0].url} alt="" />
                                            </div>
                                        </div>
                                        <div className="bg-white px-3 py-4">
                                            <h3 className="mb-2 text-lg font-bold text-black">{profile.name}</h3>
                                            <div className="flex items-center justify-between">
                                                <p className="text-md text-gray-400">{trimText(profile.biography)}</p>
                                                <div className="relative z-40 flex items-center gap-2">
                                                    <a
                                                        className="flex flex-col items-center justify-center text-red-600 hover:text-red-700"
                                                        href={`/leaders/${profile.id}`}
                                                    >
                                                        <BsEye size={20} color="red" />
                                                        <span>view</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="w-full">Not Content Found</div>
                            )}
                        </div>
                    </div>
                </div>

                <Pagination count={count} current={currentPage} path={`/leaders`} className="mt-4 text-center" />
            </div>
        </div>
    );
};

export default AllLaeders;
