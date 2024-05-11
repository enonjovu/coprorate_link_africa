'use client';

import LoginWithGoogleButton from './LoginWithGoogleButton';

export default function AuthFormWrapper(props: { heading: React.ReactNode; form: React.ReactNode }) {
    // const handleSignInWithGoogle = async () => {
    //   const res = await signInWithGoogle()
    //   if (res) {
    //     setEmail('')
    //     setPassword('')
    //     router.push('/')
    //   }
    // }

    return (
        <main className="mx-auto w-full max-w-md p-6">
            <div className="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="p-4 sm:p-7">
                    <div className="text-center">{props.heading}</div>

                    <div className="mt-5">
                        <LoginWithGoogleButton />

                        <div className="flex items-center py-3 text-xs uppercase text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-gray-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                            Or
                        </div>

                        {props.form}
                    </div>
                </div>
            </div>
        </main>
    );
}
