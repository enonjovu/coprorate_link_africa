'use client';
import '@uploadthing/react/styles.css';
import { BsCalendar, BsClock, BsPencil } from 'react-icons/bs';
import Modal from '@/app/(admin)/components/Modal';
import { updateEvent } from '@/app/action';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaMapMarkerAlt } from 'react-icons/fa';

type singleEventProps = {
    id: string;
    title: string;
    description: string;
    images: { key: string; url: string }[];
    date: string;
    time: string;
    venue: string;
    eventDate: string;
}[];

// Initial state with types
type FormData = {
    id: string;
    title: string;
    description: string;
    time: string;
    venue: string;
    eventDate: string;
    images: { key: string; url: string }[];
};

const initialFormData: FormData = {
    id: '',
    title: '',
    time: '',
    venue: '',
    eventDate: '',
    description: '',
    images: [{ url: '', key: '' }],
};

const EditEventComponent = ({ event }: { event: singleEventProps }) => {
    // Types for state variables
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formKey, setFormKey] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [modalMessage, setModalMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (event) {
            const result = event[0];
            setFormData(result);
        }
    }, []);

    const handleSubmit = async () => {
        const res = await updateEvent(formData, formData.id);
        setModalMessage(res.message);
        setIsModalOpen(true);
        console.log('file', formData);
        router.refresh();
    };

    return (
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">Edit Event</h1>
                </div>
                <Modal isOpen={isModalOpen} message={modalMessage} onClose={() => setIsModalOpen(false)} />
                <div className="sapce-x-6 mt-12">
                    {/* Form */}
                    <form key={formKey}>
                        <div className="grid gap-4 lg:gap-6">
                            <div>
                                <label
                                    htmlFor="title"
                                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    Event Title
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

                            <div className="flex justify-between gap-4 sm:grid-cols-2 lg:gap-6">
                                {/* Time */}
                                <div>
                                    <label
                                        htmlFor="time"
                                        className="mb-2 flex space-x-2 text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        <BsClock size={20} color={'#fff'} /> <p>Time</p>
                                    </label>
                                    <input
                                        type="text"
                                        name="time"
                                        id="time"
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                time: e.target.value.toLocaleLowerCase(),
                                            });
                                        }}
                                        value={formData.time}
                                    />
                                </div>
                                {/* eventDate */}
                                <div>
                                    <label
                                        htmlFor="eventDate"
                                        className="mb-2 flex space-x-2 text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        <BsCalendar size={20} color={'#fff'} /> <p>eventDate</p>
                                    </label>
                                    <input
                                        type="text"
                                        name="eventDate"
                                        id="eventDate"
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                eventDate: e.target.value,
                                            });
                                        }}
                                        value={formData.eventDate}
                                    />
                                </div>

                                {/* Venue */}
                                <div>
                                    <label
                                        htmlFor="venue"
                                        className="mb-2 flex space-x-2 text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        <FaMapMarkerAlt size={20} color={'#fff'} /> <p>Location</p>
                                    </label>
                                    <input
                                        type="text"
                                        name="venue"
                                        id="venue"
                                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                venue: e.target.value,
                                            });
                                        }}
                                        value={formData.venue}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="description"
                                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                                >
                                    Event Description
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
                                className="inline-flex w-full items-center justify-center gap-x-2 space-x-3 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                onClick={handleSubmit}
                            >
                                <p>Edit Event</p>
                                <BsPencil size={20} color={'#fff'} />
                            </button>
                        </div>
                    </form>
                    {/* End Form */}
                </div>
            </div>
        </div>
    );
};

export default EditEventComponent;
