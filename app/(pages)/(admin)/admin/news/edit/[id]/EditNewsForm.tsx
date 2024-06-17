'use client';
import '@uploadthing/react/styles.css';
import { BsTrash } from 'react-icons/bs';
import Modal from '@/app/(pages)/(admin)/components/Modal';
import { deleteImage, postBlog, updateBlog } from '@/app/action';
import { UploadButton } from '@/utils/uploadthing';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BlogDocument } from '@/lib/document-types';
import TipTapTextEditor from '@/app/(pages)/(admin)/components/TipTapTextEditor';
import { BlogParamters } from '@/app/_db/repositories/BlogRepository';
import toast from 'react-hot-toast';

type blogProps = {
    id: string;
    author: string;
    date: string;
    images: {
        url: string;
        key: string;
    }[];
    story: string;
    title: string;
    category: string;
}[];

// Initial state with types
type FormData = {
    id: string;
    title: string;
    category: string;
    story: string;
    author: string;
    images: { url: string; key: string }[];
};

const initialFormData: FormData = {
    id: '',
    title: '',
    category: '',
    story: '',
    author: '',
    images: [{ url: '', key: '' }],
};

const EditNewsForm = ({ blog, id: blog_id }: { blog: BlogParamters; id: string }) => {
    // Types for state variables
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formKey, setFormKey] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        id: blog_id,
        title: blog.title,
        category: blog.category,
        story: blog.story,
        author: blog.author,
        images:
            blog.images?.map((img) => ({
                url: img.url,
                key: img.key,
            })) ?? [],
    });

    const [images, setImages] = useState<{ url: string; key: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (blog) {
            setFormData({
                id: blog_id,
                title: blog.title,
                category: blog.category,
                story: blog.story,
                author: blog.author,
                images:
                    blog.images?.map((img) => ({
                        url: img.url,
                        key: img.key,
                    })) ?? [],
            });
        }
    }, []);

    const handleSubmit = async () => {
        setIsLoading(true);

        if (images) {
            images.map((image) => formData.images.push(image));
        }
        const res = await updateBlog(formData, formData.id);

        toast.success('article was edited', { duration: 5000 });

        setIsLoading(false);
    };

    const handleDelete = async (key: string, id: string) => {
        setLoading(true);

        setIsLoading(true);

        const res = await deleteImage(key, id);
        if (res) {
            // Remove the deleted image from formData
            setFormData((prevState) => ({
                ...prevState,
                images: prevState.images.filter((image) => image.key !== key),
            }));
            setLoading(false);
            toast.success('images were deleted', { duration: 5000 });

            setIsLoading(false);
        }
        router.push(`/admin/news/edit/${blog_id}`);
    };

    const handleImagesUpload = (res: any) => {
        setImages(res);
        toast.success('images was uploaded', { duration: 5000 });
    };

    return (
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">Edit Article</h1>
                </div>
                <Modal isOpen={isModalOpen} message={modalMessage} onClose={() => setIsModalOpen(false)} />
                <div className="sapce-x-6 mt-12">
                    <div className="-mx-3 flex flex-row flex-wrap">
                        {formData.images?.map((image) => (
                            <div
                                key={image.key}
                                className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0"
                            >
                                <div className="hover-img relative flex flex-row sm:block">
                                    <div className="absolute flex h-7 w-full justify-end">
                                        {loading ? (
                                            <button className="flex w-2/5 cursor-pointer items-center justify-center rounded-sm bg-red-700 text-white">
                                                Deleting...
                                            </button>
                                        ) : (
                                            <button
                                                className="flex w-1/5 cursor-pointer items-center justify-center rounded-sm bg-red-700"
                                                onClick={() => handleDelete(image.key, formData.id)}
                                            >
                                                <BsTrash color={'#fff'} size={20} />
                                            </button>
                                        )}
                                    </div>
                                    <img
                                        className="mx-auto h-40 max-h-40 min-h-40 w-full max-w-full overflow-hidden object-cover"
                                        src={image.url}
                                        alt="alt title"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
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
                                            title: e.target.value,
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
                                        Add New Images
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
                                                category: e.target.value,
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
                                <TipTapTextEditor
                                    onChange={(content) => {
                                        setFormData({
                                            ...formData,
                                            story: content, // Directly use the content
                                        });
                                    }}
                                    value={formData.story}
                                />
                            </div>
                        </div>
                        {/* End Grid */}

                        <div className="mt-6 grid">
                            <button
                                disabled={isLoading}
                                type="button"
                                className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                onClick={handleSubmit}
                            >
                                Update Article
                            </button>
                        </div>
                    </form>
                    {/* End Form */}
                    {/* <Modal isOpen={isModalOpen} message="Article created successfully" onClose={() => setIsModalOpen(false)} /> */}
                </div>
            </div>
        </div>
    );
};

export default EditNewsForm;
