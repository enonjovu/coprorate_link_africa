'use client';
import { FacebookShare, LinkedinShare, TwitterShare, WhatsappShare } from 'react-share-kit';
const SocialMediaButtons = ({ url }: { url: string }) => {
    return (
        <div className="flex flex-col">
            <p className="text-center font-bold text-black">Share via social media</p>
            <div className="flex h-24 w-full flex-row justify-around">
                <div className="rounded-full"></div>
                <LinkedinShare size={40} url={url} />
                <FacebookShare size={40} url={url} />
                <TwitterShare size={40} url={url} />
                <WhatsappShare size={40} url={url} />
            </div>
        </div>
    );
};

export default SocialMediaButtons;
