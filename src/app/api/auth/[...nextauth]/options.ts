import type { NextAuthOptions } from 'next-auth';
// import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials';

import { JWT } from 'next-auth/jwt';
import { getUser } from '@/lib/services/AuthServices';
import env from '@/utils/env';

export const options: NextAuthOptions = {
    secret: env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/signin',
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {
                    label: 'Email:',
                    min: 1,
                    type: 'email',
                    placeholder: 'Email',
                },
                password: { label: 'Password', type: 'password', min: 1 },
            },
            async authorize(credentials) {
                try {
                    const user = await getUser({
                        email: credentials?.email ?? '',
                        password: credentials?.password ?? '',
                    });

                    return user;
                } catch (err) {
                    throw err;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: { token: JWT; user: any }) {
            if (user) {
                token.name = user.name;
                token.email = user.email;
                token.id = user._id;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                if (session.user) {
                    session.user.email = token.email!;
                    session.user.name = token.name!;
                    session.user.role = token.role;
                }
            }
            return session;
        },
    },
};
