'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signUp } from '@/app/action';
import LoginWithGoogleButton from '../../_components/LoginWithGoogleButton';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSignUp = async () => {
        if (isLoading) {
            return;
        }

        setIsLoading(true);
        try {
            const res = await signUp({ email, password });

            setEmail('');
            setPassword('');

            setIsLoading(false);

            if (res) {
                router.push('/signin');
            }
        } catch (e) {
            console.error(e);
        }

        setIsLoading(false);
    };

    // const handleSignInWithGoogle = async () => {
    //   const res = await signInWithGoogle()
    //   console.log(res)
    //   setEmail('')
    //   setPassword('')
    //   router.push('/')

    // }

    return (
        <form>
            <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                    <label htmlFor="email" className="mb-2 block text-sm dark:text-white">
                        Email address
                    </label>
                    <div className="relative">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
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
                    <p className="mt-2 hidden text-xs text-red-600" id="email-error">
                        Please include a valid email address so we can get back to you
                    </p>
                </div>
                {/* End Form Group */}

                {/* Form Group */}
                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="mb-2 block text-sm dark:text-white">
                            Password
                        </label>
                        <a
                            className="text-sm font-medium text-red-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="../examples/html/recover-account.html"
                        >
                            Forgot password?
                        </a>
                    </div>
                    <div className="relative">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
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
                    <p className="mt-2 hidden text-xs text-red-600" id="password-error">
                        8+ characters required
                    </p>
                </div>
                {/* End Form Group */}

                <button
                    disabled={isLoading}
                    type="button"
                    onClick={() => {
                        handleSignUp();
                    }}
                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                    Sign Up
                </button>
            </div>
        </form>
    );
};

export default SignUpForm;
