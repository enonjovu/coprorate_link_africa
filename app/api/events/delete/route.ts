import dbConnect from '@/lib/db';
import Event from '@/models/Event';
import { utapi } from '@/utils/utapicomponent';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function GET(req: Request, res: Response) {
    await dbConnect();
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            // Handle the case where id is missing or null
            return NextResponse.json({ error: 'Missing blog ID' });
        }
        // Fetch the data
        const results = await Event.find({ _id: id });
        if (results[0]) {
            const event = results[0];
            for (let i = 0; i < event.images.length; i++) {
                const image = event.images[i].key;
                await utapi.deleteFiles(image);
            }
            await Event.findOneAndDelete({ _id: id });
        }

        // Return the result
        return NextResponse.json(true);
    } catch (e) {
        console.log('Failed to fetch Data => ', e);
        return NextResponse.json({ error: 'Failed to fetch data' + e });
    }
}
