import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
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

        // Fetch the data
        const results = await Blog.findOneAndDelete({ _id: id });

        // Return the result
        return NextResponse.json(true);
    } catch (e) {
        console.log('Failed to fetch Data => ', e);
        return NextResponse.json({ error: 'Failed to fetch data' + e });
    }
}
