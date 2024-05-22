'use server';

import { RegisterUserAccount } from '@/lib/services/AuthServices';
import { RegistrationSchema } from '@/lib/validation-schema/AuthValidationSchema';
import { z } from 'zod';

type RegistrationParameters = z.infer<typeof RegistrationSchema>;

export async function handleRegisterUser(params: Partial<RegistrationParameters>) {
    const validatedFields = RegistrationSchema.safeParse(params);

    if (!validatedFields.success) {
        return {
            data: {},
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        const newUser = await RegisterUserAccount({
            name: params.name ?? '',
            email: params.email ?? '',
            password: params.password ?? '',
        });

        return {
            errors: {},
            data: newUser,
        };
    } catch (err) {
        return {
            data: {},
            errors: {
                email: [err?.message ?? 'Failed to Login'],
                name: [],
                password: [],
                password_confirmation: [],
            },
        };
    }
}
