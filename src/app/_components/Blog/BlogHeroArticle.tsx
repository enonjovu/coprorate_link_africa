import { BlogDocument } from '@/lib/document-types';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogHeroArticle({ blog }: { blog: BlogDocument }) {
    return (
        <article className="h-auto w-full max-w-full flex-shrink overflow-y-hidden sm:w-1/2 lg:max-h-[65vh]">
            <Link href={`/news/single/${blog.id}`}>
                <div className="hover-img relative h-full max-h-[230px] w-full overflow-hidden">
                    <Image
                        className="h-full w-full object-cover"
                        src={blog.images[0].url}
                        alt={blog.title}
                        width={600}
                        height={400}
                    />
                    <div className="absolute bottom-0 flex h-full w-full flex-col justify-end bg-[#00000075] px-4 pb-4 pt-7">
                        <h2 className="mb-1 text-lg font-bold capitalize leading-tight text-white">{blog.title}</h2>
                        <div className="pt-1">
                            <div className="text-gray-100">
                                <div className="mr-2 inline-block h-3 border-l-2 border-red-600 text-gray-100"></div>
                                {blog.category?.toUpperCase()}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}
