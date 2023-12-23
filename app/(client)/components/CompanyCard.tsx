import Image from "next/image";
import { BsEnvelope, BsGlobeEuropeAfrica, BsPhone } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
const CompanyCard = () => {
    return ( 
        <div className="flex flex-col md:flex-row flex-wrap max-w-full w-full">
                        {/* Compoany Description */}
                        <div className="w-full md:w-3/5 flex flex-col items-center rounded-2xl p-4 shadow-lg space-y-4">
                            <div className="w-40 h-40">
                                <Image src={"/src/img/logo.png"} className="w-full h-full object-cover" width={200} height={200} alt="Company Logo" />
                            </div>
                            <h1 className="text-3xl font-bold text-black">Company Name</h1>
                            <p className="text-gray-900 w-11/12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque laudantium fuga non error exercitationem maxime! Ea expedita vero, quasi magni earum eaque quaerat aperiam quas, dolore qui repellendus numquam incidunt corporis voluptatibus commodi omnis accusantium saepe modi similique odit! Ipsam.</p>
                            <p className="text-gray-900 w-11/12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque laudantium fuga non error exercitationem maxime! Ea expedita vero, quasi magni earum eaque quaerat aperiam quas, dolore qui repellendus numquam incidunt corporis voluptatibus commodi omnis accusantium saepe modi similique odit! Ipsam.</p>
                            <p className="text-gray-900 w-11/12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque laudantium fuga non error exercitationem maxime! Ea expedita vero, quasi magni earum eaque quaerat aperiam quas, dolore qui repellendus numquam incidunt corporis voluptatibus commodi omnis accusantium saepe modi similique odit! Ipsam.</p>
                        </div>
                        <div className="2-full md:w-1/3 flex flex-col items-center rounded-2xl p-4 shadow-lg space-y-4">
                            <h2 className="text-3xl font-bold text-black">
                                Contact Details
                            </h2>

                            <ul className="min-w-full flex flex-col">
                                <li className="rounded-md text-black h-20 w-full md:w-10/12 shadow-lg flex flex-row items-start justify-center pl-8">
                                    <div className="icon w-1/6 h-full flex justify-start items-center">
                                        <BsPhone size={20}/>
                                    </div>
                                    <div className="w-full md:w-3/4 flex flex-col h-full items-start justify-center">
                                        <p className="font-semibold">Phone</p>
                                        <span className="text-gray-500">088 600 74 74</span>
                                    </div>
                                </li>

                                <li className="rounded-md text-black h-20 w-full md:w-10/12 shadow-lg flex flex-row items-start justify-center pl-8">
                                    <div className="icon w-1/6 h-full flex justify-start items-center">
                                        <BsEnvelope size={20}/>
                                    </div>
                                    <div className="w-full md:w-3/4 flex flex-col h-full items-start justify-center">
                                        <p className="font-semibold">Email</p>
                                        <span className="text-gray-500">mphatsomtogolo30@gmail.com</span>
                                    </div>
                                </li>

                                <li className="rounded-md text-black h-20 w-full md:w-10/12 shadow-lg flex flex-row items-start justify-center pl-8">
                                    <div className="icon w-1/6 h-full flex justify-start items-center">
                                        <BsGlobeEuropeAfrica size={20}/>
                                    </div>
                                    <div className="w-full md:w-3/4 flex flex-col h-full items-start justify-center">
                                        <p className="font-semibold">Website</p>
                                        <a href="https://www.corporate-link-africa.vercel.app" className="text-gray-500">
                                            www.ourwebsite.com
                                        </a>
                                    </div>
                                </li>

                                <li className="rounded-md text-black h-20 w-full md:w-10/12 shadow-lg flex flex-row items-start justify-center pl-8">
                                    <div className="icon w-1/6 h-full flex justify-start items-center">
                                        <FaMapMarkerAlt size={20}/>
                                    </div>
                                    <div className="w-full md:w-3/4 flex flex-col h-full items-start justify-center">
                                        <p className="font-semibold">Address</p>
                                        <span className="text-gray-500">Mzuzu, Mzimba 3030</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
     );
}
 
export default CompanyCard;