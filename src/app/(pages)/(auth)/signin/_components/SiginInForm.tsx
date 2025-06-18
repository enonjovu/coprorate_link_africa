'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { FormError, FormInput, FormLabel } from '../../_components/AuthFormInput';

const SignInForm = () => {
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
            const res = await signIn('credentials', { email, password, redirect: false });

            if (res?.error) {
                setRequestError(res.error);
                setIsLoading(false);
                return;
            }

            if (res?.ok) {
                setEmail('');
                setPassword('');
                setIsLoading(false);

                return router.push('/admin');
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
                    <FormError className="text-center">{requestError}</FormError>
                </div>
            ) : null}

            {/* Form */}
            <form onSubmit={handleSignIn}>
                <div className="grid gap-y-4">
                    {/* Form Group */}
                    <div>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <FormInput
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required
                        />
                    </div>
                    {/* End Form Group */}

                    {/* Form Group */}
                    <div>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormInput
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            required
                        />
                    </div>
                    {/* End Form Group */}

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

export default SignInForm;
