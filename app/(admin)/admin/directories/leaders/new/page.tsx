"use client"
import "@uploadthing/react/styles.css";
import Modal from "@/app/(admin)/components/Modal";
import { postCompany } from "@/app/action";
import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";

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
    logo: { url: string; key: string; }[]
};

const initialFormData: FormData = {
    name: "",
    email: "",
    description: "",
    phone: "",
    address: "",
    website: "",
    lat: "",
    lon: "",
    logo: [{ url: "", key: "" }],
};

const Leaders: React.FC = () => {
    // Types for state variables
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formKey, setFormKey] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [images, setImages] = useState<{ url: string; key: string; }[]>([])

    const handleSubmit = async () => {
        formData.logo = images;
        console.log("file", formData);
        const response = await postCompany(formData)
        console.log("Response => ", response);
        if (response.status === "true") {
            setIsModalOpen(true); // Open the modal
            setFormKey((prevKey) => prevKey + 1);
            setFormData(initialFormData);
        }
    };


    const handleImagesUpload = (res: any) => {
        setImages(res)
        const json = JSON.stringify(res);
        console.log(json);
        alert("Upload Completed");
    }


    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Create a new profile
                    </h1>
                </div>

                <div className="mt-12">
                    {/* Form */}
                    <form key={formKey}>
                        <div className="grid gap-4 lg:gap-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Name</label>
                                <input type="text" name="name" id="name" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            name: e.target.value
                                        })
                                    }}
                                    value={formData.name}
                                />
                            </div>

                            <div>
                                <label htmlFor="" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Profile</label>
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

                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Bibliography</label>
                                <textarea id="description" wrap="hard" name="description" rows={12} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
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
                            {
                                images.length ? (
                                    <button type="button"
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        onClick={handleSubmit}>Save Company
                                    </button>
                                ) : (
                                    <button type="button"
                                        disabled
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg 
                                border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    >Upload Company logo before Posting!
                                    </button>
                                )
                            }

                        </div>
                    </form>
                    {/* End Form */}
                    <Modal isOpen={isModalOpen} message="Directory created successfully" onClose={() => setIsModalOpen(false)} />
                </div>
            </div>
        </div>
    );
}

export default Leaders;