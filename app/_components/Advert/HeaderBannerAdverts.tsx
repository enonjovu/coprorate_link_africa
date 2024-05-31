// import { Carousel } from 'react-responsive-carousel';

import dbConnect from '@/lib/db';
import Advert from '@/models/Advert';

// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
export default async function HeaderBannerAdverts() {

    await dbConnect();
    
    const advert = await Advert.findOne({ variant: 'top' });

    if (!advert) {
        return <></>;
    }

    return (
        <div className="m-0 max-h-[339px] w-full bg-black md:h-full">
            <div
                className="relative m-0 max-h-[339px] overflow-hidden md:h-full" // Set initial height using Tailwind classes
            >
                <div className="flex h-full w-full items-center justify-center text-white">
                    <img src={advert.images[0].url} className="h-full w-full object-cover" alt="top banner ads" />
                </div>
                {/* <div className="flex h-full w-full items-center justify-center text-white">
                    <img src="/ta2.jpg" className="h-full w-full object-cover" alt="" />
                </div> */}
            </div>
        </div>
    );
}
