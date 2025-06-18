'use client';

import { Button, Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { FormEvent, useState } from 'react';

import { Field, Fieldset, Input, Label, Legend } from '@headlessui/react';
import clsx from 'clsx';
import PrimaryButton from '../_components/Button/PrimaryButton';
import { HandleCreateCategory } from './actions';
import toast from 'react-hot-toast';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none disabled:pointer-events-none disabled:bg-opacity-50 data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
        >
            Create
        </Button>
    );
}
export default function CreateCategoryDiaolog() {
    let [isOpen, setIsOpen] = useState(false);
    let [name, setName] = useState('');

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    const handleCreate = async (e: FormEvent) => {
        e.preventDefault();

        const response = await HandleCreateCategory(name);

        if (response.ok) {
            toast('category create', { duration: 5000 });
            setName('');
            close();
        } else {
            toast('failed to create', { duration: 5000 });
        }
    };

    return (
        <>
            <PrimaryButton onClick={open}>Create Category</PrimaryButton>

            <Transition appear show={isOpen}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-md rounded-xl bg-gray-900 p-8">
                                    <form onSubmit={handleCreate}>
                                        <Fieldset className="space-y-6 rounded-xl bg-gray-900">
                                            <Legend className="text-base/7 font-semibold text-white">
                                                Create category
                                            </Legend>
                                            <Field>
                                                <Label className="text-sm/6 font-medium text-white">name</Label>
                                                <Input
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    name="name"
                                                    className={clsx(
                                                        'mt-3 block w-full rounded-lg border-none bg-gray-700 px-3 py-1.5 text-sm/6 text-white',
                                                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                                                    )}
                                                />
                                            </Field>
                                        </Fieldset>
                                        <div className="mt-4 space-x-4">
                                            <Button
                                                type="button"
                                                className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                                onClick={close}
                                            >
                                                Cancel
                                            </Button>
                                            <SubmitButton />
                                        </div>
                                    </form>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
