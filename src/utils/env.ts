import { z } from 'zod';
import tryParseEnv from './try-parse-env';

const EnvSchema = z.object({
    MONGODB_URI: z.string(),
    ROOT_LINK: z.string().url(),
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
    UPLOADTHING_APP_ID: z.string(),
    UPLOADTHING_SECRET: z.string(),
    NODE_ENV: z.enum(['development', 'production', 'test']),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

tryParseEnv(EnvSchema, process.env);

export default EnvSchema.parse(process.env);
