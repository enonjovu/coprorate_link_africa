'use client';
import '@uploadthing/react/styles.css';
import Modal from '@/app/(pages)/(admin)/components/Modal';
import { postCompany } from '@/app/action';
import { UploadButton } from '@/utils/uploadthing';
import { useState } from 'react';

// Initial state with types
type FormData = {
    name: string;
    phone: string;
    email: string;
    website: string;
    address: string;
    lat: string;
    lon: string;
    description: string;
    logo: { url: string; key: string }[];
};

const initialFormData: FormData = {
    name: '',
    email: '',
    description: '',
    phone: '',
    address: '',
    website: '',
    lat: '',
    lon: '',
    logo: [{ url: '', key: '' }],
};

const EditDirectory: React.FC = () => {
    // Types for state variables
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formKey, setFormKey] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [images, setImages] = useState<{ url: string; key: string }[]>([]);

    const handleSubmit = async () => {
        formData.logo = images;
        console.log('file', formData);
        const response = await postCompany(formData);
        console.log('Response => ', response);
        if (response.status === 'true') {
            setIsModalOpen(true); // Open the modal
            setFormKey((prevKey) => prevKey + 1);
            setFormData(initialFormData);
        }
    };

    const handleImagesUpload = (res: any) => {
        setImages(res);
        const json = JSON.stringify(res);
        console.log(json);
        alert('Upload Completed');
    };

    return (
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">
                        Create a new company directory
                    </h1>
                </div>

                <div className="mt-12">
                    {/* Form */}
                    <form key={formKey}>
                        <div className="grid gap-4 lg:gap-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    Directory name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        });
                                    }}
                                    value={formData.name}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor=""
                                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    Company icon
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

                            {/* Grid */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                                <div>
                                    <label
                                        htmlFor="blog-image"
                                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        Company Website
                                    </label>
                                    <input
                                        type="text"
                                        name="website"
                                        id="website"
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                website: e.target.value,
                                            });
                                        }}
                                        value={formData.website}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        Company Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            });
                                        }}
                                        value={formData.email}
                                    />
                                </div>
                            </div>
                            {/* End Grid */}

                            {/* Grid */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        Company phone
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                phone: e.target.value,
                                            });
                                        }}
                                        value={formData.phone}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="address"
                                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        Company address
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                address: e.target.value,
                                            });
                                        }}
                                        value={formData.address}
                                    />
                                </div>
                            </div>
                            {/* End Grid */}

                            {/* Grid */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                                <div>
                                    <label
                                        htmlFor="latitude"
                                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        Company latitude
                                    </label>
                                    <input
                                        type="text"
                                        name="latitude"
                                        id="latitude"
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                lat: e.target.value,
                                            });
                                        }}
                                        value={formData.lat}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="longitude"
                                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        Company longitude
                                    </label>
                                    <input
                                        type="text"
                                        name="longitude"
                                        id="longitude"
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                lon: e.target.value,
                                            });
                                        }}
                                        value={formData.lon}
                                    />
                                </div>
                            </div>
                            {/* End Grid */}

                            <div>
                                <label
                                    htmlFor="description"
                                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    Company Details
                                </label>
                                <textarea
                                    id="description"
                                    wrap="hard"
                                    name="description"
                                    rows={12}
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
                            {images.length ? (
                                <button
                                    type="button"
                                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    onClick={handleSubmit}
                                >
                                    Save Company
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    disabled
                                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-red-600 px-4 
                                py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                    Upload Company logo before Posting!
                                </button>
                            )}
                        </div>
                    </form>
                    {/* End Form */}
                    <Modal
                        isOpen={isModalOpen}
                        message="Directory created successfully"
                        onClose={() => setIsModalOpen(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default EditDirectory;
