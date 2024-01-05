"use client"
import { searchStories } from '@/app/action';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type blogProps = {
    id:string,
    image:{
      url:string,
      key:string,
    },
    story:string,
    title:string,
    category:string
}[]

const Results: React.FC = ({params}:Params) => {
  const searchQuery : string = params.searchQuery;
  const [searchResults, setSearchResults] = useState<blogProps>([]);
  

  useEffect(() => {
    async function fetchData() {
      const results = await searchStories(searchQuery)
      setSearchResults(results);
    }

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  return (
    <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
              {/* post */}
              <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                  <div className="w-full py-3">
                      <h2 className="text-gray-800 text-2xl font-bold">
                          <span className="inline-block h-5 border-l-2 border-red-600 mr-2"></span>
                          Search results for: {searchQuery}
                      </h2>
                  </div>
                  
                  <div className="flex flex-row flex-wrap -mx-3">
                      {searchResults?.map(blog=>(
                          <div key={blog.id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                              <div className="flex flex-row sm:block hover-img">
                                  <a href={`/news/single/${blog.id}`}>
                                      <Image width={900} height={800} className="max-w-full w-full h-full max-h-40 overflow-hidden object-cover mx-auto" src={blog.image.url} alt="alt title"/>
                                  </a>
                                  <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                      <h3 className="text-lg font-bold leading-tight mb-2">
                                      <a href={`/news/single/${blog.id}`} className="text-gray-800">{blog.title}</a>
                                      </h3>
                                      <p className="hidden md:block text-gray-600 leading-tight mb-1">{blog.story}</p>
                                      <a href={`/news/category/${blog.category}`} className="text-gray-500"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>{blog.category.toUpperCase()}</a>
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
