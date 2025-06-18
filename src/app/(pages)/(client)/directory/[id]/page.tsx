import './page.css';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import SocialMediaButtons from '../../components/SocialMediaButtons';
import config from '@/lib/config';

import { PageParameters } from '@/lib/types';
import { notFound } from 'next/navigation';
import { getDirectoryById } from '@/lib/repositories/DirectoryRepository';
import { BsEnvelope, BsGlobeEuropeAfrica, BsPhone } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { trimText } from '@/lib/helpers';
import { Suspense } from 'react';
import Directory from '@/models/Directory';
import Link from 'next/link';
import SideAds from '../../components/SideAds';
import ExtraDirectoriesSection from './ExtraDirectoriesSection';
import env from '@/utils/env';

const DynamicMap = dynamic(() => import('../../components/MapComponent'), {
    ssr: false,
});

const SingleDirectory = async ({ params }: PageParameters<{ id: string }>) => {
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
                        <div className="flex w-full flex-col items-center space-y-6 rounded-2xl p-4  md:w-3/5">
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
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: directory.description,
                                }}
                                className="prose w-[100%] max-w-full whitespace-pre-wrap text-gray-900 prose-headings:w-fit prose-headings:border-b-2 prose-headings:border-red-600 prose-headings:pb-2 prose-headings:pr-3"
                            ></div>

                            <div className="flex w-full items-center pt-6">
                                <SocialMediaButtons
                                    url={`${env.ROOT_LINK}/directory/${id}`}
                                    description={trimText(directory.description)}
                                    title={directory.name}
                                />
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-center space-y-4 rounded-2xl p-4 md:w-1/3">
                            <div className="w-full">
                                <h2 className="text-xl font-bold text-black">Contact Details</h2>

                                <ul className="flex min-w-full flex-col items-center justify-center space-y-4 md:w-10/12">
                                    {directory.phone && (
                                        <li className="w-full rounded-md border border-gray-200 bg-gray-100 p-2 pl-8 text-black shadow-md">
                                            <a
                                                href={`tel:${directory.phone}`}
                                                className="flex w-full flex-row items-center justify-center"
                                            >
                                                <div className="icon flex w-1/6 items-center justify-start">
                                                    <BsPhone size={20} />
                                                </div>
                                                <div className="flex w-full flex-col flex-wrap items-start justify-center md:w-3/4">
                                                    <p className="font-semibold">Phone</p>
                                                    <span className="font-medium text-gray-700">{directory.phone}</span>
                                                </div>
                                            </a>
                                        </li>
                                    )}

                                    {directory.email && (
                                        <li className="w-full rounded-md border border-gray-200 bg-gray-100 p-2 pl-8 text-black shadow-md">
                                            <a
                                                href={`mailto:${directory.email}`}
                                                className="flex w-full flex-row items-center justify-center"
                                            >
                                                <div className="icon flex w-1/6 items-center justify-start">
                                                    <BsEnvelope size={20} />
                                                </div>
                                                <div className="flex w-full flex-col flex-wrap items-start justify-center md:w-3/4">
                                                    <p className="font-semibold">Email</p>
                                                    <span className="font-medium text-gray-700">{directory.email}</span>
                                                </div>
                                            </a>
                                        </li>
                                    )}
                                    {directory.website && (
                                        <li className="w-full rounded-md border border-gray-200 bg-gray-100 p-2 pl-8 text-black shadow-md">
                                            <a
                                                href={directory.website}
                                                target="_blank"
                                                className="flex w-full flex-row items-center justify-center"
                                            >
                                                <div className="icon flex w-1/6 items-center justify-start">
                                                    <BsGlobeEuropeAfrica size={20} />
                                                </div>
                                                <div className="flex w-full flex-col flex-wrap items-start justify-center md:w-3/4">
                                                    <p className="font-semibold">Website</p>
                                                    <span className="font-medium text-gray-700">{directory.name}</span>
                                                </div>
                                            </a>
                                        </li>
                                    )}

                                    {directory.address && (
                                        <li className="flex w-full flex-row items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-2 pl-8 text-black shadow-md ">
                                            <div className="icon flex w-1/6 items-center justify-start">
                                                <FaMapMarkerAlt size={20} />
                                            </div>
                                            <div className="flex w-full flex-col flex-wrap items-start justify-center md:w-3/4">
                                                <p className="font-semibold">Address</p>
                                                <span className="font-medium text-gray-700">
                                                    {directory.address ? directory.address : 'Not availabe'}
                                                </span>
                                            </div>
                                        </li>
                                    )}

                                    {directory.promotion_adverts && directory.promotion_adverts[0] && (
                                        <li className="flex w-full flex-row items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-2  text-black shadow-md">
                                            <Image
                                                className="w-full rounded-md object-cover"
                                                width={600}
                                                height={200}
                                                src={directory.promotion_adverts[0].url}
                                                alt="company promo"
                                            />
                                        </li>
                                    )}
                                </ul>
                            </div>

                            <div className="w-full">
                                <Suspense
                                    fallback={<div className="h-64 w-full animate-pulse rounded-md bg-gray-300"></div>}
                                >
                                    <SideAds />
                                </Suspense>
                            </div>

                            {!directory.promotion_adverts && (
                                <div className="w-full space-y-4">
                                    <Suspense
                                        fallback={
                                            <div className="h-64 w-full animate-pulse rounded-md bg-gray-300"></div>
                                        }
                                    >
                                        <ExtraDirectoriesSection id={id} />
                                    </Suspense>
                                </div>
                            )}
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
