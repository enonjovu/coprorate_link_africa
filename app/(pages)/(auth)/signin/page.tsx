'use client';

import AuthFormWrapper from '../_components/AuthFormWrapper';
import LoginWithGoogleButton from '../_components/LoginWithGoogleButton';
import SignInForm from './_components/SiginInForm';

const SignIn = () => {
    return (
        <AuthFormWrapper
            heading={
                <>
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Don't have an account yet?
                        <a
                            className="pl-2 font-medium text-red-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="/signup"
                        >
                            Sign up here
                        </a>
                    </p>
                </>
            }
            form={<SignInForm />}
        />
    );
};

export default SignIn;
