import { DirectoryDocument } from '@/lib/document-types';
import Image from 'next/image';
import { BsEnvelope, BsGlobeEuropeAfrica, BsPhone } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';

const CompanyCard = ({ company }: { company: DirectoryDocument }) => {
    console.log('Company => ', company);
    return (
        <div className="flex w-full max-w-full flex-col flex-wrap md:flex-row">
            {/* Compoany Description */}
            <div className="flex w-full flex-col items-center space-y-4 rounded-2xl p-4 shadow-lg md:w-3/5">
                <div className="h-40 w-40">
                    <Image
                        src={company.logo[0].url}
                        className="h-full w-full object-cover"
                        width={200}
                        height={200}
                        alt="Company Logo"
                    />
                </div>
                <h1 className="text-3xl font-bold text-black">{company.name}</h1>
                <p className="w-11/12 whitespace-pre-wrap text-gray-900">{company.description}</p>
            </div>
            <div className="2-full flex flex-col items-center space-y-4 rounded-2xl p-4 shadow-lg md:w-1/3">
                <h2 className="text-3xl font-bold text-black">Contact Details</h2>

                <ul className="flex h-full min-w-full flex-col items-center justify-center space-y-4">
                    <li className="flex h-full w-full flex-row items-start justify-center rounded-md p-2 pl-8 text-black shadow-lg md:w-10/12">
                        <div className="icon flex h-full w-1/6 items-center justify-start">
                            <BsPhone size={20} />
                        </div>
                        <div className="flex h-full w-full flex-col flex-wrap items-start justify-center md:w-3/4">
                            <p className="font-semibold">Phone</p>
                            <span className="text-gray-500">{company.phone ? company.phone : 'Not Available'}</span>
                        </div>
                    </li>

                    <li className="flex h-full w-full flex-row items-start justify-center rounded-md p-2 pl-8 text-black shadow-lg md:w-10/12">
                        <div className="icon flex h-full w-1/6 items-center justify-start">
                            <BsEnvelope size={20} />
                        </div>
                        <div className="flex h-full w-full flex-col flex-wrap items-start justify-center md:w-3/4">
                            <p className="font-semibold">Email</p>
                            <span className="text-gray-500">{company.email ? company.email : 'Not Available'}</span>
                        </div>
                    </li>

                    <li className="flex h-full w-full flex-row items-start justify-center rounded-md p-2 pl-8 text-black shadow-lg md:w-10/12">
                        <div className="icon flex h-full w-1/6 items-center justify-start">
                            <BsGlobeEuropeAfrica size={20} />
                        </div>
                        <div className="flex h-full w-[80%] max-w-[80%] flex-col flex-wrap items-start justify-center md:w-3/4">
                            <p className="font-semibold">Website</p>
                            <a href={company.website} target="_blank" className="text-gray-500">
                                <p className="whitespace-pre-wrap">
                                    {company.website ? company.name : 'Not available'}
                                </p>
                            </a>
                        </div>
                    </li>

                    <li className="flex h-full w-full flex-row items-start justify-center rounded-md p-2 pl-8 text-black shadow-lg md:w-10/12">
                        <div className="icon flex h-full w-1/6 items-center justify-start">
                            <FaMapMarkerAlt size={20} />
                        </div>
                        <div className="flex h-full w-full flex-col flex-wrap items-start justify-center md:w-3/4">
                            <p className="font-semibold">Address</p>
                            <span className="text-gray-500">{company.address ? company.address : 'Not availabe'}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CompanyCard;
