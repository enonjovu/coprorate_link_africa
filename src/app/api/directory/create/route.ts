import dbConnect from '@/lib/db';
import Directory from '@/models/Directory';
import { NextResponse } from 'next/server';
import { createDirectory } from '@/lib/repositories/DirectoryRepository';

export async function POST(req: Request) {
    const { name, email, description, phone, address, website, lat, lon, logo, iframe, category } = await req.json();

    try {
        await dbConnect();

        const newDirectory = await createDirectory({
            name,
            email,
            description,
            phone,
            address,
            website,
            lat,
            lon,
            logo,
            iframe,
            category,
        });

        if (newDirectory) {
            return NextResponse.json({
                status: 'true',
                message: 'Directory created successfully',
            });
        }
    } catch (err) {
        console.log(`Failed to post Directory ${err}`);
        return NextResponse.json({
            status: 'error',
            message: 'Something went wrong',
        });
    }
}
