import ytch from 'yt-channel-info';

const Videos = async () => {
    const data = await ytch.getChannelVideos({
        channelId: 'UCYH5G4cIMBvwG8h8tGwYmDw',
        sortBy: 'newest',
        channelIdType: 0,
    });

    const youtubeVideos = data.items
        .map((v) => ({
            id: v.videoId,
            title: v.title,
        }))
        .slice(0, 6);

    return (
        <div className="bg-white py-6">
            <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    <div className="w-full max-w-full flex-shrink overflow-hidden">
                        <div className="w-full py-3">
                            <h2 className="text-2xl font-bold text-gray-800">
                                <span className="border-l-3 mr-2 inline-block h-5 border-red-600"></span>Videos
                            </h2>
                        </div>
                        <div className="-mx-3 flex flex-row flex-wrap">
                            {youtubeVideos.map((yvideo) => (
                                <div
                                    key={`id-${yvideo.id}`}
                                    className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0 lg:w-1/3"
                                >
                                    <div className="hover-img flex flex-row sm:block">
                                        <div className="w-full overflow-hidden rounded-lg bg-white shadow-lg dark:bg-[#333]">
                                            <div className="relative h-0  pb-[56.25%]">
                                                {/* 16:9 aspect ratio (h:w = 9:16) */}
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${yvideo.id}`}
                                                    title={yvideo.title}
                                                    frameBorder="0"
                                                    className="absolute left-0 top-0 h-full max-h-[315px] w-full"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Videos;
