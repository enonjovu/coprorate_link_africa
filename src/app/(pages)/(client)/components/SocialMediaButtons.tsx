'use client';
// import { FacebookShare, LinkedinShare, TwitterShare, WhatsappShare } from 'react-share-kit';

/**
 * <div className="flex flex-col">
            <p className="text-center font-bold text-black">Share via social media</p>
            <div className="flex h-24 w-full flex-row justify-around">
                <div className="rounded-full"></div>
                <LinkedinShare size={40} url={url} />
                <FacebookShare size={40} url={url} />
                <TwitterShare size={40} url={url} />
                <WhatsappShare size={40} url={url} />
            </div>
        </div>
 */
import { ShareIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const SocialMediaButtons = (props: { url: string; description: string; title: string }) => {
    const handleShare = async () => {
        if (
            !navigator.canShare({
                title: props.title,
                url: props.url,
            })
        ) {
            await navigator.clipboard.writeText(props.url);

            toast('post link copied to clipboard');
        } else {
            await navigator.share({
                title: props.title,
                url: props.url,
            });
        }
    };

    return (
        <div className="flex w-full items-center justify-center">
            <button
                className="inline-flex w-fit items-center justify-center rounded-full bg-red-600 p-2 px-8  text-white"
                onClick={handleShare}
            >
                <ShareIcon className="mr-4 size-6" />
                <p className="text-lg">Share</p>
            </button>
        </div>
    );
};

export default SocialMediaButtons;
