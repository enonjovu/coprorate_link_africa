import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export function FormCheckbox() {
    return (
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
                <label htmlFor="remember-me" className="text-sm text-black dark:text-white">
                    Remember me
                </label>
            </div>
        </div>
    );
}
export function FormError(props: React.ComponentProps<'p'>) {
    return <p className={`mt-2 text-sm text-red-600 ${props.className}`}>{props.children}</p>;
}

export function FormLabel(props: React.ComponentProps<'label'>) {
    return (
        <label {...props} className={`mb-2 block text-sm text-black dark:text-white ${props.className}`}>
            {props.children}
        </label>
    );
}

export function FormInput(props: React.ComponentProps<'input'> & { hasError?: boolean }) {
    return (
        <div className="relative">
            <input
                {...props}
                type={props.type ?? 'text'}
                className={`block w-full rounded-lg border-gray-200 px-4 py-3 text-sm text-black focus:border-red-500 focus:ring-red-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600 ${props.className}`}
            />
            {props.hasError && (
                <div className="pointer-events-none absolute inset-y-0 end-0 hidden items-center pe-3">
                    <ExclamationCircleIcon className="size-6 text-red-600" />
                </div>
            )}
        </div>
    );
}

export default function AuthFormInput(props: React.ComponentProps<'input'> & { icon?: React.ReactNode }) {
    return (
        <div className="relative">
            <input
                {...props}
                type={props.type ?? 'text'}
                className={`block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:ring-red-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600 ${props.className}`}
            />
            {props.icon && (
                <div className="pointer-events-none absolute inset-y-0 end-0 hidden items-center pe-3">
                    {props.icon}
                </div>
            )}
        </div>
    );
}
