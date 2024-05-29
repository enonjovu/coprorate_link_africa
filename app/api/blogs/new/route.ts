import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { title, story, category, images, author, image_alt } = await req.json();
    try {
        const date = Date.now();

        await dbConnect();

        const newBlog = new Blog({
            title,
            story,
            category,
            images,
            author,
            image_alt: image_alt ?? null,
            date,
        });

        const blog = await newBlog.save();

        if (blog) {
            return NextResponse.json({
                status: 'true',
                message: 'Blog created successfully',
            });
        }
    } catch (err) {
        console.log(`Failed to post Blog ${err}`);
        return NextResponse.json({
            status: 'error',
            message: 'Something went wrong',
        });
    }
}
