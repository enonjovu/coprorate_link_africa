'use client';
import { searchStories } from '@/app/action';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type blogProps = {
    id: string;
    image: {
        url: string;
        key: string;
    };
    story: string;
    title: string;
    category: string;
}[];

const Results: React.FC = ({ params }: Params) => {
    const searchQuery: string = params.searchQuery;
    const [searchResults, setSearchResults] = useState<blogProps>([]);

    useEffect(() => {
        async function fetchData() {
            const results = await searchStories(searchQuery);
            setSearchResults(results);
        }

        if (searchQuery) {
            fetchData();
        }
    }, [searchQuery]);

    return (
        <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                {/* post */}
                <div className="w-full max-w-full flex-shrink overflow-hidden lg:w-2/3">
                    <div className="w-full py-3">
                        <h2 className="text-2xl font-bold text-gray-800">
                            <span className="mr-2 inline-block h-5 border-l-2 border-red-600"></span>
                            Search results for: {searchQuery}
                        </h2>
                    </div>

                    <div className="-mx-3 flex flex-row flex-wrap">
                        {searchResults?.map((blog) => (
                            <div
                                key={blog.id}
                                className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0"
                            >
                                <div className="hover-img flex flex-row sm:block">
                                    <a href={`/news/single/${blog.id}`}>
                                        <Image
                                            width={900}
                                            height={800}
                                            className="mx-auto h-full max-h-40 w-full max-w-full overflow-hidden object-cover"
                                            src={blog.image.url}
                                            alt="alt title"
                                        />
                                    </a>
                                    <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                        <h3 className="mb-2 text-lg font-bold leading-tight">
                                            <a href={`/news/single/${blog.id}`} className="text-gray-800">
                                                {blog.title}
                                            </a>
                                        </h3>
                                        <p className="mb-1 hidden leading-tight text-gray-600 md:block">{blog.story}</p>
                                        <a href={`/news/category/${blog.category}`} className="text-gray-500">
                                            <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
                                            {blog.category.toUpperCase()}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;
