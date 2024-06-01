'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-red-600 lg:text-9xl dark:text-red-500">
                            Error
                        </h1>
                        <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl ">
                            OOPS Something's went wrong
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
