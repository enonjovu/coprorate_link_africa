import BlogRepository from '@/app/_db/repositories/BlogRepository';
import EditNewsForm from './EditNewsForm';
import { getBlogById } from '@/lib/repositories/BlogRepository';
import { notFound } from 'next/navigation';

type PageProps = {
    params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
};

const EditPost = async ({ params }: PageProps) => {
    const id = params.id;

    const blog = await getBlogById(id);

    if (!blog) {
        return notFound();
    }

    const blogPropeties = BlogRepository.getPropeties(blog);

    return <EditNewsForm blog={blogPropeties} id={id} />;
};

export default EditPost;
