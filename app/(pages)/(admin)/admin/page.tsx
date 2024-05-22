'use client';

const Dashboard = () => {
    return (
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            {/*  Tab Nav */}
            <nav
                className="mx-auto grid max-w-6xl gap-y-px sm:flex sm:gap-x-4 sm:gap-y-0"
                aria-label="Tabs"
                role="tablist"
            >
                <button
                    type="button"
                    className="active flex w-full flex-col rounded-xl p-3 text-start hover:bg-gray-100 hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent md:p-5 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-tab-active:bg-white/[.05]"
                    id="tabs-with-card-item-1"
                    data-hs-tab="#tabs-with-card-1"
                    aria-controls="tabs-with-card-1"
                    role="tab"
                >
                    <svg
                        className="hidden h-7 w-7 flex-shrink-0 text-gray-800 hs-tab-active:text-blue-600 sm:block dark:text-white dark:hs-tab-active:text-blue-500"
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
                    <span className="mt-5">
                        <span className="block font-semibold text-gray-800 hs-tab-active:text-blue-600 dark:text-gray-200 dark:hs-tab-active:text-blue-500">
                            All-in-one workspace
                        </span>
                        <span className="mt-2 hidden text-gray-800 lg:block dark:text-gray-200">
                            Create a business, whether you’ve got a fresh idea.
                        </span>
                    </span>
                </button>

                <button
                    type="button"
                    className="flex w-full flex-col rounded-xl p-3 text-start hover:bg-gray-100 hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent md:p-5 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-tab-active:bg-white/[.05]"
                    id="tabs-with-card-item-2"
                    data-hs-tab="#tabs-with-card-2"
                    aria-controls="tabs-with-card-2"
                    role="tab"
                >
                    <svg
                        className="hidden h-7 w-7 flex-shrink-0 text-gray-800 hs-tab-active:text-blue-600 sm:block dark:text-white dark:hs-tab-active:text-blue-500"
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
                    <span className="mt-5">
                        <span className="block font-semibold text-gray-800 hs-tab-active:text-blue-600 dark:text-gray-200 dark:hs-tab-active:text-blue-500">
                            Automation on a whole new level
                        </span>
                        <span className="mt-2 hidden text-gray-800 lg:block dark:text-gray-200">
                            Use automation to scale campaigns profitably and save time doing it.
                        </span>
                    </span>
                </button>

                <button
                    type="button"
                    className="flex w-full flex-col rounded-xl p-3 text-start hover:bg-gray-100 hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent md:p-5 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-tab-active:bg-white/[.05]"
                    id="tabs-with-card-item-3"
                    data-hs-tab="#tabs-with-card-3"
                    aria-controls="tabs-with-card-3"
                    role="tab"
                >
                    <svg
                        className="hidden h-7 w-7 flex-shrink-0 text-gray-800 hs-tab-active:text-blue-600 sm:block dark:text-white dark:hs-tab-active:text-blue-500"
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
                    <span className="mt-5">
                        <span className="block font-semibold text-gray-800 hs-tab-active:text-blue-600 dark:text-gray-200 dark:hs-tab-active:text-blue-500">
                            Solving problems for every team
                        </span>
                        <span className="mt-2 hidden text-gray-800 lg:block dark:text-gray-200">
                            One tool for your company to share knowledge and ship projects.
                        </span>
                    </span>
                </button>
            </nav>
            {/*  End Tab Nav */}

            {/*  Tab Content */}
            <div className="mt-12 md:mt-16">
                <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                    {/*  Devices */}
                    <div className="relative max-w-[1140px] lg:pb-32">
                        {/*  Mobile Device */}
                        <figure className="absolute bottom-0 start-0 z-[2] mb-20 ms-20 hidden h-auto w-60 max-w-full lg:block">
                            <div className="rounded-3xl bg-gray-100 p-1.5 shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                                <img
                                    className="h-auto max-w-full rounded-[1.25rem]"
                                    src="../assets/img/mockups/img9.jpg"
                                    alt="Image Description"
                                />
                            </div>
                        </figure>
                        {/*  End Mobile Device */}

                        {/*  Browser Device */}
                        <figure className="relative z-[1] me-20 ms-auto h-auto w-[50rem] max-w-full rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
                            <div className="relative flex max-w-[50rem] items-center rounded-t-lg border-b border-gray-100 bg-white px-24 py-2 dark:border-gray-700 dark:bg-gray-800">
                                <div className="absolute start-4 top-2/4 flex -translate-y-1 space-x-1">
                                    <span className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                                    <span className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                                    <span className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                                </div>
                                <div className="flex h-full w-full items-center justify-center rounded-sm bg-gray-200 text-[.25rem] text-gray-800 sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200">
                                    www.preline.co
                                </div>
                            </div>

                            <div className="rounded-b-lg bg-gray-800">
                                <img
                                    className="h-auto max-w-full rounded-b-lg"
                                    src="../assets/img/mockups/img8.jpg"
                                    alt="Image Description"
                                />
                            </div>
                        </figure>
                        {/*  End Browser Device */}
                    </div>
                    {/*  End Devices */}
                </div>

                <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                    {/*  Devices */}
                    <div className="relative max-w-[1140px] lg:pb-32">
                        {/*  Mobile Device */}
                        <figure className="absolute bottom-0 start-0 z-[2] mb-20 ms-20 hidden h-auto w-60 max-w-full lg:block">
                            <div className="rounded-3xl bg-gray-700 p-1.5 shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                                <img
                                    className="h-auto max-w-full rounded-[1.25rem]"
                                    src="../assets/img/mockups/img11.jpg"
                                    alt="Image Description"
                                />
                            </div>
                        </figure>
                        {/*  End Mobile Device */}

                        {/*  Browser Device */}
                        <figure className="shadow-shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] relative z-[1] me-20 ms-auto h-auto w-[50rem] max-w-full rounded-b-lg">
                            <div className="relative flex max-w-[50rem] items-center rounded-t-lg border-b border-gray-700 bg-gray-800 px-24 py-2">
                                <div className="absolute start-4 top-2/4 flex -translate-y-1 space-x-1">
                                    <span className="h-2 w-2 rounded-full bg-gray-700"></span>
                                    <span className="h-2 w-2 rounded-full bg-gray-700"></span>
                                    <span className="h-2 w-2 rounded-full bg-gray-700"></span>
                                </div>
                                <div className="flex h-full w-full items-center justify-center rounded-sm bg-gray-700 text-[.25rem] text-gray-200 sm:text-[.5rem]">
                                    www.preline.co
                                </div>
                            </div>

                            <div className="rounded-b-lg bg-gray-800">
                                <img
                                    className="h-auto max-w-full rounded-b-lg"
                                    src="../assets/img/mockups/img10.jpg"
                                    alt="Image Description"
                                />
                            </div>
                        </figure>
                        {/*  End Browser Device */}
                    </div>
                    {/*  End Devices */}
                </div>

                <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                    {/*  Devices */}
                    <div className="relative max-w-[1140px] lg:pb-32">
                        {/*  Mobile Device */}
                        <figure className="absolute bottom-0 start-0 z-[2] mb-20 ms-20 hidden h-auto w-60 max-w-full lg:block">
                            <div className="rounded-3xl bg-gray-100 p-1.5 shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                                <img
                                    className="h-auto max-w-full rounded-[1.25rem]"
                                    src="../assets/img/mockups/img13.jpg"
                                    alt="Image Description"
                                />
                            </div>
                        </figure>
                        {/*  End Mobile Device */}

                        {/*  Browser Device */}
                        <figure className="relative z-[1] me-20 ms-auto h-auto w-[50rem] max-w-full rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
                            <div className="relative flex max-w-[50rem] items-center rounded-t-lg border-b border-gray-100 bg-white px-24 py-2 dark:border-gray-700 dark:bg-gray-800">
                                <div className="absolute start-4 top-2/4 flex -translate-y-1 space-x-1">
                                    <span className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                                    <span className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                                    <span className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                                </div>
                                <div className="flex h-full w-full items-center justify-center rounded-sm bg-gray-200 text-[.25rem] text-gray-800 sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200">
                                    www.preline.co
                                </div>
                            </div>

                            <div className="rounded-b-lg bg-gray-800">
                                <img
                                    className="h-auto max-w-full rounded-b-lg"
                                    src="../assets/img/mockups/img12.jpg"
                                    alt="Image Description"
                                />
                            </div>
                        </figure>
                        {/*  End Browser Device */}
                    </div>
                    {/*  End Devices */}
                </div>
            </div>
            {/*  End Tab Content */}
            <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                <div className="mx-auto mb-6 w-2/3 text-center sm:w-1/2 lg:w-1/3">
                    <h2 className="text-gray-600 dark:text-gray-400">
                        Trusted by Open Source, enterprise, and more than 99,000 of you
                    </h2>
                </div>

                <div className="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
                    <svg
                        className="mx-auto h-auto w-16 py-3 text-gray-500 sm:mx-0 md:w-20 lg:w-24 lg:py-5"
                        enable-background="new 0 0 2499 614"
                        viewBox="0 0 2499 614"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z"
                            fill="currentColor"
                        />
                    </svg>

                    <svg
                        className="mx-auto h-auto w-16 py-3 text-gray-500 sm:mx-0 md:w-20 lg:w-24 lg:py-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947"
                        width="2500"
                        height="607"
                    >
                        <path
                            d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z"
                            fill="currentColor"
                        />
                    </svg>

                    <svg
                        className="mx-auto h-auto w-16 py-3 text-gray-500 sm:mx-0 md:w-20 lg:w-24 lg:py-5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2428 1002"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M311.5 389.8h191.8l67 117.5 77.8-117.5h178.3L682.7 590.7l154 220.7H648.1l-77.8-135.8-91.7 135.8h-175l153.2-220.7-145.3-200.9Z"
                            fill="currentColor"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1279.3 640.7H955.4c2.9 26 10 45.2 21 58a76.5 76.5 0 0 0 61.1 27.3c16 0 31.5-4 45.3-12 8.8-5 18.2-13.7 28.2-26.5l159.2 14.7c-24.4 42.4-53.7 72.7-88 91.2-34.5 18.2-83.8 27.5-148.2 27.5-55.8 0-99.7-7.9-131.8-23.6a193.2 193.2 0 0 1-79.6-75c-21-34.4-31.6-74.6-31.6-121 0-65.8 21.2-119.2 63.3-159.8 42.3-40.8 100.6-61.3 175-61.3 60.3 0 108 9.2 142.8 27.5a184 184 0 0 1 79.8 79.3c18.3 34.7 27.4 79.8 27.4 135.3v18.4ZM1115 563.3c-3.2-31.3-11.6-53.7-25.2-67.1a73.1 73.1 0 0 0-53.8-20.3 73.6 73.6 0 0 0-61.6 30.6c-9.7 12.7-16 31.6-18.5 56.8H1115Zm137-173.5h168.3l81.9 267.1 84.5-267H1750l-179.1 421.5h-143.3L1252 389.8Zm463.2 212c0-64.3 21.7-117.4 65-159 43.5-41.7 102-62.6 176-62.6 84.4 0 148.2 24.5 191.3 73.5 34.6 39.4 52 88 52 145.8 0 64.7-21.5 117.8-64.5 159.3-43 41.3-102.4 62-178.5 62-67.7 0-122.5-17.1-164.3-51.5-51.4-42.6-77-98.4-77-167.6Zm162-.5c0 37.7 7.5 65.5 22.8 83.4a72 72 0 0 0 57.3 27.1c23.4 0 42.5-9 57.4-26.7 15-17.8 22.5-46 22.5-85.4 0-36.4-7.6-63.7-22.7-81.5a70.5 70.5 0 0 0-56-26.7c-23.5 0-43 9-58.3 27-15.4 18.2-23 45.9-23 82.8ZM2363.1.1a64 64 0 0 1 0 127.9 64 64 0 0 1 0-128Z"
                            fill="currentColor"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1912.1 671.5c220.3-135 326.4-327 334-419.2 8.7-106.7-71-235.9-358.9-238-345 3.6-790 158.3-1163.6 360.4h138c315.8-152.6 672-266.2 1000.8-275.2 287.7-7.8 304.4 149.2 302 199-3.6 71-74.7 234.5-252.3 373Zm-1315.7-222-36 22.7 10 17.5 26-40.1ZM419.8 567.5C212 717 57 873.2.8 1001.9 77.8 897.1 217 771 394.9 647l40.4-58.1-15.5-21.4Z"
                            fill="currentColor"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2036.3 580a819.8 819.8 0 0 0 114.2-122.8l-3-3.5c-8-9.2-17-17.5-26.5-25-21 39.8-50 83.7-88.2 128.3 1.6 7 2.8 14.7 3.5 23Z"
                            fill="currentColor"
                        />
                    </svg>

                    <svg
                        className="mx-auto h-auto w-16 py-3 text-gray-500 sm:mx-0 md:w-20 lg:w-24 lg:py-5"
                        viewBox="0 -8.881784197001252e-16 267.51517722360785 65.24679557585003"
                        xmlns="http://www.w3.org/2000/svg"
                        width="2500"
                        height="610"
                    >
                        <path
                            d="M263.043 56.411a4.418 4.418 0 1 0 .085 0zm0 8.33a3.874 3.874 0 1 1 3.809-3.938v.065a3.791 3.791 0 0 1-3.708 3.871h-.1m-16.96-9.535h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 0 1 9.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 1 1 5.57-5.572 5.571 5.571 0 0 1-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM250.87.004h-55.21a4.728 4.728 0 0 0-4.781 4.67v55.439a4.731 4.731 0 0 0 4.781 4.675h55.21a4.741 4.741 0 0 0 4.8-4.675V4.67a4.738 4.738 0 0 0-4.8-4.67m-86.12 31.749c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 0 1-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.577h9.609zm-46.139-19.048a5.756 5.756 0 0 0-5.894-5.89 6.406 6.406 0 0 0-6.784 5.89zm8.132 13.7a16.909 16.909 0 0 1-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331s7.685-16.328 17.286-16.328c8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 0 0 7.235 6.019 8.193 8.193 0 0 0 6.851-3.778zM47.834 24.279h9.219v4.225h.131a10.085 10.085 0 0 1 9.09-4.994c9.735 0 11.527 6.405 11.527 14.726V55.19h-9.6V40.159c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6zM82.669 9.58h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066L92.397 39.923h-.126v15.28h-9.6zM32.911 24.276h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 1 1-5.57 5.569 5.569 5.569 0 0 1 5.57-5.569M0 9.587h9.993v36.4h18.5v9.222H0zm263.744 51.522a1.2 1.2 0 0 0 1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
