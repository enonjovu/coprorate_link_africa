'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

const AdminLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [requestError, setRequestError] = useState('');

    const router = useRouter();

    const handleSignIn = async (e: any) => {
        e.preventDefault();

        if (isLoading) {
            return;
        }

        setRequestError('');
        setIsLoading(true);

        try {
            const res = await signIn('admin-credentials', { email, password, redirect: false });

            if (res?.error) {
                setRequestError(res.error);
                setIsLoading(false);
                return;
            }

            if (res?.ok) {
                setEmail('');
                setPassword('');
                setIsLoading(false);

                return router.push('/');
            }
        } catch (e) {
            console.error(e);
            setIsLoading(false);
        }
        setIsLoading(false);
    };
    return (
        <>
            {/* to show errors if request failed */}
            {requestError ? (
                <div className="w-full py-3">
                    <p className="text-center text-sm text-red-600">{requestError}</p>
                </div>
            ) : null}

            {/* Form */}
            <form onSubmit={handleSignIn}>
                <div className="grid gap-y-4">
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
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <p className="mt-2 hidden text-xs text-red-600" id="email-error">
                            Please include a valid email address so we can get back to you
                        </p>
                    </div>
                    {/* End Form Group */}

                    <div>
                        <label htmlFor="password" className="mb-2 block text-sm dark:text-white">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:ring-red-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                required
                                aria-describedby="password-error"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                        <p className="mt-2 hidden text-xs text-red-600" id="email-error">
                            Please include a valid email address so we can get back to you
                        </p>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center">
                        <div className="flex">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="pointer-events-none mt-0.5 shrink-0 rounded border-gray-200 text-red-600 focus:ring-red-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-red-500 dark:checked:bg-red-500 dark:focus:ring-offset-gray-800"
                            />
                        </div>
                        <div className="ms-3">
                            <label htmlFor="remember-me" className="text-sm dark:text-white">
                                Remember me
                            </label>
                        </div>
                    </div>
                    {/* End Checkbox */}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                        Sign in
                    </button>
                </div>
            </form>
            {/* End Form */}
        </>
    );
};

export default AdminLoginForm;
