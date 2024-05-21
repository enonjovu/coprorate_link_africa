import { getAllAdverts } from '@/lib/repositories/AdvertRepository';
import AdvertHeroCarousel from '@/app/_components/Advert/AdvertHeroCarousel';
import BlogHeroArticle from '@/app/_components/Blog/BlogHeroArticle';
import Blog from '@/models/Blog';
import { convertDocumentsToModelObjectCollection } from '@/lib/helpers';

const Hero = async () => {
    const blogs = await Blog.find({}).limit(4).sort({ createdAt: -1, date: -1 });

    let adverts = await getAllAdverts();

    // to convert into plain doc objects since adverts will be rendered on the client
    adverts = convertDocumentsToModelObjectCollection(adverts);

    return (
        <div className="bg-white py-6">
            <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
                {/* big grid 1 */}
                <div className="flex flex-row flex-wrap">
                    {/*Start left cover*/}
                    <div className="h-auto w-full max-w-full flex-shrink overflow-hidden pb-1 lg:w-1/2 lg:pb-0 lg:pr-1">
                        <div className="hover-img relative h-full max-h-[450px] w-full overflow-hidden">
                            <AdvertHeroCarousel adverts={adverts} />
                        </div>
                    </div>

                    {/*Start box news*/}
                    <div className="h-full w-full max-w-full flex-shrink lg:w-1/2">
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
