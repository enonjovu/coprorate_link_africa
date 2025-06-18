import dbConnect from '@/lib/db';
import { getDirectoryById } from '@/lib/repositories/DirectoryRepository';
import Directory from '@/models/Directory';
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
        const directory = await getDirectoryById(id);

        if (directory) {
            for (let i = 0; i < directory.logo.length; i++) {
                const image = directory.logo[i].key;
                await utapi.deleteFiles(image);
            }
            await Directory.findOneAndDelete({ _id: id });
        }

        // Return the result
        return NextResponse.json(true);
    } catch (e) {
        console.log('Failed to fetch Data => ', e);
        return NextResponse.json({ error: 'Failed to fetch data' + e });
    }
}
