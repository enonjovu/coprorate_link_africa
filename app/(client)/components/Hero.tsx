import Slider from './Slider';
import { fetchAds, fetchAllAds, fetchTopBlogs } from '../../action';
import Image from 'next/image';
import Link from 'next/link';
import Ads from './Advertisment';

const Hero = async () => {
    const blogs = await fetchTopBlogs();
    console.log(blogs);
    const adverts = await fetchAllAds();
    return (
        <div className="bg-white py-6">
            <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
                {/* big grid 1 */}
                <div className="flex flex-row flex-wrap">
                    {/*Start left cover*/}
                    <div className="h-auto w-full max-w-full flex-shrink overflow-hidden pb-1 lg:w-1/2 lg:pb-0 lg:pr-1">
                        <div className="hover-img relative h-full max-h-[450px] w-full overflow-hidden">
                            <Ads ads={adverts} />
                        </div>
                    </div>

                    {/*Start box news*/}
                    <div className="h-full w-full max-w-full flex-shrink lg:w-1/2">
                        <div className="box-one flex h-full w-full flex-row flex-wrap">
                            {blogs.length
                                ? blogs.map((blog) => (
                                      <article
                                          key={blog.id}
                                          className="h-auto w-full max-w-full flex-shrink overflow-y-hidden sm:w-1/2 lg:max-h-[65vh]"
                                      >
                                          <Link href={`/news/single/${blog.id}`}>
                                              <div className="hover-img relative h-full max-h-[222px] w-full overflow-hidden">
                                                  <img
                                                      className="h-full w-full object-cover"
                                                      src={blog.image.url}
                                                      alt="Image description"
                                                  />
                                                  <div className="absolute bottom-0 flex h-full w-full flex-col justify-end bg-[#00000075] px-4 pb-4 pt-7">
                                                      <h2 className="mb-1 text-lg font-bold capitalize leading-tight text-white">
                                                          {blog.title}
                                                      </h2>
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
                                  ))
                                : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
