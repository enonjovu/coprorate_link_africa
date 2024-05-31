'use client';
import '@uploadthing/react/styles.css';
import Modal from '@/app/(pages)/(admin)/components/Modal';
import { UploadButton } from '@/utils/uploadthing';
import { FormEvent, useState } from 'react';
import { DirectoryParamters } from '@/app/_db/repositories/DirectoryRepository';
import toast from 'react-hot-toast';
import TipTapTextEditor from '@/app/(pages)/(admin)/components/TipTapTextEditor';
import { handleUpdateDirectory } from '../../../actions';
import { DirectoryCategoryType } from '@/app/_db/repositories/DirectoryCategoryRepository';
import SelectCategoryCombobox from '../../../../_components/SelectCategoryCombobox';

export default function EditDirectoryForm(props: {
    propeties: Partial<DirectoryParamters>;
    id: string;
    categories: DirectoryCategoryType[];
}) {
    // Types for state variables
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formKey, setFormKey] = useState<number>(0);

    const [formData, setFormData] = useState<Partial<DirectoryParamters>>(props.propeties);

    const [selectedCategory, setCategorySelected] = useState(
        props.categories.find((c) => c.name == props.propeties.category || c.id == props.propeties.category) ??
            props.categories[0],
    );

    const [images, setImages] = useState<{ url: string; key: string }[]>(props.propeties.logo ?? []);

    const [companyPromoImages, setCompanyPromoImages] = useState<{ url: string; key: string }[]>(
        props.propeties.promotion_adverts ?? [],
    );

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setIsLoading(true);

        formData.logo = images;
        formData.promotion_adverts = companyPromoImages;
        formData.category = selectedCategory.id ?? null;

        console.log('file', formData);
        const response = await handleUpdateDirectory(props.id, formData);

        console.log('Response => ', response);

        if (response.data) {
            toast('directory was edited');

            setFormKey((prevKey) => prevKey + 1);

            setFormData(response.data);

            setImages([]);
        }

        setIsLoading(false);
    };

    const handleImagesUpload = (res: any) => {
        setIsLoading(true);

        setImages(res);
        const json = JSON.stringify(res);
        console.log(json);

        toast('logo upload completed');

        setIsLoading(false);
    };

    const handleUploadPromotionAdvertImages = async (res: any) => {
        setIsLoading(true);

        setCompanyPromoImages(res);
        const json = JSON.stringify(res);

        toast('promo images upload completed');

        setIsLoading(false);
    };

    return (
        <div className="mt-12">
            {/* Form */}
            <form key={formKey} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 lg:gap-6">
                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
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
                        <label htmlFor="" className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
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
                                type="url"
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
                    <div>
                        <label
                            htmlFor="google-map-iframe-code"
                            className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Google Map Iframe Code
                        </label>
                        <textarea
                            rows={2}
                            name="google-map-iframe-code"
                            id="google-map-iframe-code"
                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    iframe: e.target.value,
                                });
                            }}
                            value={formData.iframe ?? ''}
                        ></textarea>
                    </div>
                    {/* End Grid */}

                    <div>
                        <label
                            htmlFor="company-category"
                            className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Company Category
                        </label>
                        <div className="w-full md:w-72">
                            <SelectCategoryCombobox
                                data={props.categories}
                                value={selectedCategory}
                                onChange={(e) => setCategorySelected(e)}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="story" className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
                            Company Details
                        </label>

                        <TipTapTextEditor
                            value={formData.description}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    description: e,
                                });
                            }}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="" className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
                        Company Promotion Advert
                    </label>
                    <UploadButton
                        endpoint="singleImage"
                        onClientUploadComplete={(res) => {
                            if (res) {
                                // Do something with the response
                                handleUploadPromotionAdvertImages(res);
                            }
                        }}
                        onUploadError={(error: Error) => {
                            // Do something with the error.
                            alert(`ERROR! ${error.message}`);
                        }}
                    />
                </div>

                {companyPromoImages && (
                    <div className="my-6">
                        <h2 className="mb-2 text-lg text-white">Company Promotion Advert Image</h2>
                        <div className=" grid">
                            {companyPromoImages.map((image) => (
                                <div key={image.url}>
                                    <img className="h-32" src={image.url} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

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
