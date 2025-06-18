'use client';

import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

export default function ToastWrapper(props: PropsWithChildren) {
    return (
        <>
            <Toaster />
            {props.children}
        </>
    );
}
