import ytch from 'yt-channel-info';

export async function GET() {
    try {
        const data = await ytch.getChannelVideos({
            channelId: 'UCYH5G4cIMBvwG8h8tGwYmDw',
            sortBy: 'newest',
            channelIdType: 0,
        });

        return Response.json(
            data.items.map((v) => ({
                id: v.videoId,
                title: v.title,
            })),
        );
    } catch (error: any) {
        console.log(error);
        return Response.json({ message: error.message });
    }
}
