import EditPostComponent from '@/app/(admin)/components/editNews';
import { fetchSingleBlogById } from '@/app/action';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

const EditPost = async ({ params }: { params: Params }) => {
    const id = params.id;
    const blog = await fetchSingleBlogById(id);

    return <EditPostComponent blog={blog} />;
};

export default EditPost;
