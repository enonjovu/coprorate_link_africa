import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import CompanyCard from "../../components/CompanyCard";
import dynamic from 'next/dynamic';
import { fetchCompanyById } from "@/app/action";

const DynamicMap = dynamic(() => import('../../components/MapComponent'), {
  ssr: false,
});

type paramProps = {
    params:Params
}


const SingleDirectory = async ({params}:paramProps)=> {
    const id: string = params.id;
    const result = await fetchCompanyById(id);
    const company = result[0];

    return ( 
        <main id="content">
            <div className="py-10 bg-white">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 space-y-10">
                    <CompanyCard company={company}/>

                    <div className="flex flex-col max-w-full w-full h-full">
                        <h2 className="text-3xl font-bold text-black">Map Section</h2>

                        <div className="w-full h-[80vh]">
                            <DynamicMap center={[company.lat, company.lon]} zoom={15} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default SingleDirectory;