'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

type adsProps = {
    _id: string;
    images: { key: string; url: string }[];
    date: string;
}[];

const TopAdsSlider = ({ topAds }: { topAds: adsProps }) => {
    return (
        <div className="m-0 max-h-[339px] w-full bg-black md:h-full">
            <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={4000} // Set autoplay interval to 5 seconds
                stopOnHover={true}
                swipeable={true}
                emulateTouch={true}
                dynamicHeight={false}
                centerMode={false}
                centerSlidePercentage={100}
                showThumbs={false}
                className="relative m-0 max-h-[339px] overflow-hidden md:h-full" // Set initial height using Tailwind classes
            >
                {topAds?.map((advert) => (
                    <div
                        className="flex h-full w-full items-center justify-center text-white"
                        key={advert.images[0].key}
                    >
                        <img src={advert.images[0].url} className="h-full w-full object-cover" alt="" />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default TopAdsSlider;
