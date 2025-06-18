import AuthFormWrapper from '../_components/AuthFormWrapper';
import SignInForm from './_components/SiginInForm';

const SignUpOption = () => {
    return (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Don't have an account yet?
            <a
                className="pl-2 font-medium text-red-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/signup"
            >
                Sign up here
            </a>
        </p>
    );
};

const SignIn = () => {
    return (
        <AuthFormWrapper
            heading={<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>}
            form={<SignInForm />}
            withoutAltAuth
        />
    );
};

export default SignIn;
