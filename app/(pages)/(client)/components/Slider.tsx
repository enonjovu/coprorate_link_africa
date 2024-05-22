'use client';
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
            <div className="hover-img relative max-h-[60vh] overflow-hidden">
                <a href="#">
                    <img
                        className="mx-auto h-auto w-full max-w-full"
                        src="src/img/dummy/img1.jpg"
                        alt="Image description"
                    />
                </a>
                <div className="bg-gradient-cover absolute bottom-0 w-full px-5 pb-5 pt-8">
                    <a href="#">
                        <h2 className="mb-3 text-3xl font-bold capitalize text-white">Slide 1</h2>
                    </a>
                    <p className="hidden text-gray-100 sm:inline-block">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                        very helpfull for generate default content..
                    </p>
                    <div className="pt-2">
                        <div className="text-gray-100">
                            <div className="mr-2 inline-block h-3 border-l-2 border-red-600"></div>Europe
                        </div>
                    </div>
                </div>
            </div>

            <div className="hover-img relative max-h-[60vh] overflow-hidden">
                <a href="#">
                    <img
                        className="mx-auto h-auto w-full max-w-full"
                        src="src/img/dummy/img1.jpg"
                        alt="Image description"
                    />
                </a>
                <div className="bg-gradient-cover absolute bottom-0 w-full px-5 pb-5 pt-8">
                    <a href="#">
                        <h2 className="mb-3 text-3xl font-bold capitalize text-white">Slide 2</h2>
                    </a>
                    <p className="hidden text-gray-100 sm:inline-block">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                        very helpfull for generate default content..
                    </p>
                    <div className="pt-2">
                        <div className="text-gray-100">
                            <div className="mr-2 inline-block h-3 border-l-2 border-red-600"></div>Europe
                        </div>
                    </div>
                </div>
            </div>

            <div className="hover-img relative max-h-[60vh] overflow-hidden">
                <a href="#">
                    <img
                        className="mx-auto h-auto w-full max-w-full"
                        src="src/img/dummy/img3.jpg"
                        alt="Image description"
                    />
                </a>
                <div className="bg-gradient-cover absolute bottom-0 w-full px-5 pb-5 pt-8">
                    <a href="#">
                        <h2 className="mb-3 text-3xl font-bold capitalize text-white">Slide 3</h2>
                    </a>
                    <p className="hidden text-gray-100 sm:inline-block">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                        very helpfull for generate default content..
                    </p>
                    <div className="pt-2">
                        <div className="text-gray-100">
                            <div className="mr-2 inline-block h-3 border-l-2 border-red-600"></div>Europe
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}

export default Slider;
