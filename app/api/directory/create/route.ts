import dbConnect from '@/lib/db';
import Directory from '@/models/Directory';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const date = Date.now();
    const { name, email, description, phone, address, website, lat, lon, logo } = await req.json();
    try {
        await dbConnect();
        const newDirectory = await Directory.create({
            name,
            email,
            description,
            phone,
            address,
            website,
            lat,
            lon,
            logo,
            date: date,
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
