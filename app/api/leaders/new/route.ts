import dbConnect from '@/lib/db';
import Leader from '@/models/Leader';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const date = Date.now();
    const { name, description } = await req.json();
    try {
        await dbConnect();
        const newLeader = await Leader.create({ name, description });

        if (newLeader) {
            return NextResponse.json({
                status: 'true',
                message: 'Leader created successfully',
            });
        }
    } catch (err) {
        console.log(`Failed to post Leader ${err}`);
        return NextResponse.json({
            status: 'error',
            message: 'Something went wrong',
        });
    }
}
