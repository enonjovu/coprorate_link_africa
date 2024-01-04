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
                className="relative w-full h-full" // Set initial height using Tailwind classes
            >
                <div className="">
                    <a href="#">
                        <Image width={635} height={450} className="mx-auto" src="/src/img/advertise.jpg" alt="advertisement area"/>
                    </a>
                </div>

                <div className="">
                    <a href="#">
                        <Image width={635} height={450} className="mx-auto" src="/src/img/advertise.jpg" alt="advertisement area"/>
                    </a>
                </div>
            </Carousel>
        </div>
     );
}
 
export default Ads;