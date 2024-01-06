"use client";

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
const SideAds = () => {
    return (
        <div className="w-full h-full text-center">
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
                className="relative w-full h-full" // Set initial height using Tailwind classes
            >
                <div className="">
                    <a href="#">
                        <Image width={1000} height={1000} className="mx-auto" src="/src/img/ad13.jpeg" alt="advertisement area" />
                    </a>
                </div>
                <div className="">
                    <a href="#">
                        <Image width={1000} height={1000} className="mx-auto" src="/src/img/ad14.jpeg" alt="advertisement area" />
                    </a>
                </div>
                <div className="">
                    <a href="#">
                        <Image width={1000} height={1000} className="mx-auto" src="/src/img/ad15.jpeg" alt="advertisement area" />
                    </a>
                </div>
                <div className="">
                    <a href="#">
                        <Image width={1000} height={1000} className="mx-auto" src="/src/img/ad.jpeg" alt="advertisement area" />
                    </a>
                </div>

                <div className="">
                    <a href="#">
                        <Image width={1000} height={1000} className="mx-auto" src="/src/img/ad2.jpeg" alt="advertisement area" />
                    </a>
                </div>

                <div className="">
                    <a href="#">
                        <Image width={1000} height={1000} className="mx-auto" src="/src/img/ad3.jpeg" alt="advertisement area" />
                    </a>
                </div>
                <div className="">
                    <a href="#">
                        <Image width={1000} height={1000} className="mx-auto" src="/src/img/ad4.jpeg" alt="advertisement area" />
                    </a>
                </div>
            </Carousel>
        </div>
    );
}

export default SideAds;