"use client"
import "@uploadthing/react/styles.css";
import { BsTrash } from "react-icons/bs";
import Modal from "@/app/(admin)/components/Modal";
import { deleteImage, postBlog, updateBlog } from "@/app/action";
import { UploadButton } from "@/utils/uploadthing";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


type singleEventProps = {
    _id: string,
    title: string,
    description: string,
    images: { key: string, url: string }[],
    date: string
}[]

// Initial state with types
type FormData = {
    _id: string,
    title: string,
    description: string,
    images: { key: string, url: string }[],
};

const initialFormData: FormData = {
    _id: "",
    title: "",
    description: "",
    images: [{ url: "", key: "" }],
};

const EditEventComponent = ({ event }: { event: singleEventProps }) => {
    // Types for state variables
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formKey, setFormKey] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [images, setImages] = useState<{ url: string; key: string; }[]>([])
    const [loading, setLoading] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (event) {
            const result = event[0];
            setFormData(result);
        }
    }, [])

    const handleSubmit = async () => {
        if (images) {
            images.map(image => (
                formData.images.push(image)
            ));
        }
        const res = await updateBlog(formData, formData._id);
        setModalMessage(res.message)
        setIsModalOpen(true);
        console.log("file", formData);
    };

    const handleDelete = async (key: string, id: string) => {
        setLoading(true);
        const res = await deleteImage(key, id);
        if (res) {
            // Remove the deleted image from formData
            setFormData(prevState => ({
                ...prevState,
                images: prevState.images.filter(image => image.key !== key)
            }));
            setLoading(false);
            setModalMessage("Image Deleted successfully")
            setIsModalOpen(true);
        }
        router.push(`/admin/news/edit/${formData._id}`);
    };

    const handleImagesUpload = (res: any) => {
        setImages(res)
        alert("Upload Completed");
    }

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Edit Event
                    </h1>
                </div>
                <Modal isOpen={isModalOpen} message={modalMessage} onClose={() => setIsModalOpen(false)} />
                <div className="mt-12 sapce-x-6">
                    <div className="flex flex-row flex-wrap -mx-3">
                        {formData.images?.map(image => (
                            <div key={image.key} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div className="flex flex-row sm:block hover-img relative">
                                    <div className="w-full flex justify-end absolute h-7">
                                        {
                                            loading ?
                                                <button
                                                    className="w-2/5 text-white flex justify-center items-center bg-red-700 rounded-sm cursor-pointer"
                                                >
                                                    Deleting...
                                                </button>
                                                :
                                                <button
                                                    className="w-1/5 flex justify-center items-center bg-red-700 rounded-sm cursor-pointer"
                                                    onClick={() => handleDelete(image.key, formData._id)}
                                                >
                                                    <BsTrash color={"#fff"} size={20} />
                                                </button>
                                        }
                                    </div>
                                    <Image width={900} height={800} priority
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
                            </div>
                            {/* End Grid */}

                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">description</label>
                                <textarea id="description" wrap="hard" name="description" rows={20} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
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
                                onClick={handleSubmit}>Update Event
                            </button>
                        </div>
                    </form>
                    {/* End Form */}
                </div>
            </div>
        </div>
    );
}

export default EditEventComponent;