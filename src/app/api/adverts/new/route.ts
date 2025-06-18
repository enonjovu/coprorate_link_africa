import dbConnect from '@/lib/db';
import Advert from '@/models/Advert';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { images, variant = 'normal', link = null } = await req.json();

    try {
        await dbConnect();

        const date = Date.now();

        const newAd = await Advert.create({ images, variant, date, link });

        if (newAd) {
            return NextResponse.json({
                status: 'true',
                message: 'Advert created successfully',
            });
        }
    } catch (err) {
        console.error(`Failed to post Advert ${err}`);
        return NextResponse.json({
            status: 'error',
            message: 'Something went wrong',
        });
    }
}
