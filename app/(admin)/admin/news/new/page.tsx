'use client';
import '@uploadthing/react/styles.css';
import Modal from '@/app/(admin)/components/Modal';
import { postBlog } from '@/app/action';
import { UploadButton } from '@/utils/uploadthing';
import { useState } from 'react';
import Link from 'next/link';
import TextEditor from '@/app/(admin)/components/TextEditor';

// Initial state with types
type FormData = {
    title: string;
    category: string;
    story: string;
    author: string;
    images: { url: string; key: string }[];
};

const initialFormData: FormData = {
    title: '',
    category: '',
    story: '',
    author: '',
    images: [{ url: '', key: '' }],
};

const NewPost: React.FC = () => {
    // Types for state variables
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formKey, setFormKey] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [images, setImages] = useState<{ url: string; key: string }[]>([]);

    const handleSubmit = async () => {
        formData.images = images;
        console.log('file', formData);
        const response = await postBlog(formData);
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
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">Create new article</h1>
                </div>

                {imageList}

                <div className="mt-12">
                    {/* Form */}
                    <form key={formKey}>
                        <div className="grid gap-4 lg:gap-6">
                            <div>
                                <label
                                    htmlFor="author"
                                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    Author Name
                                </label>
                                <input
                                    type="text"
                                    name="author"
                                    id="author"
                                    className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            author: e.target.value,
                                        });
                                    }}
                                    value={formData.author}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="title"
                                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    Article Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            title: e.target.value.trim(),
                                        });
                                    }}
                                    value={formData.title}
                                />
                            </div>

                            {/* Grid */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                                <div>
                                    <label
                                        htmlFor="blog-image"
                                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        Article Image
                                    </label>
                                    <UploadButton
                                        endpoint="imageUploader"
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

                                <div>
                                    <label
                                        htmlFor="category"
                                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        Article Category
                                    </label>
                                    <input
                                        type="text"
                                        name="category"
                                        id="category"
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                category: e.target.value.toLocaleLowerCase().trim(),
                                            });
                                        }}
                                        value={formData.category}
                                    />
                                </div>
                            </div>
                            {/* End Grid */}

                            <div>
                                <label
                                    htmlFor="story"
                                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    Story
                                </label>
                                <textarea
                                    id="story"
                                    wrap="hard"
                                    name="story"
                                    rows={4}
                                    className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            story: e.target.value,
                                        });
                                    }}
                                    value={formData.story}
                                ></textarea>
                                <TextEditor />
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
                                    Post Article
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    disabled
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
                        message="Article created successfully"
                        onClose={() => setIsModalOpen(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default NewPost;
