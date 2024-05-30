// import Ads from "@/app/(client)/components/Advertisment";

import Image from 'next/image';
import PicturesSlider from '@/app/(pages)/(client)/components/PicturesSlider';
import SocialMediaButtons from '@/app/(pages)/(client)/components/SocialMediaButtons';
import TopStories from '@/app/(pages)/(client)/components/TopStories';

import { fetchBlogsById } from '@/app/action';
import { getBlogById, getBlogsRelatedTo } from '@/lib/repositories/BlogRepository';

import SideAds from '../../../components/SideAds';
import { Suspense } from 'react';

import type { Metadata, ResolvingMetadata } from 'next';
import EveTend from '../../../components/EveTend';
import { getFormatedDate, trimText } from '@/lib/helpers';
import { notFound } from 'next/navigation';

type PageProps = {
    params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
};

const LoadingDammy = () => <div className="h-52 w-full animate-pulse"></div>;

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const id = params.id;

    const blog = await getBlogById(id);

    if (!blog) {
        return {};
    }

    return {
        title: blog.title,
        openGraph: {
            images: blog.images[0].url,
            title: blog.title,
            url: `https://www.clafrica.online/news/single/${id}`,
            description: trimText(blog.title, 0, 30),
        },
        description: trimText(blog.title, 0, 30),
    };
}

const SingleBlogPage = async ({ params }: PageProps) => {
    const id: string = params.id;

    const blog = await getBlogById(id);

    if (!blog) {
        notFound();
        return;
    }

    const relatedBlogs = await getBlogsRelatedTo(blog.id, { category: blog.category });

    return (
        <main id="content">
            <>
                {/* <head>
                    <meta property="og:title" content={blog.title} />
                    <meta property="og:description" content={blog.story} />
                    <meta property="og:image" content={blog.images[0].url} />
                    <meta property="og:url" content={`https://www.clafrica.online/news/single/${id}`} />
                </head> */}

                {/* block news */}
                <div className="bg-gray-50 py-10">
                    <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
                        <div className="flex flex-row flex-wrap">
                            {/* post */}
                            <div className="w-full max-w-full flex-shrink overflow-hidden lg:w-2/3">
                                <div className="mb-3 w-full py-3">
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        <span className="mr-2 inline-block h-5 border-l-2 border-red-600"></span>
                                        {blog?.title}
                                    </h2>
                                    <p className="text-black">{getFormatedDate(blog.date)}</p>
                                    <span className="text-gray-500">Written by {blog.author}</span>
                                </div>
                                <div className="-mx-3 flex flex-row flex-wrap">
                                    <div className="w-full max-w-full px-4">
                                        {/* Post content */}
                                        <div className="pb-4 leading-relaxed">
                                            <figure className="mb-6 flex h-full max-h-[60vh] min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden text-center lg:max-h-[70vh]">
                                                {blog.images && (
                                                    <div className="relative h-full w-full overflow-hidden">
                                                        <div className="inset-0 flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
                                                            <Image
                                                                width={1280} // You can remove fixed width for full responsiveness
                                                                height={720} // You can remove fixed height for full responsiveness
                                                                className="h-full w-full rounded-lg "
                                                                src={blog.images[0].url}
                                                                alt={blog.title}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                <figcaption className="mt-4 text-xs font-medium text-gray-700">
                                                    {blog.image_alt ?? blog.title}
                                                </figcaption>
                                            </figure>

                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: blog?.story,
                                                }}
                                                className="prose mb-5 w-[100%] max-w-7xl whitespace-pre-wrap text-black"
                                            ></div>
                                        </div>
                                        {/* Comments */}
                                        {/* <div id="comments" className="pt-16">
                                            <h3 className="text-2xl leading-normal mb-2 font-semibold text-gray-800 ">5 Comments</h3>

                                            <ol className="mb-4">
                                                <li className="py-2 mt-6">
                                                    <div className="pb-4 border-b border-gray-200  border-dashed">
                                                        <footer>
                                                            <img className="w-20 h-20 border border-gray-200  max-w-full float-left mr-4" src="/src/img/avatar2.jpg" alt="avatar" />
                                                            <div>
                                                                <a className="text-lg leading-normal mb-2 font-semibold text-gray-800 " href="#" target="_blank">Carlos vila</a>
                                                                <span className="md:float-right text-sm">
                                                                    <time dateTime="2020-10-27">Oct 27, 2020</time>
                                                                </span>
                                                            </div>
                                                        </footer>
                                                        <div>
                                                            <p className="text-gray-600">I like this themes, fast loading and look profesional</p>
                                                        </div>
                                                        <div>
                                                            <a className="text-red-700 hover:text-red-800" href="#comment-form">Reply</a>
                                                        </div>
                                                    </div>
                                                    <ul className="ml-12 md:ml-24">
                                                        <li className="py-2 mt-6">
                                                            <div className="pb-4 border-b border-gray-200  border-dashed">
                                                                <footer>
                                                                    <img className="w-20 h-20 border border-gray-200  max-w-full float-left mr-4" src="/src/img/avatar.jpg" alt="avatar" />
                                                                    <div>
                                                                        <a className="text-lg leading-normal mb-2 font-semibold text-gray-800 " href="#" target="_blank">Ari Budin</a>
                                                                        <span className="md:float-right text-sm">
                                                                            <time dateTime="2020-10-27">Oct 27, 2020</time>
                                                                        </span>
                                                                    </div>
                                                                </footer>
                                                                <div>
                                                                    <p className="text-gray-600">Thank you Carlos!</p>
                                                                </div>
                                                                <div>
                                                                    <a className="text-red-700 hover:text-red-800" href="#comment-form">Reply</a>
                                                                </div>
                                                            </div>
                                                            <ul className="md:ml-24">
                                                                <li className="py-2 mt-6" id="comment-5">
                                                                    <div className="pb-4 border-b border-gray-200  border-dashed">
                                                                        <footer>
                                                                            <img className="w-20 h-20 border border-gray-200  max-w-full float-left mr-4" src="/src/img/avatar2.jpg" alt="avatar" />
                                                                            <div>
                                                                                <a className="text-lg leading-normal mb-2 font-semibold text-gray-800 " href="#" target="_blank">Carlos vila</a>
                                                                                <span className="md:float-right text-sm">
                                                                                    <time dateTime="2020-10-27">Oct 27, 2020</time>
                                                                                </span>
                                                                            </div>
                                                                        </footer>
                                                                        <div>
                                                                            <p className="text-gray-600">You're welcome!</p>
                                                                        </div>
                                                                        <div>
                                                                            <a className="text-red-700 hover:text-red-800" href="#comment-form">Reply</a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="py-2 mt-6">
                                                    <div className="pb-4 border-b border-gray-200  border-dashed">
                                                        <footer>
                                                            <img className="w-20 h-20 border border-gray-200  max-w-full float-left mr-4" src="/src/img/avatar.jpg" alt="avatar" />
                                                            <div>
                                                                <a className="text-lg leading-normal mb-2 font-semibold text-gray-800 " href="#" target="_blank">Ari Budin</a>
                                                                <span className="md:float-right text-sm">
                                                                    <time dateTime="2020-10-27">Oct 27, 2020</time>
                                                                </span>
                                                            </div>
                                                        </footer>
                                                        <div>
                                                            <p className="text-gray-600">Please support me with give positive rating!</p>
                                                        </div>
                                                        <div>
                                                            <a className="text-red-700 hover:text-red-800" href="#comment-form">Reply</a>
                                                        </div>
                                                    </div>
                                                    <ul className="ml-12 md:ml-24">
                                                        <li className="py-2 mt-6">
                                                            <div className="pb-4 border-b border-gray-200  border-dashed">
                                                                <footer>
                                                                    <img className="w-20 h-20 border border-gray-200  max-w-full float-left mr-4" src="/src/img/avatar2.jpg" alt="avatar" />
                                                                    <div>
                                                                        <a className="text-lg leading-normal mb-2 font-semibold text-gray-800 " href="#" target="_blank">Carlos vila</a>
                                                                        <span className="md:float-right text-sm">
                                                                            <time dateTime="2020-10-27">Oct 27, 2020</time>
                                                                        </span>
                                                                    </div>
                                                                </footer>
                                                                <div>
                                                                    <p className="text-gray-600">Yes Sure!</p>
                                                                </div>
                                                                <div>
                                                                    <a className="text-red-700 hover:text-red-800" href="#comment-form">Reply</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ol>

                                            <div id="comment-form" className="mt-12">
                                                <h4 className="text-2xl leading-normal mb-2 font-semibold text-gray-800 ">LEAVE A REPLY</h4>
                                                <p className="mb-5">Your email address will not be published</p>
                                                <div>
                                                    <form action="#" >
                                                        <div className="mt-2"></div>
                                                        <div className="mb-6">
                                                            <textarea className="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 " placeholder="Comment" aria-label="insert comment" rows={4} ></textarea>
                                                        </div>
                                                        <div className="mb-6">
                                                            <input className="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 " placeholder="Name" aria-label="name" type="text" />
                                                        </div>
                                                        <div className="mb-6">
                                                            <input className="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 " placeholder="Email" aria-label="email" type="text" />
                                                        </div>
                                                        <div className="mb-6">
                                                            <input className="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 " placeholder="Website:" aria-label="website" type="text" />
                                                        </div>
                                                        <div className="mb-6">
                                                            <div>
                                                                <input className="form-checkbox h-5 w-5 text-red-500  border border-gray-100  focus:outline-none" id="comment-cookies" name="comment-cookies" type="checkbox" value="yes" />
                                                                <label className="ml-2" htmlFor="comment-cookies">
                                                                    Save my name, email, and website in this browser for the next time I comment.
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="mb-6">
                                                            <button type="submit" className="flex items-center py-3 px-5 leading-5 text-gray-100 bg-black hover:text-white hover:bg-gray-900 hover:ring-0 focus:outline-none focus:ring-0">Post Comment</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="w-full max-w-full flex-shrink overflow-hidden lg:w-2/3">
                                    <SocialMediaButtons
                                        url={`https://clafrica.online/news/single/${blog.id}`}
                                        title={blog.title}
                                        description={trimText(blog.story, 0, 30)}
                                    />
                                </div>
                                <div className="w-full max-w-full flex-shrink overflow-hidden lg:w-2/3">
                                    <div className="w-full py-3">
                                        <h2 className="text-2xl font-bold text-gray-800">
                                            <span className="mr-2 inline-block h-5 border-l-2 border-red-600"></span>
                                            Related Articles
                                        </h2>
                                    </div>
                                    <div className="-mx-3 flex flex-row flex-wrap">
                                        {relatedBlogs?.map((related) => (
                                            <div
                                                key={`key-${related.id}`}
                                                className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0"
                                            >
                                                <div className="hover-img flex flex-row sm:block">
                                                    <a href={`/news/single/${related.id}`}>
                                                        <img
                                                            className="mx-auto h-40 max-h-40 min-h-40 w-full max-w-full overflow-hidden"
                                                            src={related.images[0].url}
                                                            alt={related.title}
                                                        />
                                                    </a>
                                                    <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                                        <h3 className="mb-2 text-lg font-bold leading-tight">
                                                            <a href="#" className="text-black">
                                                                {related.title}
                                                            </a>
                                                        </h3>
                                                        {/* <p className="hidden md:block text-gray-600 leading-tight mb-1">{related.story}</p> */}
                                                        <a
                                                            href={`/news/single/${related._id}`}
                                                            className="text-gray-500"
                                                        >
                                                            <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
                                                            {related.category}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* sidebar */}
                            <div className="order-last w-full max-w-full flex-shrink lg:w-1/3 lg:pb-8 lg:pl-8 lg:pt-14">
                                <div className="sticky mb-6 text-sm">
                                    <Suspense fallback={<LoadingDammy />}>
                                        <SideAds />
                                    </Suspense>
                                </div>
                                <Suspense fallback={<LoadingDammy />}>
                                    <EveTend />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </main>
    );
};
export default SingleBlogPage;
