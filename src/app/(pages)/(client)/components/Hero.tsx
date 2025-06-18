import AdvertHeroCarousel from '@/app/_components/Advert/AdvertHeroCarousel';
import BlogHeroArticle from '@/app/_components/Blog/BlogHeroArticle';
import Blog from '@/models/Blog';
import dbConnect from '@/lib/db';
import { AdvertDocument } from '@/lib/document-types';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import AdvertRepository from '@/app/_db/repositories/AdvertRepository';

const Hero = async () => {
    await dbConnect();

    const blogs = await Blog.find({}).limit(4).sort({ createdAt: -1, date: -1 });

    let adverts = await AdvertRepository.get({ options: { variant: 'normal' }, limit: 4 });

    // const res = await fetch(rootUrl + '/api/adverts', {
    //     cache: 'no-store',
    // });

    // const adverts = (await res.json()) as AdvertDocument[];

    return (
        <div className="bg-white py-6">
            <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
                {/* big grid 1 */}
                <div className="flex flex-row flex-wrap">
                    {/*Start left cover*/}
                    <div className="h-full w-full max-w-full flex-shrink overflow-hidden pb-1 lg:max-h-[450px] lg:w-1/2 lg:pb-0 lg:pr-1">
                        <div className="hover-img relative h-full w-full overflow-hidden">
                            <Carousel className="h-64 w-full md:h-[26rem] lg:h-full" slideInterval={5000}>
                                {adverts.map((advert) => (
                                    <Image
                                        width={720}
                                        height={480}
                                        key={advert.id}
                                        src={advert.images[0].url}
                                        alt="..."
                                    />
                                ))}
                            </Carousel>
                        </div>
                    </div>

                    {/*Start box news*/}
                    <div className="h-full w-full max-w-full flex-shrink lg:max-h-[450px] lg:w-1/2">
                        <div className="box-one flex h-full w-full flex-row flex-wrap">
                            {blogs.length ? blogs.map((blog) => <BlogHeroArticle key={blog.id} blog={blog} />) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
