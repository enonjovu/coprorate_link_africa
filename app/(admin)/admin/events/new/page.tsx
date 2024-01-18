"use client"
import "@uploadthing/react/styles.css";
import { UploadButton } from "@/utils/uploadthing";
import React, { useState } from 'react';
import Modal from "@/app/(admin)/components/Modal";
import { postEvent } from '@/app/action';
import Image from "next/image";

// Initial state with types
type FormData = {
    title: string;
    description: string;
    images: { url: string; key: string; }[]
};

const initialFormData: FormData = {
    title: "",
    description: "",
    images: [{ url: "", key: "" }],
};

const NewEvent = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formKey, setFormKey] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [images, setImages] = useState<{ url: string; key: string; }[]>([])

    const handleSubmit = async () => {
        formData.images = images;
        console.log("file", formData);
        const response = await postEvent(formData)
        console.log("Response => ", response);
        if (response.status === "true") {
            setIsModalOpen(true);
            setFormKey((prevKey) => prevKey + 1);
            setFormData(initialFormData);
        }
    };

    const handleImagesUpload = (res: any) => {
        setImages(res)
        formData.images = images;
        const json = JSON.stringify(res);
        console.log(json);
        alert("Upload Completed");
    }

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Create new event
                    </h1>
                </div>
                <div className="flex flex-row flex-wrap -mx-3">
                    {
                        formData.images.length ? (
                            formData.images.map(image => (
                                <div key={image.key} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                    <div className="flex flex-row sm:block hover-img relative">
                                        <Image width={900} height={800} priority
                                            className="max-w-full w-full h-40 min-h-40 max-h-40 overflow-hidden object-cover mx-auto"
                                            src={image.url} alt="alt title"
                                        />
                                    </div>
                                </div>
                            ))
                        ) : null
                    }
                </div>

                <div className="mt-12">
                    {/* Form */}
                    <form key={formKey}>
                        <div className="grid gap-4 lg:gap-6">
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Event Title</label>
                                <input type="text" name="title" id="title" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            title: e.target.value
                                        })
                                    }}
                                    value={formData.title}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <label htmlFor="blog-image" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Event Image</label>
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

                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Event Description</label>
                                <textarea id="description" wrap="hard" name="description" rows={10} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            description: e.target.value
                                        })
                                    }}
                                    value={formData.description}
                                ></textarea>
                            </div>

                        </div>
                        {/* End Grid */}

                        <div className="mt-6 grid">
                            <button type="button"
                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                onClick={handleSubmit}>Post Event
                            </button>
                        </div>
                    </form>
                    {/* End Form */}
                    <Modal isOpen={isModalOpen} message="Article created successfully" onClose={() => setIsModalOpen(false)} />
                </div>
            </div>
        </div>
    );
};

export default NewEvent;