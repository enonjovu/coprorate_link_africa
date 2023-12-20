"use client"
// Import necessary modules
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

// Your Next.js component
function Slider() {
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
      className="relative h-full overflow-hidden" // Set initial height using Tailwind classes
    >
     
        <div className="relative hover-img max-h-[60vh] overflow-hidden">
            <a href="#">
                <img className="max-w-full w-full mx-auto h-auto" src="src/img/dummy/img1.jpg" alt="Image description"/>
            </a>
        <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
            <a href="#">
            <h2 className="text-3xl font-bold capitalize text-white mb-3">Slide 1</h2>
            </a>
            <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>
            <div className="pt-2">
            <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Europe</div>
            </div>
        </div>
        </div>
    


        <div className="relative hover-img max-h-[60vh] overflow-hidden">
        <a href="#">
            <img className="max-w-full w-full mx-auto h-auto" src="src/img/dummy/img1.jpg" alt="Image description"/>
        </a>
        <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
            <a href="#">
            <h2 className="text-3xl font-bold capitalize text-white mb-3">Slide 2</h2>
            </a>
            <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>
            <div className="pt-2">
            <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Europe</div>
            </div>
        </div>
        </div>

        <div className="relative hover-img max-h-[60vh] overflow-hidden">
        <a href="#">
            <img className="max-w-full w-full mx-auto h-auto" src="src/img/dummy/img3.jpg" alt="Image description"/>
        </a>
        <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
            <a href="#">
            <h2 className="text-3xl font-bold capitalize text-white mb-3">Slide 3</h2>
            </a>
            <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>
            <div className="pt-2">
            <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Europe</div>
            </div>
        </div>
        </div>
    </Carousel>
  );
}

export default Slider;
