import { fetchCompanies } from "@/app/action";
import Image from "next/image";

const DirectoryPage = async () => {
    const companies = await fetchCompanies();

    return ( 
        
        <div className="bg-gray-50 py-6">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    <div className="flex-shrink max-w-full w-full overflow-hidden">
                        <div className="w-full py-3">
                            <h2 className="text-gray-800 text-2xl font-bold">
                                <span className="inline-block h-5 border-l-3 border-red-600 border-2 mr-2"></span>
                                Directories
                            </h2>
                        </div>
                        <div className="flex flex-row flex-wrap -mx-3">
                            <div className="flex-shrink max-w-full w-full px-3 pb-5">
                                <div className="relative hover-img max-h-[50vh] overflow-hidden">
                                {/*thumbnail*/}
                                <a href="/directory/123">
                                    <Image className="max-w-full w-full mx-auto h-auto object-contain" width={1000} height={1000} src="/src/img/dummy/img16.jpg" alt="Image description"/>
                                </a>
                                <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                                    {/*title*/}
                                    <a href="/directory/123">
                                    <h2 className="text-5xl font-bold capitalize text-white mb-3">Company Directories</h2>
                                    </a>
                                    <p className="text-gray-100 hidden sm:inline-block">Know whats going on around town & where to be, we got you covered.</p>
                                </div>
                                </div>
                            </div>
                            {
                            companies.map(company=>(
                                <div key={company._id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                    <div className="flex flex-row sm:block hover-img">
                                    <a href={`/directory/${company._id}`}>
                                        <img className="max-w-20 w-20 h-20 object-cover mx-auto" src={company.logo[0].url} alt="alt title"/>
                                    </a>
                                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 className="text-2xl text-black font-bold leading-tight mb-2">
                                            <a href={`/directory/${company._id}`}>{company.name}</a>
                                        </h3>
                                    </div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DirectoryPage;