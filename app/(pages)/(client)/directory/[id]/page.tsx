import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import CompanyCard from '../../components/CompanyCard';
import dynamic from 'next/dynamic';
import { fetchCompanyById } from '@/app/action';
import { getDirectoryById } from '@/lib/repositories/DirectoryRepository';
import Image from 'next/image';
import { BsEnvelope, BsGlobeEuropeAfrica, BsPhone } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import './page.css';

const DynamicMap = dynamic(() => import('../../components/MapComponent'), {
    ssr: false,
});

type paramProps = {
    params: Params;
};

type PageProps = {
    params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
};

const SingleDirectory = async ({ params }: PageProps) => {
    const id: string = params.id;

    const directory = await getDirectoryById(id);

    if (!directory) {
        notFound();
    }

    return (
        <main id="content">
            <div className="bg-white py-10">
                <div className="mx-auto space-y-10 px-3 xl:container sm:px-4 xl:px-2">
                    <div className="flex w-full max-w-full flex-col flex-wrap md:flex-row">
                        {/* Compoany Description */}
                        <div className="flex w-full flex-col items-center space-y-4 rounded-2xl p-4 shadow-lg md:w-3/5">
                            <div className="h-40 w-40">
                                {directory.logo ? (
                                    <Image
                                        src={directory.logo[0].url}
                                        className="h-full w-full object-cover"
                                        width={200}
                                        height={200}
                                        alt="Company Logo"
                                    />
                                ) : null}
                            </div>
                            <h1 className="text-3xl font-bold text-black">{directory.name}</h1>
                            <p className="w-11/12 whitespace-pre-wrap text-gray-900">{directory.description}</p>
                        </div>
                        <div className="2-full flex flex-col items-center space-y-4 rounded-2xl p-4 shadow-lg md:w-1/3">
                            <h2 className="text-3xl font-bold text-black">Contact Details</h2>

                            <ul className="flex min-w-full flex-col items-center justify-center space-y-4">
                                <li className="rounded-md p-2 pl-8 text-black shadow-lg md:w-10/12">
                                    <a
                                        href={directory.phone ? `tel:${directory.phone}` : ''}
                                        className="flex w-full flex-row items-center justify-center"
                                    >
                                        <div className="icon flex w-1/6 items-center justify-start">
                                            <BsPhone size={20} />
                                        </div>
                                        <div className="flex w-full flex-col flex-wrap items-start justify-center md:w-3/4">
                                            <p className="font-semibold">Phone</p>
                                            <span className="text-gray-500">
                                                {directory.phone ? directory.phone : 'Not Available'}
                                            </span>
                                        </div>
                                    </a>
                                </li>

                                <li className="flex w-full flex-row items-center justify-center rounded-md p-2 pl-8 text-black shadow-lg md:w-10/12">
                                    <div className="icon flex w-1/6 items-center justify-start">
                                        <BsEnvelope size={20} />
                                    </div>
                                    <div className="flex w-full flex-col flex-wrap items-start justify-center md:w-3/4">
                                        <p className="font-semibold">Email</p>
                                        <span className="text-gray-500">
                                            {directory.email ? (
                                                <a href={`mailto:${directory.email}`}>{directory.email}</a>
                                            ) : (
                                                'Not Available'
                                            )}
                                        </span>
                                    </div>
                                </li>

                                <li className="flex w-full flex-row items-center justify-center rounded-md p-2 pl-8 text-black shadow-lg md:w-10/12">
                                    <div className="icon flex w-1/6 items-center justify-start">
                                        <BsGlobeEuropeAfrica size={20} />
                                    </div>
                                    <div className="flex w-[80%] max-w-[80%] flex-col flex-wrap items-start justify-center md:w-3/4">
                                        <p className="font-semibold">Website</p>
                                        <a href={directory.website} target="_blank" className="text-gray-500">
                                            <p className="whitespace-pre-wrap">
                                                {directory.website ? directory.name : 'Not available'}
                                            </p>
                                        </a>
                                    </div>
                                </li>

                                <li className="flex w-full flex-row items-center justify-center rounded-md p-2 pl-8 text-black shadow-lg md:w-10/12">
                                    <div className="icon flex w-1/6 items-center justify-start">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div className="flex w-full flex-col flex-wrap items-start justify-center md:w-3/4">
                                        <p className="font-semibold">Address</p>
                                        <span className="text-gray-500">
                                            {directory.address ? directory.address : 'Not availabe'}
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {directory.lat && directory.lon ? (
                        <div className="flex h-full w-full max-w-full flex-col">
                            <h2 className="text-3xl font-bold text-black">Map Section</h2>

                            <div className="h-[80vh] w-full">
                                <DynamicMap center={[parseInt(directory.lat), parseInt(directory.lon)]} zoom={15} />
                            </div>
                        </div>
                    ) : null}

                    {directory.iframe ? (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: directory.iframe ?? '',
                            }}
                        ></div>
                    ) : null}
                </div>
            </div>
        </main>
    );
};

export default SingleDirectory;
