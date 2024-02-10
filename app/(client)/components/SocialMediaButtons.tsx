"use client"
import { FacebookShare, LinkedinShare, TwitterShare, WhatsappShare } from 'react-share-kit';
const SocialMediaButtons = ({ url }: { url: string }) => {
    return (
        <div className="flex-col flex">
            <p className="font-bold text-black text-center">Share via social media</p>
            <div className="w-full h-24 flex flex-row justify-around">
                <div className="rounded-full"></div>
                <LinkedinShare size={40} url={url} />
                <FacebookShare size={40} url={url} />
                <TwitterShare size={40} url={url} />
                <WhatsappShare size={40} url={url} />
            </div>
        </div>
    );
}

export default SocialMediaButtons;