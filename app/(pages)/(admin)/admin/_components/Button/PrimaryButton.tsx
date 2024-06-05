import React from 'react';

export default function PrimaryButton(props: React.ComponentProps<'button'>) {
    return (
        <button
            {...props}
            className={`rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[hover]:bg-red-500 data-[focus]:outline-1 data-[focus]:outline-white ${props.className ?? ''}`}
        >
            {props.children}
        </button>
    );
}
