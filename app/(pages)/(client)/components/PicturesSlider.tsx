'use client';
import Image from 'next/image';
// Import necessary modules
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

type imagesProps = {
    images: {
        url: string;
        key: string;
    }[];
};

// Your Next.js component
function PicturesSlider({ images }: imagesProps) {
    return (
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
            {images?.map((image, index) => (
                <div key={image.key} className="relative h-full w-full overflow-hidden">
                    <div className="inset-0 flex h-full w-full items-center justify-center">
                        <Image
                            width={1500} // You can remove fixed width for full responsiveness
                            height={510} // You can remove fixed height for full responsiveness
                            quality={100}
                            layout="responsive"
                            objectFit="cover" // Ensure aspect ratio is maintained
                            className="rounded-lg"
                            src={image.url}
                            alt="Image description"
                        />
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

export default PicturesSlider;
