"use client"
import Image from 'next/image';
// Import necessary modules
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

type imagesProps = {
  images: {
    url: string;
    key: string;
  }[]
}

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
      {
        images?.map((image, index) =>
          <div key={image.key} className="w-full max-h-[60vh] h-[60vh] overflow-hidden">
            <Image key={image.key} width={474} height={510} quality={100} layout='responsive' className="w-full h-full object-cover rounded-lg" src={image.url} alt="Image description" />
          </div>

        )
      }

    </Carousel>
  );
}

export default PicturesSlider;
