import AuthFormWrapper from '../../../_components/AuthFormWrapper';
import AdminLoginForm from './_components/AdminLoginForm';

export default function AuthAdminLoginPage() {
    return (
        <AuthFormWrapper
            heading={<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Login</h1>}
            form={<AdminLoginForm />}
            withoutAltAuth
        />
    );
}
