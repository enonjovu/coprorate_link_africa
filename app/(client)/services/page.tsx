import { BsNewspaper } from "react-icons/bs";


const ServicesPage = () => {
    return ( 
        <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Services
              </h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Here is what we offer
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
            <div className="text-black dark:text-white mb-9 rounded-[20px] bg-white  p-10 shadow-2 hover:shadow-lg dark:bg-[#1d1d1d] md:px-7 xl:px-10">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
                    <BsNewspaper size={50} className='text-black dark:text-white'/>
                </div>
                <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">News Coverage</h4>
                <p className="text-body-color dark:text-dark-6">We provide up-to-the-minute coverage of corporate developments, mining, energy, financial markets, technological innovations, and industry trends, offering a comprehensive overview of the African business landscape.</p>
            </div>
        </div>
        </div>
      </div>
     );
}
 
export default ServicesPage;