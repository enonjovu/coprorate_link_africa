"use client"

import { deleteBlog } from "@/app/action";
import Image from "next/image";
import { BsPencil, BsTrash } from "react-icons/bs";
type blogProps = {
    id: string,
    image: {
        url: string,
        key: string,
    },
    story: string,
    title: string,
    category: string
}[]


const deletePost = async (id: string) => {
    const request = await deleteBlog(id);

    if (request) {
        alert("Blog deleted!")
    }
}
const UpdateNews = ({ blogs }: { blogs: blogProps }) => {
    ;
    return (
        <>
            {
                blogs.map(blog => (
                    <div key={blog.id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                        <div className="flex flex-row sm:block hover-img">
                            <a href={`/news/single/${blog.id}`}>
                                <Image width={900} height={800} className="max-w-full w-full h-40 min-h-40 max-h-40 overflow-hidden object-cover mx-auto" src={blog.image.url} alt="alt title" />
                            </a>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg font-bold leading-tight mb-2">
                                    <a href={`/news/single/${blog.id}`} className="text-gray-800">{blog.title}</a>
                                </h3>
                                <p className="hidden md:block text-gray-600 leading-tight mb-1">{blog.story}</p>
                                <a href={`/news/category/${blog.category}`} className="text-gray-500"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>{blog.category.toUpperCase()}</a>
                            </div>
                            <div className="w-full h-16 bg-red-700 roundeg-lg flex items-center justify-center space-x-16">
                                <a href={`/admin/news/edit/${blog.id}`} className="rounded-lg border-[1px] border-white p-2">
                                    <BsPencil size={20} color={"#fff"} />
                                </a>

                                <div onClick={() => (deletePost(blog.id))} className="cursor-pointer rounded-lg border-[1px] border-white p-2">
                                    <BsTrash size={20} color={"#fff"} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default UpdateNews;