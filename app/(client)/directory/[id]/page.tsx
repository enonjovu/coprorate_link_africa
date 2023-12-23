"use client"
import CompanyCard from "../../components/CompanyCard";
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../../components/MapComponent'), {
  ssr: false,
});


const SingleDirectory = ()=> {
    return ( 
        <main id="content">
            <div className="py-10 bg-white">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 space-y-10">
                    <CompanyCard/>

                    <div className="flex flex-col max-w-full w-full h-full">
                        <h2 className="text-3xl font-bold text-black">Map Section</h2>

                        <div className="w-full h-[80vh]">
                            <DynamicMap center={[-15.803751557312356, 35.03966514523811]} zoom={15} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default SingleDirectory;