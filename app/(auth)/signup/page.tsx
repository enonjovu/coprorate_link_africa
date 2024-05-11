'use client';

import LoginWithGoogleButton from '../_components/LoginWithGoogleButton';
import SignUpForm from './_components/SignUpForm';

const signup = () => {
    return (
        <main className="mx-auto w-full max-w-md p-6">
            <div className="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign Up</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Already have an account?
                            <a
                                className="font-medium text-red-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="/signin"
                            >
                                Sign In here
                            </a>
                        </p>
                    </div>

                    <div className="mt-5">
                        <LoginWithGoogleButton />

                        <div className="flex items-center py-3 text-xs uppercase text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-gray-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                            Or
                        </div>
                        {/* Form */}
                        <SignUpForm />
                        {/* End Form */}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default signup;
