import { BsCameraVideo, BsMegaphone, BsMic, BsNewspaper, BsSearch } from 'react-icons/bs';
import { FaChartPie } from 'react-icons/fa';

const ServicesPage = () => {
    return (
        <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                    <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                        <h2 className="text-dark mb-3 text-3xl font-bold leading-[1.2] dark:text-white sm:text-4xl md:text-[40px]">
                            Our Services
                        </h2>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">Here is what we offer</p>
                    </div>
                </div>
            </div>

            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                    <div className="shadow-2 mb-9 rounded-[20px] bg-white p-10  text-black hover:shadow-lg dark:bg-[#1d1d1d] dark:text-white md:px-7 xl:px-10">
                        <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                            <BsNewspaper size={50} className="text-black dark:text-white" />
                        </div>
                        <h4 className="text-dark mb-[14px] text-2xl font-semibold dark:text-white">
                            Corporate News Coverage
                        </h4>
                        <p className="text-body-color dark:text-dark-6">
                            {' '}
                            We specialize in providing real-time, insightful news coverage that goes beyond the surface,
                            unraveling the intricate dynamics of the corporate landscape across Africa.
                        </p>
                    </div>
                </div>

                <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                    <div className="shadow-2 mb-9 rounded-[20px] bg-white p-10  text-black hover:shadow-lg dark:bg-[#1d1d1d] dark:text-white md:px-7 xl:px-10">
                        <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                            <BsMegaphone size={50} className="text-black dark:text-white" />
                        </div>
                        <h4 className="text-dark mb-[14px] text-2xl font-semibold dark:text-white">Advertising</h4>
                        <p className="text-body-color dark:text-dark-6">
                            Our advertising services are designed to cut through the noise and deliver your message to
                            the right audience. From creative concept development to strategic placement, we ensure your
                            brand stands out in the crowded media landscape.
                        </p>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                    <div className="shadow-2 mb-9 rounded-[20px] bg-white p-10  text-black hover:shadow-lg dark:bg-[#1d1d1d] dark:text-white md:px-7 xl:px-10">
                        <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                            <BsSearch size={50} className="text-black dark:text-white" />
                        </div>
                        <h4 className="text-dark mb-[14px] text-2xl font-semibold dark:text-white">
                            In-Depth Analysis
                        </h4>
                        <p className="text-body-color dark:text-dark-6">
                            Our team of seasoned analysts delves deep into industry trends, offering in-depth analysis
                            and thought leadership that guides businesses in navigating the complexities of the African
                            business terrain.
                        </p>
                    </div>
                </div>

                <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                    <div className="shadow-2 mb-9 rounded-[20px] bg-white p-10  text-black hover:shadow-lg dark:bg-[#1d1d1d] dark:text-white md:px-7 xl:px-10">
                        <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                            <FaChartPie size={50} className="text-black dark:text-white" />
                        </div>
                        <h4 className="text-dark mb-[14px] text-2xl font-semibold dark:text-white">
                            Sector-Specific Reports
                        </h4>
                        <p className="text-body-color dark:text-dark-6">
                            We provide specialized reports offering granular insights into various industries, helping
                            businesses stay ahead in a rapidly evolving market.
                        </p>
                    </div>
                </div>

                <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                    <div className="shadow-2 mb-9 rounded-[20px] bg-white p-10  text-black hover:shadow-lg dark:bg-[#1d1d1d] dark:text-white md:px-7 xl:px-10">
                        <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                            <BsMic size={50} className="text-black dark:text-white" />
                        </div>
                        <h4 className="text-dark mb-[14px] text-2xl font-semibold dark:text-white">
                            Public Relations (PR)
                        </h4>
                        <p className="text-body-color dark:text-dark-6">
                            Our PR services are tailored to enhance your corporate image, manage reputations, and build
                            meaningful relationships with stakeholders. From strategic communication plans to crisis
                            management, we are your trusted partner in shaping and safeguarding your public image.
                        </p>
                    </div>
                </div>

                <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                    <div className="shadow-2 mb-9 rounded-[20px] bg-white p-10  text-black hover:shadow-lg dark:bg-[#1d1d1d] dark:text-white md:px-7 xl:px-10">
                        <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                            <BsCameraVideo size={50} className="text-black dark:text-white" />
                        </div>
                        <h4 className="text-dark mb-[14px] text-2xl font-semibold dark:text-white">Media Solutions:</h4>
                        <p className="text-body-color dark:text-dark-6">
                            As a comprehensive media company, we go beyond news reporting. Our suite of services
                            includes Public Relations (PR), Advertising, Content Development and Creation,
                            Documentaries, and more. We are your strategic partner in crafting and disseminating
                            compelling corporate narratives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
