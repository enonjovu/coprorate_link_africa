import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function GET(req: Request, res: Response) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const pageNo = searchParams.get('page');
        const page = pageNo ? parseInt(pageNo) : 1;
        // Fetch the data
        const results = await Blog.find({})
            .sort({ createdAt: -1, date: -1 })
            .skip(12 * (page - 1))
            .limit(12);

        const convertedBlogs = [];

        const trimStory = async (story: String) => {
            const words = story.split(' ');
            const trimmedWords = words.slice(0, 8);
            const trimmedParagraph = trimmedWords.join(' ');
            return trimmedParagraph;
        };

        if (results.length > 0) {
            // Loop through each blog
            for (const blog of results) {
                // Convert image for each blog
                const story = await trimStory(blog.story);
                // Create an object for each blog with converted image
                const convertedBlog = {
                    id: blog._id,
                    title: blog.title,
                    story: story,
                    category: blog.category,
                    image: blog.images[0],
                };

                // Add the converted blog to the array
                convertedBlogs.push(convertedBlog);
            }
        }

        // Return the result
        return NextResponse.json(convertedBlogs);
    } catch (e) {
        console.log('Failed to fetch Data => ', e);
        return NextResponse.json({ error: 'Failed to fetch data' + e });
    }
}
