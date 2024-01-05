import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import CompanyCard from "../../components/CompanyCard";
import { fetchCompanyById, getTenderByID } from "@/app/action";

type paramProps = {
    params: Params
}

const SingleTender = async ({ params }: paramProps) => {
    const id: string = params.id;
    const result = await getTenderByID(id)
    const tender = result[0];
    const companyQuery = await fetchCompanyById(tender.company)
    const company = companyQuery[0];
    return (
        <main id="content">
            <div className="py-10 bg-white">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 space-y-10">
                    <CompanyCard company={company} />

                    <div className="flex flex-col max-w-full w-full h-full">
                        <h2 className="text-3xl font-bold text-black">Job Description</h2>

                        <div className="w-full md:w-11/12 flex flex-col items-center rounded-2xl p-4 shadow-lg space-y-6">
                            <h3 className="text-xl font-bold text-black">
                                {tender.title}
                            </h3>
                            {/* About The Role */}
                            <div className="w-full flex-col space-y-4">
                                <p className="font-bold text-black text-lg">ABOUT THE ROLE</p>
                                <p className="text-black w-full md:w-10/12">
                                    {tender.description}
                                </p>
                            </div>

                            {/* Expirience Requirements */}
                            <div className="w-full flex-col space-y-4">
                                <p className="font-bold text-black text-lg"> Requirements</p>
                                <ul className="pl-4">
                                    {
                                        tender.requirements.map((requirement, index) => (
                                            <li key={index} className="text-black list-disc list-item">
                                                {requirement}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <button className="bg-red-700 text-white font-bold text-center w-11/12 md:w-1/3 h-16 rounded-lg">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SingleTender;