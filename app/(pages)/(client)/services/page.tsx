import { BsCameraVideo, BsMegaphone, BsMic, BsNewspaper, BsSearch } from 'react-icons/bs';
import { FaChartPie } from 'react-icons/fa';

const sections = [
    {
        title: 'Corporate News Coverage',
        content:
            'We specialize in providing real-time, insightful news coverage that goes beyond the surface,unraveling the intricate dynamics of the corporate landscape across Africa.',
        icon: <BsNewspaper size={40} className="text-black dark:text-white" />,
    },
    {
        title: 'Advertising',
        content:
            'Our advertising services are designed to cut through the noise and deliver your message to the right audience. From creative concept development to strategic placement, we ensure your brand stands out in the crowded media landscape.',
        icon: <BsMegaphone size={40} className="text-black dark:text-white" />,
    },
    {
        title: 'In-Depth Analysis',
        content:
            'Our team of seasoned analysts delves deep into industry trends, offering in-depth analysis and thought leadership that guides businesses in navigating the complexities of the African business terrain.',
        icon: <BsSearch size={40} className="text-black dark:text-white" />,
    },
    {
        title: 'Sector-Specific Reports',
        content:
            'We provide specialized reports offering granular insights into various industries, helping businesses stay ahead in a rapidly evolving market.',
        icon: <FaChartPie size={40} className="text-black dark:text-white" />,
    },

    {
        title: 'Public Relations (PR)',
        content:
            'Our PR services are tailored to enhance your corporate image, manage reputations, and build meaningful relationships with stakeholders. From strategic communication plans to crisis management, we are your trusted partner in shaping and safeguarding your public image.',
        icon: <BsMic size={40} className="text-black dark:text-white" />,
    },
    {
        title: 'Media Solutions',
        content:
            'As a comprehensive media company, we go beyond news reporting. Our suite of services includes Public Relations (PR), Advertising, Content Development and Creation, Documentaries, and more. We are your strategic partner in crafting and disseminating compelling corporate narratives.',
        icon: <BsCameraVideo size={40} className="text-black dark:text-white" />,
    },
];

function ServiceSection(props: { title: string; content: string; icon: React.ReactNode }) {
    return (
        <div className="shadow-2 mb-9 rounded-[20px] bg-white p-8  text-black hover:shadow-lg md:px-7 xl:px-10 dark:bg-[#1d1d1d] dark:text-white">
            <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
                {props.icon}
            </div>
            <h4 className="text-dark mb-[14px] text-2xl font-semibold dark:text-white">{props.title}</h4>
            <p className="text-body-color dark:text-dark-6 text-justify tracking-tight">{props.content}</p>
        </div>
    );
}
const ServicesPage = () => {
    return (
        <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                    <div className="mx-auto my-12 max-w-[510px] text-center lg:mb-20">
                        <h2 className="text-dark mb-3 text-3xl font-bold leading-[1.2] sm:text-4xl md:text-[40px] dark:text-white">
                            Our Services
                        </h2>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">Here is what we offer</p>
                    </div>
                </div>
            </div>

            <div className="-mx-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sections.map((sect) => (
                    <ServiceSection key={sect.title} {...sect} />
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
