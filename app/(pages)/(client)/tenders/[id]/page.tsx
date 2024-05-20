import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import CompanyCard from '../../components/CompanyCard';
import { getTenderById } from '@/lib/repositories/TenderRepository';
import { notFound } from 'next/navigation';

type paramProps = {
    params: Params;
};

type PageProps = {
    params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
};

const SingleTender = async ({ params }: PageProps) => {
    const id: string = params.id;
    const tender = await getTenderById(id);

    if (!tender) {
        notFound();
    }

    console.log(tender);

    return (
        <main id="content">
            <div className="bg-white py-10">
                <div className="mx-auto space-y-10 px-3 xl:container sm:px-4 xl:px-2">
                    {/* <CompanyCard company={company} /> */}

                    <div className="flex h-full w-full max-w-full flex-col">
                        <div className="flex w-full flex-col items-center space-y-6 rounded-2xl p-4 shadow-lg md:w-11/12">
                            <h3 className="whitespace-pre-wrap text-xl font-bold text-black">{tender.title}</h3>
                            {/* About The Role */}
                            <div className="w-full flex-col space-y-4">
                                <p className="w-full whitespace-pre-wrap text-black md:w-10/12">{tender.description}</p>
                            </div>

                            {tender.requirements?.length ? (
                                <div className="w-full flex-col space-y-4">
                                    <p className="text-lg font-bold text-black"> requirements</p>
                                    <ul className="pl-4">
                                        {tender.requirements?.map((requirement, index) => (
                                            <li key={index} className="list-item list-disc text-black">
                                                {requirement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SingleTender;