import { BlogDocument } from '@/lib/document-types';
import Image from 'next/image';
import { BsPencil, BsTrash } from 'react-icons/bs';
import DeleteBlogButton from './DeleteBlogButton';
import { trimText } from '@/lib/helpers';

export default function BlogCard({ blog }: { blog: BlogDocument }) {
    return (
        <div
            key={blog.id}
            className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0"
        >
            <div className="hover-img flex flex-row sm:block">
                <a href={`/news/single/${blog.id}`}>
                    <Image
                        width={900}
                        height={800}
                        className="mx-auto h-40 max-h-40 min-h-40 w-full max-w-full overflow-hidden object-cover"
                        src={blog.images[0].url}
                        alt="alt title"
                    />
                </a>
                <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                    <h3 className="mb-2 text-lg font-bold leading-tight">
                        <a href={`/news/single/${blog.id}`} className="text-gray-800 dark:text-gray-100">
                            {blog.title}
                        </a>
                    </h3>
                    <p className="mb-1 hidden leading-tight text-gray-600 dark:text-gray-300 md:block">
                        {trimText(blog.story)}
                    </p>
                    <a href={`/news/category/${blog.category}`} className="text-gray-500 dark:text-gray-300">
                        <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
                        {blog.category.toUpperCase()}
                    </a>
                </div>
                <div className="roundeg-lg flex h-16 w-full items-center justify-center space-x-16 bg-red-700">
                    <a href={`/admin/news/edit/${blog.id}`} className="rounded-lg border-[1px] border-white p-2">
                        <BsPencil size={20} color={'#fff'} />
                    </a>

                    <DeleteBlogButton id={blog.id} />
                </div>
            </div>
        </div>
    );
}
