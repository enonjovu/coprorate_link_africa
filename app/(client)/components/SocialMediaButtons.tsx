"use client"
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FacebookShare, LinkedinShare, TwitterShare, WhatsappShare } from 'react-share-kit';
const SocialMediaButtons = ({url}:{url:string}) => {
    return ( 
        <div className="w-full h-24 flex flex-row justify-around">
            <LinkedinShare size={40} url={url}/>
            <FacebookShare size={40} url={url}/>
            <TwitterShare size={40} url={url}/>
            <WhatsappShare size={40} url={url}/>
        </div>
     );
}
 
export default SocialMediaButtons;