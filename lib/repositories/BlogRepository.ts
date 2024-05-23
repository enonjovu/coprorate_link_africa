import Blog from '@/models/Blog';
import type { PaginatorableParameters } from '../types';
import connectToDatabase from '@/lib/db';
import { DocumentUrlObject } from '../document-types';

export async function getBlogById(id: string) {
    await connectToDatabase();

    const blog = await Blog.findOne({ _id: id });

    return blog;
}

export async function getBlogsRelatedTo(id: string, params: object = {}, options: { limit?: number } = {}) {
    const limit = options.limit ?? 4;

    const result = await Blog.find(params).where('_id').ne(id).sort({ createdAt: -1, date: -1 }).limit(limit);

    return result;
}

export async function getBlogs(params: { category?: string } & PaginatorableParameters) {
    await connectToDatabase();

    const blogParameters: any = {};

    if (params.search) {
        blogParameters['$text'] = { $search: params.search ? params.search : '' };
    }

    if (params.category) {
        blogParameters['category'] = params.category;
    }

    const step = params.step ?? 0;
    const skip = (params.skip ?? 12 * (params.currentPage - 1)) + step;

    const results = await Blog.find(blogParameters)
        .sort({ createdAt: -1, date: -1 })
        .skip(skip)
        .limit(params.limit ?? 12);

    return results;
}

export async function getBlogsByCategory(params: { category: string } & PaginatorableParameters) {
    const results = await getBlogs(params);

    return results;
}

export async function getBlogsCount(params: Record<string, string> = {}) {
    await connectToDatabase();

    const itemsCount = await Blog.countDocuments(params);
    return itemsCount;
}

export async function deleteBlogById(id: string) {
    await connectToDatabase();

    const results = await Blog.findOneAndDelete({ _id: id });
}

export async function createNewBlog(params: {
    title: String;
    story: String;
    category: String;
    images: Array<DocumentUrlObject>;
    author: String;
}) {
    const date = Date.now();
    const { title, story, category, images, author } = params;

    await connectToDatabase();

    const blog = Blog.create({
        title,
        story,
        category,
        images,
        author,
        date,
    });

    return blog;
}

export async function updateBlogByid(
    id: string,
    params: {
        title: String;
        story: String;
        category: String;
        images: String;
        author: String;
    },
) {
    await connectToDatabase();

    const updateData = {
        $set: params,
    };

    const result = await Blog.updateOne({ _id: id }, updateData);
}
