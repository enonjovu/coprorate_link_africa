import Blog from '@/models/Blog';
import dbConnect from '@/lib/db';
import { AdvertDocument, BlogDocument } from '@/lib/document-types';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import AdvertRepository from '@/app/_db/repositories/AdvertRepository';

function AdvertCarousel(props: { adverts: AdvertDocument[] }) {
    return (
        <Carousel className="h-64 md:h-[26rem] lg:h-full" slideInterval={5000}>
            {props.adverts.map((advert) => (
                <Image width={600} height={400} key={advert.id} src={advert.images[0].url} alt="..." />
            ))}
        </Carousel>
    );
}

function BlogHeroArticle({ blog }: { blog: BlogDocument }) {
    return (
        <article className="overflow-hidden rounded-md">
            <a href={`/news/single/${blog.id}`}>
                <div className="hover-img relative h-full max-h-[230px] w-full overflow-hidden">
                    <Image
                        className="h-full w-full object-cover"
                        src={blog.images[0].url}
                        alt={blog.image_alt}
                        width={600}
                        height={400}
                    />
                    <div className="absolute bottom-0 flex h-full w-full flex-col justify-end bg-[#00000075] px-4 pb-4 pt-7">
                        <h2 className="mb-1 text-lg font-bold capitalize leading-tight text-white">{blog.title}</h2>
                        <div className="pt-1">
                            <div className="text-gray-100">
                                <div className="mr-2 inline-block h-3 border-l-2 border-red-600 text-gray-100"></div>
                                {blog.category}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </article>
    );
}

export default async function HomePageHeroSection() {
    await dbConnect();

    const blogs = await Blog.find({}).limit(4).sort({ createdAt: -1, date: -1 });

    let adverts = await AdvertRepository.get({ options: { variant: 'normal' }, limit: 4 });

    return (
        <div className="bg-white py-6">
            <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2 ">
                <div className="grid gap-2 lg:grid-cols-2">
                    <AdvertCarousel adverts={adverts} />

                    <div className="grid h-full w-full gap-2 md:grid-cols-2 md:grid-rows-2">
                        {blogs.map((p) => (
                            <BlogHeroArticle blog={p} key={p.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
