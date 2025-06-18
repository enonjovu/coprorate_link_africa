import SocialMediaButtons from '../../components/SocialMediaButtons';
import config from '@/lib/config';
import IndividiualProfileRepository from '@/app/_db/repositories/IndividiualProfileRepository';
import Image from 'next/image';

import { PageParameters } from '@/lib/types';
import { notFound } from 'next/navigation';
import {
    BsEnvelope,
    BsGlobeEuropeAfrica,
    BsPhone,
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsWhatsapp,
    BsTwitterX,
} from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SocialPlatformNames } from '@/lib/document-types';
import { ReactNode, Suspense } from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { trimText } from '@/lib/helpers';
import SideAds from '../../components/SideAds';

import ExtraProfileSection from './ExtraProfileSection';
import env from '@/utils/env';

const SocialMediaIcons: Record<SocialPlatformNames, ReactNode> = {
    facebook: <BsFacebook className="size-8" />,
    instagram: <BsInstagram className="size-8" />,
    linkedin: <BsLinkedin className="size-8" />,
    whatsapp: <BsWhatsapp className="size-8" />,
    x: <BsTwitterX className="size-8" />,
};

export async function generateMetadata(
    { params }: PageParameters<{ id: string }>,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const id = params?.id;

    if (!id) {
        return {};
    }

    const profile = await IndividiualProfileRepository.getById(id);

    if (!profile) {
        return {};
    }

    return {
        title: profile.name,
        openGraph: {
            images: profile.profile_image[0].url,
            title: profile.name,
            url: `https://www.clafrica.online/leaders/${id}`,
            description: trimText(profile.biography, 0, 30),
        },
        description: trimText(profile.biography, 0, 30),
    };
}

export default async function SingleLeader(props: PageParameters<{ id: string }>) {
    const id = props.params?.id;

    if (!id) {
        notFound();
    }

    const profile = await IndividiualProfileRepository.getById(id);

    if (!profile) {
        notFound();
    }

    return (
        <main id="content">
            <div className="bg-white py-10">
                <div className="mx-auto space-y-10 px-3 xl:container sm:px-4 xl:px-2">
                    <div className="flex w-full max-w-full flex-col flex-wrap md:flex-row">
                        {/* Compoany Description */}
                        <div className="flex w-full flex-col items-center space-y-4 rounded-2xl p-4 md:w-3/5">
                            <div className="size-52">
                                {profile.profile_image ? (
                                    <Image
                                        src={profile.profile_image[0].url}
                                        className="h-full w-full object-cover"
                                        width={200}
                                        height={200}
                                        alt={profile.name}
                                    />
                                ) : null}
                            </div>
                            <div className="mt-6 flex w-full flex-col items-center justify-center text-center">
                                <h1 className="text-center text-2xl font-bold text-black">{profile.name}</h1>
                                {profile.profession && (
                                    <p className="text-sm font-medium text-gray-700">{profile.profession}</p>
                                )}
                            </div>

                            <div className="w-full space-y-4">
                                <div className="mb-2">
                                    <h2 className="w-fit border-b-2 border-red-600 pb-2 pr-3 text-2xl font-black text-black">
                                        Biography
                                    </h2>
                                </div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: profile.biography,
                                    }}
                                    className="prose w-[100%] max-w-full whitespace-pre-wrap text-gray-900 prose-headings:w-fit prose-headings:border-b-2 prose-headings:border-red-600 prose-headings:pb-2 prose-headings:pr-3"
                                ></div>
                                <div className="mt-4 inline-flex w-full items-center justify-center pt-6">
                                    <ul className="flex items-center space-x-4">
                                        {profile.social_handlers.map((handle) => (
                                            <li key={handle.url}>
                                                <a href={handle.url} className="text-black" target="_blank">
                                                    {SocialMediaIcons[handle.platform]}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex w-full items-center pt-6">
                                    <SocialMediaButtons
                                        url={`${env.ROOT_LINK}/directory/${id}`}
                                        description={trimText(profile.biography)}
                                        title={profile.name}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-center space-y-4 rounded-2xl p-4 md:w-1/3">
                            <div className="w-full">
                                <h2 className="text-xl font-bold text-black">Contact Details</h2>

                                <ul className="flex min-w-full flex-col items-center justify-center space-y-4 md:w-10/12">
                                    {profile.phone && (
                                        <li className="w-full rounded-md border border-gray-200 bg-gray-100 p-2 pl-8 text-black shadow-md">
                                            <a
                                                href={`tel:${profile.phone}`}
                                                className="flex w-full flex-row items-center justify-center"
                                            >
                                                <div className="icon flex w-1/6 items-center justify-start">
                                                    <BsPhone size={20} />
                                                </div>
                                                <div className="flex w-full flex-col flex-wrap items-start justify-center md:w-3/4">
                                                    <p className="font-semibold">Phone</p>
                                                    <span className="font-medium text-gray-700">{profile.phone}</span>
                                                </div>
                                            </a>
                                        </li>
                                    )}

                                    {profile.email && (
                                        <li className="w-full rounded-md border border-gray-200 bg-gray-100 p-2 pl-8 text-black shadow-md">
                                            <a
                                                href={`mailto:${profile.email}`}
                                                className="flex w-full flex-row items-center justify-center"
                                            >
                                                <div className="icon flex w-1/6 items-center justify-start">
                                                    <BsEnvelope size={20} />
                                                </div>
                                                <div className="flex w-full flex-col flex-wrap items-start justify-center md:w-3/4">
                                                    <p className="font-semibold">Email</p>
                                                    <span className="font-medium text-gray-700">{profile.email}</span>
                                                </div>
                                            </a>
                                        </li>
                                    )}
                                    {profile.website && (
                                        <li className="w-full rounded-md border border-gray-200 bg-gray-100 p-2 pl-8 text-black shadow-md">
                                            <a
                                                href={profile.website}
                                                target="_blank"
                                                className="flex w-full flex-row items-center justify-center"
                                            >
                                                <div className="icon flex w-1/6 items-center justify-start">
                                                    <BsGlobeEuropeAfrica size={20} />
                                                </div>
                                                <div className="flex w-full flex-col flex-wrap items-start justify-center md:w-3/4">
                                                    <p className="font-semibold">Website</p>
                                                    <span className="font-medium text-gray-700">{profile.name}</span>
                                                </div>
                                            </a>
                                        </li>
                                    )}

                                    {profile.address && (
                                        <li className="flex w-full flex-row items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-2 pl-8 text-black shadow-md ">
                                            <div className="icon flex w-1/6 items-center justify-start">
                                                <FaMapMarkerAlt size={20} />
                                            </div>
                                            <div className="flex w-full flex-col flex-wrap items-start justify-center md:w-3/4">
                                                <p className="font-semibold">Address</p>
                                                <span className="font-medium text-gray-700">
                                                    {profile.address ? profile.address : 'Not availabe'}
                                                </span>
                                            </div>
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
                            <div className="w-full space-y-4">
                                <Suspense
                                    fallback={<div className="h-64 w-full animate-pulse rounded-md bg-gray-300"></div>}
                                >
                                    <ExtraProfileSection id={id} />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
