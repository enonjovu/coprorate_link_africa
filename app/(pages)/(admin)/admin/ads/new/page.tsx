'use client';
import '@uploadthing/react/styles.css';
import Modal from '@/app/(pages)/(admin)/components/Modal';
import { postAds } from '@/app/action';
import { UploadButton } from '@/utils/uploadthing';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';

import { Radio, RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { AdvertVariant } from '@/lib/document-types';
import FormHeading from '../../_components/FormHeading';

// Initial state with types
type FormData = {
    images: { url: string; key: string }[];
    variant: AdvertVariant;
    link: string;
};

const initialFormData: FormData = {
    images: [{ url: '', key: '' }],
    variant: 'normal',
    link: '',
};
const advertTypes: AdvertVariant[] = ['top', 'side', 'banner', 'normal'];

const advertTypesDescritption: Record<AdvertVariant, string> = {
    top: 'Top Banner - Rect',
    side: 'Side Panel - Square',
    banner: 'Top Banner - (Directory/Tenders)',
    normal: 'Home Card',
};

const NewDirectory: React.FC = () => {
    // Types for state variables
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formKey, setFormKey] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [images, setImages] = useState<{ url: string; key: string }[]>([]);

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setIsLoading(true);

        if (images.length < 1) {
            setIsLoading(false);
            return;
        }

        formData.images = images;

        const response = await postAds(formData);

        if (response.status === 'true') {
            setFormKey((prevKey) => prevKey + 1);
            setFormData(initialFormData);
            setImages([]);

            setIsLoading(false);

            toast('created', { duration: 5000 });
        } else {
            toast('failed', { duration: 5000 });
        }

        setIsLoading(false);
    };

    const handleImagesUpload = (res: any) => {
        setImages(res);

        const json = JSON.stringify(res);

        toast('Upload image Completed');
    };

    const title = images.length ? (
        <>
            <h1 className="my-5 text-xl">Upload Complete</h1>
            <p>Uploaded {images.length} files</p>
        </>
    ) : null;

    const imageList = (
        <>
            {title}
            <ul>
                {images.map((image) => (
                    <li key={image.key}>
                        <Link href={image.url} target="_blank">
                            {image.url}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );

    return (
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-xl">
                <FormHeading>Create a new advert</FormHeading>

                {imageList}

                <div className="mt-12">
                    {/* Form */}
                    <form key={formKey} onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid gap-4 lg:gap-6">
                            {/* Grid */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                                <div>
                                    <label
                                        htmlFor="blog-image"
                                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        Advert Image(s)
                                    </label>
                                    <UploadButton
                                        endpoint="singleImage"
                                        onClientUploadComplete={(res) => {
                                            if (res) {
                                                // Do something with the response
                                                handleImagesUpload(res);
                                            }
                                        }}
                                        onUploadError={(error: Error) => {
                                            // Do something with the error.
                                            alert(`ERROR! ${error.message}`);
                                        }}
                                    />
                                </div>
                            </div>
                            {/* End Grid */}
                        </div>

                        <div className="my-6 w-full">
                            <label
                                htmlFor="select-advert-variant"
                                className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                            >
                                Select Advert variant
                            </label>
                            <select
                                required
                                value={formData.variant}
                                className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        variant: e.target.value as AdvertVariant,
                                    })
                                }
                                name="variant"
                                id="select-advert-variant"
                            >
                                {advertTypes.map((dt) => (
                                    <option key={dt} value={dt}>
                                        {advertTypesDescritption[dt]}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="advert-link"
                                className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                            >
                                Advert Link
                            </label>
                            <input
                                type="url"
                                name="link"
                                id="advert-link"
                                className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        link: e.target.value,
                                    });
                                }}
                                value={formData.link}
                            />
                        </div>
                        {/* End Grid */}

                        <div className="mt-6 grid">
                            {images.length ? (
                                <button
                                    disabled={isLoading}
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                    {isLoading ? 'Creating Advert...' : 'Post Advert'}
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    disabled={isLoading || !images.length}
                                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-red-600 px-4 
                                py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                    Upload Images before Posting!
                                </button>
                            )}
                        </div>
                    </form>
                    {/* End Form */}
                    <Modal
                        isOpen={isModalOpen}
                        message="Blog created successfully"
                        onClose={() => setIsModalOpen(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default NewDirectory;
