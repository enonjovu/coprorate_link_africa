'use client';
import React, { useEffect, useState } from 'react';
import Modal from '@/app/(pages)/(admin)/components/Modal';
import { BsPlusCircle } from 'react-icons/bs';
import { fetchCompanies, postTender } from '@/app/action';

type directoryProps = {
    _id: string;
    name: string;
    phone: string;
    email: string;
    website: string;
    address: string;
    lat: number;
    lon: number;
    description: string;
    logo: { url: string; key: string }[];
}[];

// Initial state with types
type FormData = {
    title: string;
    company: string;
    category: string;
    description: string;
    requirements: string[];
    images: { url: string; key: string }[];
};

const initialFormData: FormData = {
    title: '',
    company: '',
    category: '',
    description: '',
    requirements: [],
    images: [{ url: '', key: '' }],
};

const NewTender = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formKey, setFormKey] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [requirements, setRequirements] = useState<string[]>([]);
    const [newRequirement, setNewRequirement] = useState('');
    const [companies, setCompanies] = useState<directoryProps>([]);
    const [selectedCompany, setSelectedCompany] = useState('');

    useEffect(() => {
        async function fetchData() {
            const companieList = await fetchCompanies();
            setCompanies(companieList);
            console.log('Companies => ', companies);
        }
        fetchData();
    }, []);

    const addRequirement = () => {
        setRequirements((prevRequirements) => [...prevRequirements, newRequirement]);
        setNewRequirement(''); // Clear the input field
    };

    const handleSubmit = async () => {
        formData.requirements = requirements;
        formData.company = selectedCompany;
        console.log('file', formData);
        const response = await postTender(formData);
        console.log('Response => ', response);
        if (response.status === 'true') {
            setIsModalOpen(true); // Open the modal
            setFormKey((prevKey) => prevKey + 1);
            setFormData(initialFormData);
        }
    };

    return (
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">Create new tender</h1>
                </div>

                <div className="mt-12">
                    {/* Form */}
                    <form key={formKey}>
                        <div className="grid gap-4 lg:gap-6">
                            <div>
                                <label
                                    htmlFor="company"
                                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    Company
                                </label>
                                <select
                                    id="company"
                                    className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                    value={selectedCompany}
                                    onChange={(e) => setSelectedCompany(e.target.value)}
                                >
                                    {companies.map((company) => (
                                        <option
                                            className="bg-white font-bold text-black"
                                            key={company._id}
                                            value={company._id}
                                        >
                                            {company.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="title"
                                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    Tender Title
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

                            <div>
                                <label
                                    htmlFor="requirements"
                                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    Tender Requirements
                                </label>
                                <div className="flex flex-row justify-between">
                                    <input
                                        type="text"
                                        name="requirements"
                                        id="requirements"
                                        className="inline w-[95%] max-w-[90%] rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        placeholder="Enter requirement"
                                        value={newRequirement}
                                        onChange={(e) => setNewRequirement(e.target.value)}
                                    />
                                    <button type="button" className="w-[5%] max-w-[5%]" onClick={addRequirement}>
                                        <BsPlusCircle color={'blue'} size={30} />{' '}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="description"
                                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    Tender Description
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
                                className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                onClick={handleSubmit}
                            >
                                Post Tender
                            </button>
                        </div>
                    </form>
                    {/* End Form */}
                    <Modal
                        isOpen={isModalOpen}
                        message="Tender created successfully"
                        onClose={() => setIsModalOpen(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default NewTender;
