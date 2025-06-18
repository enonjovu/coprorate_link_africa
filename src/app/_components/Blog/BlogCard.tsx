import Image from 'next/image';
import { trimText } from '@/lib/helpers';

export default function BlogCard({
    blog,
    image,
}: {
    blog: any;
    image?: {
        width: number;
        height: number;
    };
}) {
    return (
        <div className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0">
            <div className="hover-img flex flex-col sm:block">
                <a href={`/news/single/${blog.id}`}>
                    <Image
                        width={image?.width ?? 900}
                        height={image?.height ?? 800}
                        className="mx-auto h-44 max-h-44 min-h-44 w-full max-w-full overflow-hidden object-cover"
                        src={blog?.images[0].url}
                        alt={blog.title}
                    />
                </a>
                <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                    <h3 className="mb-2 text-lg font-bold leading-tight">
                        <a href={`/news/single/${blog.id}`} className="text-gray-800">
                            {blog.title}
                        </a>
                    </h3>
                    <p className="mb-1 hidden leading-tight text-gray-600 md:block">{trimText(blog.story)}...</p>
                    <a href={`/news/category/${blog.category}`} className="text-gray-500">
                        <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
                        {blog.category.toUpperCase()}
                    </a>
                </div>
            </div>
        </div>
    );
}
