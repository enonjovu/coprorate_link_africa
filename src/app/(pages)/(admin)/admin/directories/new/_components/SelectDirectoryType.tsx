import { Radio, RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const plans = [{ name: 'Company Profile' }, { name: 'Individual Profile' }];

export default function SelectDirectoryType() {
    const [selected, setSelected] = useState(plans[0]);

    return (
        <div className="w-full px-4">
            <div className="mx-auto w-full max-w-md">
                <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="space-y-2">
                    {plans.map((plan) => (
                        <Radio
                            key={plan.name}
                            value={plan}
                            className="group relative flex cursor-pointer rounded-lg bg-white/5 px-5 py-4 text-white shadow-md transition focus:outline-none data-[checked]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                        >
                            <div className="flex w-full items-center justify-between">
                                <div className="text-sm/6">
                                    <p className="font-semibold text-white">{plan.name}</p>
                                </div>
                                <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
                            </div>
                        </Radio>
                    ))}
                </RadioGroup>
            </div>
        </div>
    );
}
