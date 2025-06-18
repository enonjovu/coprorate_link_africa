import dbConnect from '@/lib/db';
import Advert from '@/models/Advert';
import { utapi } from '@/utils/utapicomponent';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function DELETE(req: Request, res: Response) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            // Handle the case where id is missing or null
            return NextResponse.json({ error: 'Missing blog ID' });
        }
        const results = await Advert.find({ _id: id });
        if (results[0]) {
            const advert = results[0];
            for (let i = 0; i < advert.images.length; i++) {
                const image = advert.images[i].key;
                await utapi.deleteFiles(image);
            }
            await Advert.findOneAndDelete({ _id: id });
        }
        // Return the result
        if (results) {
            return NextResponse.json(true);
        }
    } catch (e) {
        console.log('Failed to fetch Data => ', e);
        return NextResponse.json({ error: 'Failed to fetch data' + e });
    }
}
