import { BsEnvelope, BsFacebook, BsLinkedin, BsPhone, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaArrowAltCircleUp, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return ( 
        <>
            {/* =========={ FOOTER }==========  */}
            <footer className="bg-black text-gray-400">
                {/*Footer content*/}
                <div id="footer-content" className="relative pt-8 xl:pt-16 pb-6 xl:pb-12">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 overflow-hidden">
                    <div className="flex flex-wrap flex-row lg:justify-between -mx-3">
                        <div className="flex-shrink max-w-full w-full md:w-1/4 lg:w-2/5 px-3 lg:pr-16">
                            <div className="flex  mb-2">
                                {/* <img src="/src/img/logo.png" className="w-1/4 h-auto object-cover" alt="LOGO"/> */}
                                <span className="text-3xl leading-normal mb-2 font-bold text-gray-100 mt-2">Corporate Link Africa</span>
                            </div>

                            <p>Simplified Bussines Narratives.</p>

                            <ul className="flex space-x-8 mt-6 mb-6 Lg:mb-0">
                                {/*facebook*/}
                                <li className="inline-block">
                                    <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://facebook.com" title="Facebook">
                                        <BsFacebook size={20} color={"#fff"}/>
                                    </a>
                                </li>
                                {/*twitter*/}
                                <li className="inline-block">
                                    <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://twitter.com" title="Twitter">
                                        <BsTwitterX size={20} color={"#fff"}/>
                                    </a>
                                </li>
                                {/*youtube*/}
                                <li className="inline-block">
                                    <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://youtube.com" title="Youtube">
                                        <BsYoutube size={20} color={"#fff"}/>
                                    </a>
                                </li>
                                {/*instagram*/}
                                <li className="inline-block">
                                    <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://instagram.com" title="Instagram">
                                        <BsLinkedin size={20} color={"#fff"}/>
                                    </a>
                                </li>{/*end instagram*/}
                            </ul>
                        </div>

                        <div className="flex-shrink max-w-full w-full lg:w-3/5 px-3">
                            <div className="flex flex-wrap flex-row">
                                {/* Services */}
                                <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                                    <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Services</h4>
                                    <ul>
                                    <li className="py-1 hover:text-white"><a href="/services">Advertisment</a></li>
                                    <li className="py-1 hover:text-white"><a href="/services">Corporate News Coverage</a></li>
                                    <li className="py-1 hover:text-white"><a href="/services">Content Development</a></li>
                                    <li className="py-1 hover:text-white"><a href="/services">Graphics Design</a></li>
                                    <li className="py-1 hover:text-white"><a href="/services">Public Relations</a></li>
                                    <li className="py-1 hover:text-white"><a href="/services">Documentaries</a></li>
                                    </ul>
                                </div>

                                {/* About us */}
                                <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                                    <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">About us</h4>
                                    <ul>
                                    <li className="py-1 hover:text-white"><a href="/about">Our Mission</a></li>
                                    <li className="py-1 hover:text-white"><a href="/about">Our Vision</a></li>
                                    <li className="py-1 hover:text-white"><a href="/about">Our Story</a></li>
                                    <li className="py-1 hover:text-white"><a href="/about">Our Team</a></li>
                                    </ul>
                                </div>

                                {/* Contact US */}
                                <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                                    <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Contact Us</h4>
                                    <ul>
                                        <li className="py-1 hover:text-white">
                                            <a href="#" className="flex space-x-4">
                                                <BsEnvelope size={20} color={'#fff'}/> 
                                                <p>info@clafrica.online</p>
                                            </a>
                                        </li>
                                        
                                        <li className="py-1 hover:text-white">
                                            <a href="#" className="flex space-x-4">
                                                <BsPhone size={20} color={'#fff'}/>
                                                <p>+265 885 631 138</p>
                                            </a>
                                        </li>

                                        <li className="py-1 hover:text-white">
                                            <a href="#" className="flex space-x-4">
                                                <BsPhone size={20} color={'#fff'}/>
                                                <p>+265 997 572 483 </p>
                                            </a>
                                        </li>

                                        <li className="py-1 hover:text-white">
                                            <a href="#" className="flex space-x-2">
                                                <FaMapMarkerAlt size={20} color={'#fff'}/>
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
                <div className="container py-4 border-t border-gray-200 border-opacity-10">
                    <div className="row">
                    <div className="col-12 col-md text-center">
                        <p className="d-block my-3">Copyright © Corporate Link Africa | All rights reserved.</p>
                    </div>
                    </div>
                </div>
                </div>{/*End footer copyright*/}
            </footer>{/* end footer */}

            {/* =========={ SCROLL TO TOP }==========  */}
            <a href="#" className="back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-800 right-4 bottom-4 hidden" aria-label="Scroll To Top">
                <FaArrowAltCircleUp size={20} color={"#fff"}/>
            </a>
        </>
     );
}
 
export default Footer;