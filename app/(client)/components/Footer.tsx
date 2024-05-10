import { BsEnvelope, BsFacebook, BsLinkedin, BsPhone, BsTwitterX, BsYoutube, BsInstagram } from 'react-icons/bs';
import { FaArrowAltCircleUp, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const socialHandlers = [
        {
            name: 'facebook',
            icon: <BsFacebook size={20} color={'#fff'} />,
            link: 'https://www.facebook.com/profile.php?id=61554654021876',
        },
        {
            name: 'youtube',
            icon: <BsYoutube size={20} color={'#ffffff'} />,
            link: 'https://www.youtube.com/channel/UCYH5G4cIMBvwG8h8tGwYmDw',
        },
        {
            name: 'Linkedin',
            icon: <BsLinkedin size={20} color={'#ffffff'} />,
            link: 'https://www.linkedin.com/company/82323263',
        },
        {
            name: 'instagram',
            icon: <BsInstagram size={20} color={'#ffffff'} />,
            link: 'hhttps://www.instagram.com/corporate_link_africa/',
        },
    ];

    return (
        <>
            {/* =========={ FOOTER }==========  */}
            <footer className="bg-black text-gray-400">
                {/*Footer content*/}
                <div id="footer-content" className="relative pb-6 pt-8 xl:pb-12 xl:pt-16">
                    <div className="mx-auto overflow-hidden px-3 xl:container sm:px-4 xl:px-2">
                        <div className="-mx-3 flex flex-row flex-wrap lg:justify-between">
                            <div className="w-full max-w-full flex-shrink px-3 md:w-1/4 lg:w-2/5 lg:pr-16">
                                <div className="mb-2  flex">
                                    {/* <img src="/src/img/logo.png" className="w-1/4 h-auto object-cover" alt="LOGO"/> */}
                                    <span className="mb-2 mt-2 text-3xl font-bold leading-normal text-gray-100">
                                        Corporate Link Africa
                                    </span>
                                </div>

                                <p>Simplified Bussines Narratives.</p>

                                <ul className="Lg:mb-0 mb-6 mt-6 flex space-x-8">
                                    {/* social links */}
                                    {socialHandlers.map((handle) => (
                                        <li className="inline-block" key={handle.name}>
                                            <a
                                                target="_blank"
                                                className="hover:text-gray-100"
                                                rel="noopener noreferrer"
                                                href={handle.link}
                                                title={handle.name}
                                            >
                                                {handle.icon}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="w-full max-w-full flex-shrink px-3 lg:w-3/5">
                                <div className="flex flex-row flex-wrap">
                                    {/* Services */}
                                    <div className="mb-6 w-1/2 max-w-full flex-shrink md:w-1/4 lg:mb-0">
                                        <h4 className="mb-3 text-base uppercase leading-normal text-gray-100">
                                            Services
                                        </h4>
                                        <ul>
                                            <li className="py-1 hover:text-white">
                                                <a href="/services">Advertising</a>
                                            </li>
                                            <li className="py-1 hover:text-white">
                                                <a href="/services">Corporate News Coverage</a>
                                            </li>
                                            <li className="py-1 hover:text-white">
                                                <a href="/services">Content Development</a>
                                            </li>
                                            <li className="py-1 hover:text-white">
                                                <a href="/services">Graphics Design</a>
                                            </li>
                                            <li className="py-1 hover:text-white">
                                                <a href="/services">Public Relations</a>
                                            </li>
                                            <li className="py-1 hover:text-white">
                                                <a href="/services">Documentaries</a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* About us */}
                                    <div className="mb-6 w-1/2 max-w-full flex-shrink md:w-1/4 lg:mb-0">
                                        <h4 className="mb-3 text-base uppercase leading-normal text-gray-100">
                                            About us
                                        </h4>
                                        <ul>
                                            <li className="py-1 hover:text-white">
                                                <a href="/about">Our Mission</a>
                                            </li>
                                            <li className="py-1 hover:text-white">
                                                <a href="/about">Our Vision</a>
                                            </li>
                                            <li className="py-1 hover:text-white">
                                                <a href="/about">Our Story</a>
                                            </li>
                                            <li className="py-1 hover:text-white">
                                                <a href="/about">Our Team</a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Contact US */}
                                    <div className="mb-6 w-1/2 max-w-full flex-shrink md:w-1/4 lg:mb-0">
                                        <h4 className="mb-3 text-base uppercase leading-normal text-gray-100">
                                            Contact Us
                                        </h4>
                                        <ul>
                                            <li className="py-1 hover:text-white">
                                                <a href="#" className="flex space-x-4">
                                                    <BsEnvelope size={20} color={'#fff'} />
                                                    <p>info@clafrica.online</p>
                                                </a>
                                            </li>

                                            <li className="py-1 hover:text-white">
                                                <a href="tel:+265885631138" className="flex space-x-4">
                                                    <BsPhone size={20} color={'#fff'} />
                                                    <p>+265 885 631 138</p>
                                                </a>
                                            </li>

                                            <li className="py-1 hover:text-white">
                                                <a href="tel:+265997572483" className="flex space-x-4">
                                                    <BsPhone size={20} color={'#fff'} />
                                                    <p>+265 997 572 483 </p>
                                                </a>
                                            </li>

                                            <li className="py-1 hover:text-white">
                                                <a href="#" className="flex space-x-2">
                                                    <FaMapMarkerAlt size={20} color={'#fff'} />
                                                    <p>Feeamanilah Building, Room 19, Limbe Blantyre</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Start footer copyright*/}
                <div className="footer-dark">
                    <div className="container border-t border-gray-200 border-opacity-10 py-4">
                        <div className="row">
                            <div className="col-12 col-md text-center">
                                <p className="d-block my-3">
                                    Copyright © Corporate Link Africa | All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End footer copyright*/}
            </footer>
            {/* end footer */}

            {/* =========={ SCROLL TO TOP }==========  */}
            <a
                href="#"
                className="back-top fixed bottom-4 right-4 hidden rounded border border-gray-100 bg-gray-100 p-4 text-gray-500 dark:border-gray-800 dark:bg-gray-900"
                aria-label="Scroll To Top"
            >
                <FaArrowAltCircleUp size={20} color={'#fff'} />
            </a>
        </>
    );
};

export default Footer;
