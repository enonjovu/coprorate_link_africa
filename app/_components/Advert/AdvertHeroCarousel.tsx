'use client';

import type { AdvertDocument } from '@/lib/document-types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

type adsProps = {
    _id: string;
    images: { key: string; url: string }[];
    date: string;
}[];

const AdvertHeroCarousel = () => {
    const [ads, setAds] = useState<AdvertDocument[]>([]);

    useEffect(() => {
        const fetchAdverts = async () => {
            const res = await fetch('/api/adverts');
            const data = await res.json();

            setAds(data);
        };
        fetchAdverts();
    }, []);
    return (
        <div className="h-full w-full text-center">
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
                {ads.map((ad) => (
                    <div className="" key={ad.images[0].key}>
                        <a href="#">
                            <Image
                                width={635}
                                height={450}
                                className="mx-auto"
                                src={ad.images[0].url}
                                alt="advertisement area"
                            />
                        </a>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default AdvertHeroCarousel;
