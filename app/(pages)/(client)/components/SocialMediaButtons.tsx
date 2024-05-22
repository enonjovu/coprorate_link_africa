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
            <button className="inline-flex items-center rounded-full p-2 text-black" onClick={handleShare}>
                <p className="text-lg">Share</p>
                <ShareIcon className="ml-2 size-8" />
            </button>
        </div>
    );
};

export default SocialMediaButtons;
