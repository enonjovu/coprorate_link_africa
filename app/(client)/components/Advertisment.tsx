"use client";

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
const Ads = () => {
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
                className="relative h-full max-h-[50vh] md:max-h-[70vh] overflow-hidden" // Set initial height using Tailwind classes
            >
                <div className="">
                    <a href="#">
                        <Image width={500} height={500} className="mx-auto" src="/src/img/chipofya.jpg" alt="advertisement area"/>
                    </a>
                </div>
                <div className="">
                    <a href="#">
                        <Image width={500} height={500} className="mx-auto" src="/src/img/mtumbuka.jpg" alt="advertisement area"/>
                    </a>
                </div>
                <div className="">
                    <a href="#">
                        <Image width={500} height={500} className="mx-auto" src="/src/img/ad.jpeg" alt="advertisement area"/>
                    </a>
                </div>

                <div className="">
                    <a href="#">
                        <Image width={500} height={500} className="mx-auto" src="/src/img/ad2.jpeg" alt="advertisement area"/>
                    </a>
                </div>
            </Carousel>
        </div>
     );
}
 
export default Ads;