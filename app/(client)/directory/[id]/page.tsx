import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import CompanyCard from '../../components/CompanyCard';
import dynamic from 'next/dynamic';
import { fetchCompanyById } from '@/app/action';

const DynamicMap = dynamic(() => import('../../components/MapComponent'), {
    ssr: false,
});

type paramProps = {
    params: Params;
};

const SingleDirectory = async ({ params }: paramProps) => {
    const id: string = params.id;
    const result = await fetchCompanyById(id);
    const company = result[0];

    return (
        <main id="content">
            <div className="bg-white py-10">
                <div className="mx-auto space-y-10 px-3 xl:container sm:px-4 xl:px-2">
                    <CompanyCard company={company} />

                    <div className="flex h-full w-full max-w-full flex-col">
                        <h2 className="text-3xl font-bold text-black">Map Section</h2>

                        <div className="h-[80vh] w-full">
                            <DynamicMap center={[company.lat, company.lon]} zoom={15} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SingleDirectory;
