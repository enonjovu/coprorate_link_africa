import { BsFacebook, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";

const Footer = () => {
    return ( 
        <>
            {/* =========={ FOOTER }==========  */}
            <footer className="bg-black text-gray-400">
                {/*Footer content*/}
                <div id="footer-content" className="relative pt-8 xl:pt-16 pb-6 xl:pb-12">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 overflow-hidden">
                    <div className="flex flex-wrap flex-row lg:justify-between -mx-3">
                    <div className="flex-shrink max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
                        <div className="flex items-center mb-2">
                        <span className="text-3xl leading-normal mb-2 font-bold text-gray-100 mt-2">Coporate Link Africa</span>
                        {/* <img src="src/img-min/logo.png" alt="LOGO"> */}
                        </div>
                        <p>Simplified Bussines Narratives.</p>
                        <ul className="space-x-3 mt-6 mb-6 Lg:mb-0">
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
                                <li className="py-1 hover:text-white"><a href="#">Advertisment</a></li>
                                <li className="py-1 hover:text-white"><a href="#">Content Creation</a></li>
                                <li className="py-1 hover:text-white"><a href="#">News Coverage</a></li>
                                <li className="py-1 hover:text-white"><a href="#">Documentaries</a></li>
                                <li className="py-1 hover:text-white"><a href="#">Graphics Design</a></li>
                                </ul>
                            </div>

                            {/* About us */}
                            <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                                <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">About us</h4>
                                <ul>
                                <li className="py-1 hover:text-white"><a href="#">Our Mission</a></li>
                                <li className="py-1 hover:text-white"><a href="#">Our Vision</a></li>
                                <li className="py-1 hover:text-white"><a href="#">Our Story</a></li>
                                <li className="py-1 hover:text-white"><a href="#">Our Team</a></li>
                                </ul>
                            </div>

                            {/* Contact US */}
                            <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                                <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Contact Us</h4>
                                <ul>
                                <li className="py-1 hover:text-white"><a href="#">info@clafrica.online</a></li>
                                <li className="py-1 hover:text-white"><a href="#">+265 123 456 789</a></li>
                                <li className="py-1 hover:text-white"><a href="#">+265 123 456 789</a></li>
                                <li className="py-1 hover:text-white"><a href="#">Limbe, Manila House room 254</a></li>
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
                        <p className="d-block my-3">Copyright © Coporate Link Africa | All rights reserved.</p>
                    </div>
                    </div>
                </div>
                </div>{/*End footer copyright*/}
            </footer>{/* end footer */}

            {/* =========={ SCROLL TO TOP }==========  */}
            <a href="#" className="back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-800 right-4 bottom-4 hidden" aria-label="Scroll To Top">
                {/* <svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
                <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z" clip-rule="evenodd"></path>
                </svg> */}
            </a>
        </>
     );
}
 
export default Footer;