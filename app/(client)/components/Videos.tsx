const Videos = () => {

    const youtubeVideos = [
        {title:"Mining in Malawi", src:"https://www.youtube.com/embed/NsSZlWb7FPk"}
    ];

    return ( 
        <div className="bg-white py-6">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                <div className="flex-shrink max-w-full w-full overflow-hidden">
                    <div className="w-full py-3">
                    <h2 className="text-gray-800 text-2xl font-bold">
                        <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Videos
                    </h2>
                    </div>
                    <div className="flex flex-row flex-wrap -mx-3">

                        <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                                <div className="bg-white dark:bg-[#333] rounded-lg shadow-lg overflow-hidden w-full">
                                    <div className="relative pb-[56.25%]  h-0">
                                    {/* 16:9 aspect ratio (h:w = 9:16) */}
                                    <iframe
                                        src="https://www.youtube.com/embed/NsSZlWb7FPk"
                                        title="Mining in Malawi"
                                        frameBorder="0"
                                        className="absolute top-0 left-0 w-full h-full max-h-[315px]"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                                <div className="bg-white dark:bg-[#333] rounded-lg shadow-lg overflow-hidden w-full">
                                    <div className="relative pb-[56.25%]  h-0">
                                    {/* 16:9 aspect ratio (h:w = 9:16) */}
                                    <iframe
                                        src="https://www.youtube.com/embed/NsSZlWb7FPk"
                                        title="Mining in Malawi"
                                        frameBorder="0"
                                        className="absolute top-0 left-0 w-full h-full max-h-[315px]"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                                <div className="bg-white dark:bg-[#333] rounded-lg shadow-lg overflow-hidden w-full">
                                    <div className="relative pb-[56.25%]  h-0">
                                    {/* 16:9 aspect ratio (h:w = 9:16) */}
                                    <iframe
                                        src="https://www.youtube.com/embed/HNTro5dTjx4"
                                        title="Mining in Malawi"
                                        frameBorder="0"
                                        className="absolute top-0 left-0 w-full h-full max-h-[315px]"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div className="flex flex-row sm:block hover-img">
                                <div className="bg-white dark:bg-[#333] rounded-lg shadow-lg overflow-hidden w-full">
                                    <div className="relative pb-[56.25%]  h-0">
                                    {/* 16:9 aspect ratio (h:w = 9:16) */}
                                    <iframe
                                        src="https://www.youtube.com/embed/HNTro5dTjx4"
                                        title="Mining in Malawi"
                                        frameBorder="0"
                                        className="absolute top-0 left-0 w-full h-full max-h-[315px]"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
          </div>
     );
}
 
export default Videos;