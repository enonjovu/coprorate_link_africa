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

          <Image width={1000} height={800} key={image.key} className="w-full h-[90%] object-cover rounded-lg" src={image.url} alt="Image description" />

        )
      }

    </Carousel>
  );
}

export default PicturesSlider;
