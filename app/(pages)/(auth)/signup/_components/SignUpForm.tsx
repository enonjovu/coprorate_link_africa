'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { handleRegisterUser } from '../action';
import { useFormStatus } from 'react-dom';
import AuthFormErrors from '../../_components/AuthFormErrors';

const InitialState = {
    name: [] as string[],
    email: [] as string[],
    password: [] as string[],
    password_confirmation: [] as string[],
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            type="submit"
            className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
            Sign Up
        </button>
    );
}

const SignUpForm = () => {
    const [errors, setErrors] = useState<Record<string, string[]>>(InitialState);
    const router = useRouter();

    const handleSignUp = async (formData: FormData) => {
        const data = {
            name: (formData.get('name') ?? '') as string,
            email: (formData.get('email') ?? '') as string,
            password: (formData.get('password') ?? '') as string,
            password_confirmation: (formData.get('password_confirmation') ?? '') as string,
        };

        const response = await handleRegisterUser(data);

        if (response.errors) {
            setErrors(response?.errors);
            console.log(errors);
            return response;
        }

        if (!!response.data) {
            return router.push('/signin');
        }

        return response;
    };

    return (
        <form action={handleSignUp}>
            <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                    <label htmlFor="name" className="mb-2 block text-sm dark:text-white">
                        Name
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:ring-red-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                            required
                        />
                        <div className="pointer-events-none absolute inset-y-0 end-0 hidden items-center pe-3">
                            <svg
                                className="h-5 w-5 text-red-500"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                aria-hidden="true"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                        </div>
                    </div>

                    <AuthFormErrors errors={errors['name']} />
                </div>
                {/* End Form Group */}

                {/* Form Group */}
                <div>
                    <label htmlFor="email" className="mb-2 block text-sm dark:text-white">
                        Email address
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:ring-red-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                            required
                            aria-describedby="email-error"
                        />
                        <div className="pointer-events-none absolute inset-y-0 end-0  hidden items-center pe-3">
                            <svg
                                className="h-5 w-5 text-red-500"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                aria-hidden="true"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                        </div>
                    </div>
                    <AuthFormErrors errors={errors['email']} />
                </div>
                {/* End Form Group */}

                {/* Form Group */}
                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="mb-2 block text-sm dark:text-white">
                            Password
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:ring-red-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                            required
                            aria-describedby="password-error"
                        />
                        <div className="pointer-events-none absolute inset-y-0 end-0  hidden items-center pe-3">
                            <svg
                                className="h-5 w-5 text-red-500"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                aria-hidden="true"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                        </div>
                    </div>
                    <AuthFormErrors errors={errors['password']} />
                </div>
                {/* End Form Group */}

                {/* Form Group */}
                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="mb-2 block text-sm dark:text-white">
                            Confirm Password
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:ring-red-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                            required
                        />
                        <div className="pointer-events-none absolute inset-y-0 end-0  hidden items-center pe-3">
                            <svg
                                className="h-5 w-5 text-red-500"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                aria-hidden="true"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* End Form Group */}

                <SubmitButton />
            </div>
        </form>
    );
};

export default SignUpForm;
