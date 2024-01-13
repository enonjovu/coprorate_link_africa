"use client"
import "@uploadthing/react/styles.css";
import Modal from "@/app/(admin)/components/Modal";
import { deleteImage, postBlog } from "@/app/action";
import { UploadButton } from "@/utils/uploadthing";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
import { UTApi } from "uploadthing/server";


type blogProps = {
    id: string,
    author: string,
    date: string,
    images: {
        url: string,
        key: string,
    }[],
    story: string,
    title: string,
    category: string
}[]

// Initial state with types
type FormData = {
    id: string,
    title: string;
    category: string;
    story: string;
    author: string;
    images: { url: string; key: string; }[]
};

const initialFormData: FormData = {
    id: "",
    title: "",
    category: "",
    story: "",
    author: "",
    images: [{ url: "", key: "" }],
};

const EditPostComponent = ({ blog }: { blog: blogProps }) => {
    // Types for state variables
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formKey, setFormKey] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [images, setImages] = useState<{ url: string; key: string; }[]>([])

    useEffect(() => {
        if (blog) {
            const result = blog[0];
            setFormData(result);
        }
    }, [])

    const handleSubmit = async () => {
        if (images.length) { formData.images = images; }
        console.log("file", formData);
        alert("Blog updated")
    };

    const handleDelete = async (key: string, id: string) => {
        const res = await deleteImage(key, id);
        if (res) {
            alert(res);
        }
    }

    const handleImagesUpload = (res: any) => {
        setImages(res)
        const json = JSON.stringify(res);
        console.log(json);
        alert("Upload Completed");
    }

    const title = images.length ? (
        <>
            <h1 className="my-5 text-xl">Upload Complete</h1>
            <p>Uploaded {images.length} files</p>
        </>) : null;

    const imageList = (
        <>
            {title}
            <ul>
                {
                    images.map(image => (
                        <li key={image.key}>
                            <Link href={image.url} target="_blank">{image.url}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )



    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Edit Article
                    </h1>
                </div>

                {imageList}

                <div className="mt-12 sapce-x-6">
                    <div className="flex flex-row flex-wrap -mx-3">
                        {formData.images?.map(image => (
                            <div key={image.key} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div className="flex flex-row sm:block hover-img relative">
                                    <div className="w-full flex justify-end absolute h-7">
                                        <button
                                            className="w-1/5 flex justify-center items-center bg-red-700 rounded-sm"
                                            onClick={() => handleDelete(image.key, formData.id)}
                                        >
                                            <BsTrash color={"#fff"} size={20} />
                                        </button>
                                    </div>
                                    <Image width={900} height={800}
                                        className="max-w-full w-full h-40 min-h-40 max-h-40 overflow-hidden object-cover mx-auto"
                                        src={image.url} alt="alt title"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Form */}
                    <form key={formKey}>
                        <div className="grid gap-4 lg:gap-6">
                            <div>
                                <label htmlFor="author" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Author Name</label>
                                <input type="text" name="author" id="author" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            author: e.target.value
                                        })
                                    }}
                                    value={formData.author}
                                />
                            </div>
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Article Title</label>
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

                            {/* Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <label htmlFor="blog-image" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Add New Images</label>
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
                                    <label htmlFor="category" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Article Category</label>
                                    <input type="text" name="category" id="category" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                category: e.target.value
                                            })
                                        }}
                                        value={formData.category}
                                    />
                                </div>
                            </div>
                            {/* End Grid */}

                            <div>
                                <label htmlFor="story" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Story</label>
                                <textarea id="story" wrap="hard" name="story" rows={20} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            story: e.target.value
                                        })
                                    }}
                                    value={formData.story}
                                ></textarea>
                            </div>

                        </div>
                        {/* End Grid */}

                        <div className="mt-6 grid">
                            <button type="button"
                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                onClick={handleSubmit}>Update Article
                            </button>
                        </div>
                    </form>
                    {/* End Form */}
                    <Modal isOpen={isModalOpen} message="Article created successfully" onClose={() => setIsModalOpen(false)} />
                </div>
            </div>
        </div>
    );
}

export default EditPostComponent;