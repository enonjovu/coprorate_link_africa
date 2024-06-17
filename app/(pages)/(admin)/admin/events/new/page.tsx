'use client';
import '@uploadthing/react/styles.css';
import { UploadButton } from '@/utils/uploadthing';
import React, { useState } from 'react';
import Modal from '@/app/(pages)/(admin)/components/Modal';
import { postEvent } from '@/app/action';
import Image from 'next/image';
import { BsCalendar, BsClock, BsExclamationCircle, BsX } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';

// Initial state with types
type FormData = {
    title: string;
    description: string;
    eventDate: string;
    time: string;
    venue: string;
    images: { url: string; key: string }[];
    enquiries_link: string | null;
};

const initialFormData: FormData = {
    title: '',
    description: '',
    eventDate: '',
    venue: '',
    time: '',
    images: [{ url: '', key: '' }],
    enquiries_link: null,
};

const NewEvent = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formKey, setFormKey] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [images, setImages] = useState<{ url: string; key: string }[]>([]);
    const [errMsg, setErrMsg] = useState(true);

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);

        if (images.length < 1) {
            setErrMsg(false);
            setIsLoading(false);
            return;
        } else {
            formData.images = images;
        }
        console.log('file', formData);
        const response = await postEvent(formData);
        console.log('Response => ', response);
        if (response.status === 'true') {
            setIsModalOpen(true);

            toast.success('events created', { duration: 5000 });

            setFormKey((prevKey) => prevKey + 1);
            setFormData(initialFormData);
        }

        setIsLoading(false);
    };

    const handleImagesUpload = (res: any) => {
        setIsLoading(true);

        setImages(res);
        formData.images = images;
        const json = JSON.stringify(res);
        console.log(json);
        alert('Upload Completed');

        setIsLoading(false);
    };

    return (
        <div className="relative mx-auto max-w-[85rem] overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">Create new event</h1>
                </div>
                {errMsg ? null : (
                    <div className="absolute right-0 top-0 -mx-3 mt-4 flex h-screen w-full items-center justify-center bg-[#000000a9]">
                        <div className="flex  h-20 w-3/4 items-center justify-center  rounded-2xl bg-red-700 text-white ">
                            <div className="flex w-11/12 space-x-3">
                                <BsExclamationCircle size={20} color={'#fff'} />
                                <p className="w-3/4">No Image Uploaded</p>
                            </div>
                            <button className={'cursor-pointer'} onClick={() => setErrMsg(true)}>
                                <BsX size={25} color={'#fff'} />
                            </button>
                        </div>
                    </div>
                )}

                <div className="mt-12">
                    {/* Form */}
                    <form key={formKey}>
                        <div className="grid gap-4 lg:gap-6">
                            <div>
                                <label
                                    htmlFor="title"
                                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    Event Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            title: e.target.value,
                                        });
                                    }}
                                    value={formData.title}
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                                {images[0]?.url ? null : (
                                    <div>
                                        <label
                                            htmlFor="blog-image"
                                            className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                        >
                                            Event Image
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
                                )}

                                {images[0]?.url ? (
                                    <div className="">
                                        <div className="h-60 w-full overflow-hidden rounded">
                                            <Image
                                                width={1000}
                                                height={1000}
                                                src={images[0].url}
                                                className="h-full w-full object-cover"
                                                alt="Event Thumbnail"
                                            />
                                        </div>
                                    </div>
                                ) : null}
                            </div>

                            <div className="flex justify-between gap-4 sm:grid-cols-2 lg:gap-6">
                                {/* Time */}
                                <div>
                                    <label
                                        htmlFor="time"
                                        className="mb-2 flex space-x-2 text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        <BsClock size={20} color={'#fff'} /> <p>Time</p>
                                    </label>
                                    <input
                                        type="text"
                                        name="time"
                                        id="time"
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                time: e.target.value.toLocaleLowerCase(),
                                            });
                                        }}
                                        value={formData.time}
                                    />
                                </div>
                                {/* eventDate */}
                                <div>
                                    <label
                                        htmlFor="eventDate"
                                        className="mb-2 flex space-x-2 text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        <BsCalendar size={20} color={'#fff'} /> <p>eventDate</p>
                                    </label>
                                    <input
                                        type="text"
                                        name="eventDate"
                                        id="eventDate"
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                eventDate: e.target.value,
                                            });
                                        }}
                                        value={formData.eventDate}
                                    />
                                </div>

                                {/* Venue */}
                                <div>
                                    <label
                                        htmlFor="venue"
                                        className="mb-2 flex space-x-2 text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        <FaMapMarkerAlt size={20} color={'#fff'} /> <p>Location</p>
                                    </label>
                                    <input
                                        type="text"
                                        name="venue"
                                        id="venue"
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                venue: e.target.value.toLocaleLowerCase(),
                                            });
                                        }}
                                        value={formData.venue}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="enquiries_link"
                                    className="mb-2 flex space-x-2 text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    <p>Queries Link</p>
                                </label>
                                <input
                                    type="url"
                                    name="enquiries_link"
                                    id="enquiries_link"
                                    className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            enquiries_link: e.target.value.toLocaleLowerCase(),
                                        });
                                    }}
                                    value={formData.enquiries_link ?? ''}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="description"
                                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    Event Description
                                </label>
                                <textarea
                                    id="description"
                                    wrap="hard"
                                    name="description"
                                    rows={10}
                                    className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            description: e.target.value,
                                        });
                                    }}
                                    value={formData.description}
                                ></textarea>
                            </div>
                        </div>
                        {/* End Grid */}

                        <div className="mt-6 grid">
                            <button
                                type="button"
                                disabled={isLoading}
                                className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                onClick={handleSubmit}
                            >
                                Post Event
                            </button>
                        </div>
                    </form>
                    {/* End Form */}
                    <Modal
                        isOpen={isModalOpen}
                        message="Article created successfully"
                        onClose={() => setIsModalOpen(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default NewEvent;
