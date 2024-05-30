'use client';
import '@uploadthing/react/styles.css';
import Modal from '@/app/(pages)/(admin)/components/Modal';
import { postCompany } from '@/app/action';
import { UploadButton } from '@/utils/uploadthing';
import { FormEvent, useState } from 'react';
import TipTapTextEditor from '@/app/(pages)/(admin)/components/TipTapTextEditor';
import toast from 'react-hot-toast';

import { IndividiualProfileParamters } from '@/app/_db/repositories/IndividiualProfileRepository';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { SocialPlatform } from '@/lib/document-types';

import { handleUpdateProfile } from '../../actions';

export default function EditProfileForm(props: { id: string; profile: Partial<IndividiualProfileParamters> }) {
    const [error, setError] = useState<string | null>(null);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formKey, setFormKey] = useState<number>(0);

    const [formData, setFormData] = useState<Partial<IndividiualProfileParamters>>(props.profile);

    const [images, setImages] = useState<{ url: string; key: string }[]>(props.profile.profile_image ?? []);

    const [socialHandles, setSocialHandles] = useState<SocialPlatform[]>(props.profile.social_handlers ?? []);

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setIsLoading(true);

        formData.profile_image = images;
        formData.social_handlers = socialHandles;

        console.log('file', formData);

        try {
            const response = await handleUpdateProfile(props.id, formData);

            // console.log('Response => ', response);

            if (response.ok) {
                toast('individual profile was edited', { duration: 5000 });

                setFormKey((prevKey) => prevKey + 1);
                setFormData(props.profile);
            } else {
                setError(response.errors);
            }

            setIsLoading(false);
        } catch (e) {
            console.error(e);
            setIsLoading(false);
        }
    };

    const handleImagesUpload = (res: any) => {
        setIsLoading(true);

        setImages(res);
        const json = JSON.stringify(res);
        console.log(json);

        toast('image upload completed', { duration: 5000 });

        setIsLoading(false);
    };

    const handleChangeSocialHandle = (index: number, field: string, value: string) => {
        const newPairs = [...socialHandles];
        newPairs[index] = { ...newPairs[index], [field]: value };

        console.log({ field, value });

        setSocialHandles(newPairs);
    };

    const handleAddSocialHandle = () => {
        setSocialHandles([...socialHandles, { platform: 'linkedin', url: '' }]);
    };

    const handleRemoveSocialHandle = (index: number) => {
        const newPairs = socialHandles.filter((_, i) => i !== index);
        setSocialHandles(newPairs);
    };

    return (
        <div className="mt-12">
            {error && <p className="text-red-600">{error}</p>}
            {/* Form */}
            <form key={formKey} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 lg:gap-6">
                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
                            Individual Profile Name
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
                        <label htmlFor="" className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
                            Individual Profile Image
                        </label>
                        <UploadButton
                            endpoint="singleImage"
                            onClientUploadComplete={(res) => {
                                if (res) {
                                    // Do something with the response
                                    handleImagesUpload(res);
                                }
                            }}
                            onUploadError={(error) => {
                                // Do something with the error.
                                alert(`ERROR! ${error.message}`);
                            }}
                        />
                        <div className="my-8 flex items-center justify-center">
                            {images.map((image) => (
                                <div key={image.url}>
                                    <img className="h-32" src={image.url} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="profile-profession"
                            className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Individual Profile Profession
                        </label>
                        <input
                            type="text"
                            name="profile-profession"
                            id="profile-profession"
                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    profession: e.target.value,
                                });
                            }}
                            value={formData.profession}
                        />
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                        <div>
                            <label
                                htmlFor="blog-image"
                                className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                            >
                                Individual Profile Website
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
                                Individual Profile Email
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
                                Individual Profile phone
                            </label>
                            <input
                                type="tel"
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
                                Individual Profile address
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

                    <div>
                        <label
                            htmlFor="company-category"
                            className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Individual Profile Category
                        </label>
                        <input
                            type="text"
                            name="company-category"
                            id="company-category"
                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    category: e.target.value,
                                });
                            }}
                            value={formData.category ?? ''}
                        />
                    </div>

                    <div>
                        <label htmlFor="story" className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
                            Individual Profile Biography
                        </label>

                        <TipTapTextEditor
                            value={formData.biography}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    biography: e,
                                });
                            }}
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <div className="flex items-center justify-between">
                        <label htmlFor="story" className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
                            Individual Profile Social Links
                        </label>
                        <button
                            onClick={handleAddSocialHandle}
                            disabled={socialHandles.length >= 3}
                            type="button"
                            className="inline-flex  items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                            <span className="mr-2">Add</span>
                            <PlusIcon className="size-4" />
                        </button>
                    </div>

                    <ul className="mt-4 flex flex-col space-y-4">
                        {socialHandles.map((sh, index) => (
                            <li key={`key-${index}`} className="inline-flex items-center space-x-3">
                                <div className="flex-1 ">
                                    <select
                                        required
                                        value={sh.platform}
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => handleChangeSocialHandle(index, 'platform', e.target.value)}
                                        name="social-platform"
                                        id="social-platform"
                                    >
                                        <option value="facebook">Facebook</option>
                                        <option value="linkedin">linkedin</option>
                                        <option value="whatsapp">whatsapp</option>
                                        <option value="instagram">instagram</option>
                                        <option value="x">x</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <input
                                        type="url"
                                        required
                                        name="social-handle-url"
                                        id="social-handle-url"
                                        onChange={(e) => handleChangeSocialHandle(index, 'url', e.target.value)}
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        value={sh.url}
                                    />
                                </div>
                                <div className="shrink-0">
                                    <button
                                        className="text-red-600"
                                        type="button"
                                        onClick={() => handleRemoveSocialHandle(index)}
                                    >
                                        <XMarkIcon className="size-5" />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* End Grid */}

                <div className="mt-6 grid">
                    {images.length ? (
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                            {isLoading ? 'Saving...' : 'Save Company'}
                        </button>
                    ) : (
                        <button
                            type="button"
                            disabled={!images.length || isLoading}
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
    );
}
