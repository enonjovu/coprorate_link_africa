import Image from "next/image";
import { BsEnvelope, BsGlobeEuropeAfrica, BsPhone } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

type companyProps = {
    company: {
        _id: string;
        name: string;
        phone: string;
        email: string;
        website: string;
        address: string;
        lat: number;
        lon: number;
        description: string;
        logo: { url: string; key: string; }[]
    }
}

const CompanyCard = ({ company }: companyProps) => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap max-w-full w-full">
            {/* Compoany Description */}
            <div className="w-full md:w-3/5 flex flex-col items-center rounded-2xl p-4 shadow-lg space-y-4">
                <div className="w-40 h-40">
                    <Image src={company.logo[0].url} className="w-full h-full object-cover" width={200} height={200} alt="Company Logo" />
                </div>
                <h1 className="text-3xl font-bold text-black">{company.name}</h1>
                <p className="text-gray-900 w-11/12 whitespace-pre-wrap">
                    {company.description}
                </p>
            </div>
            <div className="2-full md:w-1/3 flex flex-col items-center rounded-2xl p-4 shadow-lg space-y-4">
                <h2 className="text-3xl font-bold text-black">
                    Contact Details
                </h2>

                <ul className="min-w-full h-full flex flex-col space-y-4 justify-center items-center">
                    <li className="rounded-md text-black h-full w-full md:w-10/12 shadow-lg flex flex-row items-start justify-center pl-8 p-2">
                        <div className="icon w-1/6 h-full flex justify-start items-center">
                            <BsPhone size={20} />
                        </div>
                        <div className="flex-wrap w-full md:w-3/4 flex flex-col h-full items-start justify-center">
                            <p className="font-semibold">Phone</p>
                            <span className="text-gray-500">{company.phone ? company.phone : "Not Available"}</span>
                        </div>
                    </li>

                    <li className="rounded-md text-black h-full w-full md:w-10/12 shadow-lg flex flex-row items-start justify-center pl-8 p-2">
                        <div className="icon w-1/6 h-full flex justify-start items-center">
                            <BsEnvelope size={20} />
                        </div>
                        <div className="flex-wrap w-full md:w-3/4 flex flex-col h-full items-start justify-center">
                            <p className="font-semibold">Email</p>
                            <span className="text-gray-500">{company.email ? company.email : "Not Available"}</span>
                        </div>
                    </li>

                    <li className="rounded-md text-black h-full w-full md:w-10/12 shadow-lg flex flex-row items-start justify-center pl-8 p-2">
                        <div className="icon w-1/6 h-full flex justify-start items-center">
                            <BsGlobeEuropeAfrica size={20} />
                        </div>
                        <div className="flex-wrap w-[80%] max-w-[80%] md:w-3/4 flex flex-col h-full items-start justify-center">
                            <p className="font-semibold">Website</p>
                            <a href={company.website} target="_blank" className="text-gray-500">
                                <p className="whitespace-pre-wrap">{company.website ? company.name : "Not available"}</p>
                            </a>
                        </div>
                    </li>

                    <li className="rounded-md text-black h-full w-full md:w-10/12 shadow-lg flex flex-row items-start justify-center pl-8 p-2">
                        <div className="icon w-1/6 h-full flex justify-start items-center">
                            <FaMapMarkerAlt size={20} />
                        </div>
                        <div className="flex-wrap w-full md:w-3/4 flex flex-col h-full items-start justify-center">
                            <p className="font-semibold">Address</p>
                            <span className="text-gray-500">{company.address ? company.address : "Not availabe"}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CompanyCard;