"use client"
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FacebookShare, LinkedinShare, TwitterShare, WhatsappShare } from 'react-share-kit';
``
const SocialMediaButtons = () => {
    return ( 
        <div className="w-full h-24 flex flex-row justify-around">
            <LinkedinShare size={40} url={"https://facebook.com"}/>
            <FacebookShare size={40} url={"https://facebook.com"}/>
            <TwitterShare size={40} url={"https://facebook.com"}/>
            <WhatsappShare size={40} url={"https://facebook.com"}/>
        </div>
     );
}
 
export default SocialMediaButtons;