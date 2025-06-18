import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';

export async function GET() {
    const db = await dbConnect();

    const count = await Blog.countDocuments();

    return Response.json({
        message: 'hello',
        count,
    });
}
