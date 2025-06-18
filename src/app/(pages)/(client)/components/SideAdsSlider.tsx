'use client';

import { AdvertDocument } from '@/lib/document-types';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

type adsProps = {
    _id: string;
    images: { key: string; url: string }[];
    date: string;
}[];

const SideAdsSlider = ({ ads }: { ads: AdvertDocument[] }) => {
    return (
        <div className="h-full max-h-[300px] w-full text-center">
            <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000} // Set autoplay interval to 5 seconds
                stopOnHover={true}
                swipeable={true}
                emulateTouch={true}
                dynamicHeight={false}
                centerMode={false}
                centerSlidePercentage={100}
                showThumbs={false}
                className="relative h-full w-full" // Set initial height using Tailwind classes
            >
                {ads?.map((advert) => (
                    <div className="" key={advert.images[0].key}>
                        <a href="#">
                            <Image
                                width={1000}
                                height={1000}
                                className="mx-auto"
                                src={advert.images[0].url}
                                alt="advertisement area"
                            />
                        </a>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default SideAdsSlider;
