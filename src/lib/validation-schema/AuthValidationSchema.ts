import { z } from 'zod';

export const SignInSchema = z.object({
    email: z
        .string({
            invalid_type_error: 'The Email field is required',
            required_error: 'Provided email is invalid',
        })
        .email(),
    password: z
        .string({
            required_error: 'The password field is required',
        })
        .min(8),
});

export const RegistrationSchema = SignInSchema.extend({
    name: z
        .string({
            required_error: 'The name field is required',
        })
        .min(3)
        .max(100),

    password_confirmation: z.string({
        required_error: 'The password confirmation field is required',
    }),
}).refine((data) => data.password === data.password_confirmation, {
    message: 'Passwords do not match',
    path: ['password'],
});
