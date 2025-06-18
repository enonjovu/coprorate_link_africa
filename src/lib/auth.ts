// src/lib/auth.ts
import { getServerSession } from 'next-auth';
import { options as authOptions } from '@/app/api/auth/[...nextauth]/options';

export async function getCurrentAuthUser() {
    return await getServerSession(authOptions);
}
