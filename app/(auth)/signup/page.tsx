'use client';

import AuthFormWrapper from '../_components/AuthFormWrapper';
import SignUpForm from './_components/SignUpForm';

const signup = () => {
    return (
        <AuthFormWrapper
            heading={
                <>
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
                </>
            }
            form={<SignUpForm />}
        />
    );
};

export default signup;
