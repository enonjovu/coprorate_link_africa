import dbConnect from '@/lib/db';
import Advert from '@/models/Advert';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { images, variant = 'normal' } = await req.json();
    try {
        await dbConnect();

        const newAd = await Advert.create({ images, variant });

        if (newAd) {
            return NextResponse.json({
                status: 'true',
                message: 'Advert created successfully',
            });
        }
    } catch (err) {
        console.log(`Failed to post Advert ${err}`);
        return NextResponse.json({
            status: 'error',
            message: 'Something went wrong',
        });
    }
}
