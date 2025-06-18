import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Transition,
} from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useState } from 'react';

type CategoryType = { name: string; id: string };

export default function SelectCategoryCombobox(props: {
    data: CategoryType[];
    onChange?: (data: CategoryType) => void;
    value?: CategoryType;
}) {
    const [query, setQuery] = useState('');

    const filteredCategory =
        query === ''
            ? props.data
            : props.data.filter((category) => {
                  return category.name.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <Combobox value={props.value} onChange={props.onChange}>
            <div className="relative">
                <ComboboxInput
                    className={clsx(
                        'w-full rounded-lg border-none bg-gray-900 py-1.5 pl-3 pr-8 text-sm/6 text-white',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                    )}
                    displayValue={(category: CategoryType) => category?.name}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                    <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
                </ComboboxButton>
            </div>
            <Transition
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
            >
                <ComboboxOptions
                    anchor="bottom"
                    className="w-[var(--input-width)] rounded-xl border border-white/5 bg-gray-900 p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
                >
                    {filteredCategory.map((category) => (
                        <ComboboxOption
                            key={category.id}
                            value={category}
                            className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
                        >
                            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                            <div className="text-sm/6 text-white">{category.name}</div>
                        </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </Transition>
        </Combobox>
    );
}
