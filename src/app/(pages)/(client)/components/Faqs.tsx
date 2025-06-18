'use client';

import { useEffect } from 'react';

const Faqs = () => {
    return (
        <section className="font-poppins flex items-center bg-white py-4 dark:bg-[#222]">
            <div className="mx-auto mt-12 max-w-5xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold dark:text-white"> Frequently Asked Questions </h1>
                    <p className="mx-auto max-w-xl text-gray-500">
                        Below are a list of questions our customers ask Frequently.
                    </p>
                </div>
                {/*  Tab Nav */}
                <nav
                    className="mx-auto mt-14 grid max-w-6xl gap-y-px sm:flex sm:gap-x-4 sm:gap-y-0"
                    aria-label="Tabs"
                    role="tablist"
                >
                    <button
                        type="button"
                        className="active flex w-full items-center justify-between rounded-xl p-3 text-start hover:bg-gray-100 hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-tab-active:bg-white/[.05] md:flex-col md:p-5"
                        id="tabs-with-card-item-1"
                        data-hs-tab="#tabs-with-card-1"
                        aria-controls="tabs-with-card-1"
                        role="tab"
                    >
                        <svg
                            className="h-7  w-7 flex-shrink-0 text-gray-800 hs-tab-active:text-red-600 dark:text-white dark:hs-tab-active:text-red-500 sm:block"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                        </svg>
                        <span className="md:mt-5">
                            <span className=" text-gray-800 dark:text-gray-200 md:mt-2 lg:block">General.</span>
                        </span>
                    </button>

                    <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-xl p-3 text-start hover:bg-gray-100 hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-tab-active:bg-white/[.05] md:flex-col md:p-5"
                        id="tabs-with-card-item-2"
                        data-hs-tab="#tabs-with-card-2"
                        aria-controls="tabs-with-card-2"
                        role="tab"
                    >
                        <svg
                            className="h-7  w-7 flex-shrink-0 text-gray-800 hs-tab-active:text-red-600 dark:text-white dark:hs-tab-active:text-red-500 sm:block"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="m12 14 4-4" />
                            <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                        </svg>
                        <span className="md:mt-5">
                            <span className=" text-gray-800 dark:text-gray-200 md:mt-2 lg:block">
                                Content Development.
                            </span>
                        </span>
                    </button>

                    <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-xl p-3 text-start hover:bg-gray-100 hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-tab-active:bg-white/[.05] md:flex-col md:p-5"
                        id="tabs-with-card-item-3"
                        data-hs-tab="#tabs-with-card-3"
                        aria-controls="tabs-with-card-3"
                        role="tab"
                    >
                        <svg
                            className="h-7  w-7 flex-shrink-0 text-gray-800 hs-tab-active:text-red-600 dark:text-white dark:hs-tab-active:text-red-500 sm:block"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                            <path d="M5 3v4" />
                            <path d="M19 17v4" />
                            <path d="M3 5h4" />
                            <path d="M17 19h4" />
                        </svg>
                        <span className="md:mt-5">
                            <span className=" text-gray-800 dark:text-gray-200 md:mt-2 lg:block">Advertisment.</span>
                        </span>
                    </button>
                </nav>
                {/*  End Tab Nav */}
                <div className="mt-14 w-full">
                    {/* Tab 1 */}
                    <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-plus-circle-fill mr-4 text-red-500 dark:text-red-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        What is Corporate News Africa's mission and vision?
                                    </span>
                                    <div className="answer mt-3 text-sm text-gray-500 dark:text-gray-400">
                                        Answer: Corporate News Africa is dedicated to being a leading source of
                                        insightful and unbiased media content, with a mission to empower and connect
                                        individuals across the African continent. Our vision is to contribute to a
                                        positive transformation by showcasing the diversity of Africa's stories,
                                        achievements, and challenges.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-plus-circle-fill mr-4 text-red-500 dark:text-red-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        How does Corporate News Africa differentiate itself from other media outlets?
                                    </span>
                                    <div className="answer mt-3 text-sm text-gray-500 dark:text-gray-400">
                                        Answer: We stand out through our commitment to journalistic excellence,
                                        transparency, and inclusivity. Corporate News Africa aims to provide timely and
                                        credible news coverage, prioritizing the voices and narratives that reflect the
                                        dynamic and vibrant spirit of Africa.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-plus-circle-fill mr-4 text-red-500 dark:text-red-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        Who are the key figures or contributors behind Corporate News Africa's content?
                                    </span>
                                    <div className="answer mt-3 text-sm text-gray-500 dark:text-gray-400">
                                        Answer: Our content is crafted by a team of experienced journalists,
                                        contributors, and thought leaders passionate about Africa. Visit our "Meet the
                                        Team" page to learn more about the individuals shaping the narrative at
                                        Corporate News Africa.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-plus-circle-fill mr-4 text-red-500 dark:text-red-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        What regions and topics does Corporate News Africa primarily cover?
                                    </span>
                                    <div className="answer mt-3 text-sm text-gray-500 dark:text-gray-400">
                                        Answer: Corporate News Africa covers a wide spectrum of topics across the
                                        African continent, from economics, mining, and energy to culture and innovation.
                                        We strive to provide comprehensive coverage, ensuring a holistic representation
                                        of the diverse regions and stories within Africa.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tab 2 */}
                    <div
                        id="tabs-with-card-2"
                        className="hidden"
                        role="tabpanel"
                        aria-labelledby="tabs-with-card-item-2"
                    >
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-plus-circle-fill mr-4 text-red-500 dark:text-red-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        How does Corporate News Africa ensure the accuracy and credibility of its news
                                        coverage?
                                    </span>
                                    <div className="answer mt-3 text-sm text-gray-500 dark:text-gray-400">
                                        Answer: We uphold the highest standards of journalistic integrity. Our editorial
                                        process involves thorough fact-checking, verification, and adherence to ethical
                                        guidelines. Corporate News Africa is committed to delivering accurate and
                                        credible news to our readers.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-plus-circle-fill mr-4 text-red-500 dark:text-red-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        What is the editorial process for selecting and publishing stories?
                                    </span>
                                    <div className="answer mt-3 text-sm text-gray-500 dark:text-gray-400">
                                        Answer: Our editorial process involves a careful selection of stories that align
                                        with our mission and vision. We prioritize relevance, accuracy, and diversity to
                                        offer a well-rounded perspective on the issues that matter in Africa.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-plus-circle-fill mr-4 text-red-500 dark:text-red-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        Does Corporate News Africa focus on any specific industry or sector in its
                                        reporting?
                                    </span>
                                    <div className="answer mt-3 text-sm text-gray-500 dark:text-gray-400">
                                        Answer: While we cover a broad range of topics, Corporate News Africa doesn't
                                        limit its focus to a specific industry or sector. Our goal is to provide a
                                        comprehensive view of the continent, spanning politics, economics, culture, and
                                        more.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-plus-circle-fill mr-4 text-red-500 dark:text-red-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        How can readers contribute or submit story ideas to Corporate News Africa?
                                    </span>
                                    <div className="answer mt-3 text-sm text-gray-500 dark:text-gray-400">
                                        Answer: We welcome reader contributions and story ideas. Please visit our
                                        "Contact Us" page for information on how to submit your ideas or get in touch
                                        with our editorial team.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="tabs-with-card-3"
                        className="hidden"
                        role="tabpanel"
                        aria-labelledby="tabs-with-card-item-3"
                    >
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-plus-circle-fill mr-4 text-red-500 dark:text-red-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        What platforms and formats does Corporate News Africa utilize to deliver its
                                        content?
                                    </span>
                                    <div className="answer mt-3 text-sm text-gray-500 dark:text-gray-400">
                                        Answer: Corporate News Africa delivers content through its website, social media
                                        platforms, and newsletters. We offer a variety of formats, including articles,
                                        videos, and interactive content to cater to diverse audience preferences.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-plus-circle-fill mr-4 text-red-500 dark:text-red-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        Is there a subscription model, and how can readers support Corporate News Africa
                                        financially?
                                    </span>
                                    <div className="answer mt-3 text-sm text-gray-500 dark:text-gray-400">
                                        Answer: Yes, we offer subscription plans to support our continued commitment to
                                        quality journalism. You can find information on subscription options on our
                                        "Support Us" page.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-plus-circle-fill mr-4 text-red-500 dark:text-red-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        How can users engage with Corporate News Africa through social media?
                                    </span>
                                    <div className="answer mt-3 text-sm text-gray-500 dark:text-gray-400">
                                        Answer: Connect with us on social media platforms such as Twitter, Facebook, and
                                        Instagram. We encourage our readers to share, comment, and engage with our
                                        content to be part of the conversation.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-plus-circle-fill mr-4 text-red-500 dark:text-red-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        Are there plans for regional expansion or additional language offerings in the
                                        future?
                                    </span>
                                    <div className="answer mt-3 text-sm text-gray-500 dark:text-gray-400">
                                        Answer: Corporate News Africa is continually exploring opportunities for
                                        expansion. Stay tuned for updates on regional coverage and additional language
                                        offerings as we work towards making our content more accessible to a broader
                                        audience.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faqs;
