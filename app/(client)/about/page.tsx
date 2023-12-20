"use client";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useEffect } from "react";

const About = () => {
    return ( 
        <div className="h-full">
            {/* Mission Statement */}
            <section className="flex items-center bg-stone-100 h-full font-poppins dark:bg-[#111]">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto h-full space-y-8 lg:py-6 md:px-6">

                    <div className="px-4 mb-10 md:text-center md:mb-20">
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                            About us
                        </h1>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            Get to know us, take a look at we do.
                        </p>
                        {/* <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                            <div className="flex-1 h-2 bg-red-700">
                            </div>
                            <div className="flex-1 h-2 bg-red-600">
                            </div>
                            <div className="flex-1 h-2 bg-red-700">
                            </div>
                        </div> */}
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                                What are we
                            </h2>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Corporate News Africa is a dynamic online platform that serves as a hub for the latest and most relevant news shaping the corporate landscape in Africa. We are a team of seasoned journalists, analysts, and industry experts dedicated to providing valuable insights that empower our audience to make informed decisions.
                            </p>
                        </div>

                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                                What we are not
                            </h2>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                We are not a platform for sensationalism, rumor-mongering, or clickbait. We do not compromise our journalistic integrity for the sake of popularity. Corporate News Africa stands firm against misinformation and prioritizes accuracy in all aspects of our reporting.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <Image width={500} height={500} src="/bg.jpg" alt="ads" className="relative z-40 object-cover w-full h-96 rounded-lg"/>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                                Our Mission
                            </h2>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                To be the leading online news publication that captures the pulse of corporate landscapes across the African continent. We are committed to delivering accurate, timely, and insightful news that empowers businesses, fosters informed decision-making, and catalyzes economic growth.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                                Our Vision
                            </h2>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Our vision is to create a dynamic platform that not only reports news but also serves as a catalyst for positive change in the corporate world. We aspire to be the go-to source for business leaders, entrepreneurs, and professionals seeking comprehensive and reliable information to navigate the intricacies of the African business terrain.
                            </p>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <Image alt="image" width={500} height={500} src="/bg.jpg" className="relative z-40 object-cover w-full h-96 rounded-lg"/>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap ">
                        {/* Policy */}
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                                Our Policy
                            </h2>
                            <div className="flex-col">
                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl">Unbiased Reporting</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                        We adhere to the highest standards of journalism, ensuring that our reporting is fair, unbiased, and free from external influences.
                                    </p>
                                </div>

                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl">Transparency</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                        We believe in transparency in our operations, from the sources of our information to our editorial processes, fostering trust among our readership.
                                    </p>
                                </div>

                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl">Ethical Journalism</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                         Our commitment to ethical journalism guides our practices, ensuring that the information we provide is accurate, respectful, and accountable.
                                    </p>
                                </div>


                            </div>
                        </div>

                        {/* Choose Us */}
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                                Why Choosing Us
                            </h2>
                            <div className="flex-col">
                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl"> Depth & Breadth</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                        Our in-depth coverage and sector-specific reports provide a comprehensive understanding of the African business landscape.
                                    </p>
                                </div>

                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl"> Accuracy and Reliability</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                        We prioritize accuracy and reliability in our reporting, ensuring that our readers can trust the information they receive from us.
                                    </p>
                                </div>

                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl">Media Solutions</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                         We offer a one-stop-shop for media-related services, ensuring your corporate message is strategically disseminated through PR, Advertising, Content Development, Documentaries, and more.
                                    </p>
                                </div>

                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl">Timeliness</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                         With our focus on delivering up-to-the-minute news and multimedia content, our readers stay ahead in the fast-paced world of business.
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center px-4 lg:mb-0 space-y-4">
                        <p className="w-full mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                            Choose Corporate News Africa for a reliable, insightful, and transformative perspective on the corporate dynamics shaping the future of Africa, supported by a comprehensive suite of media-related services.
                        </p>
                        <div className="flex justify-around w-1/2">
                            <a href="https://www.linkedin.com/company/82323263/admin/feed/posts/"><FaLinkedin size={20} color="#fff"/></a>
                            <a href="https://www.facebook.com/profile.php?id=61554654021876"><FaFacebook size={20} color="#fff"/></a>
                            <a href="https://www.twitter.com"><BsTwitterX size={20} color="#fff"/></a>
                            <a href="https://www.instagram.com"><FaInstagram size={20} color="#fff"/></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default About;