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

    return <EditNewsForm blog={blog} />;
};

export default EditPost;
