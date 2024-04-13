import Image from "next/image";
import TopAds from './TopAds';
import SearchForm from "./SearchForm";
import AuthButtons from "./AuthButons";


const Navbar = () => {
  return (
    <>
      {/* <TopAds /> */}
      <header className="flex flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-white border-b border-gray-200 text-sm pb-2 sm:pb-0 dark:border-red-700 dark:bg-gray-100">
        <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-12 lg:px-16" aria-label="Global">
          <div className="flex items-center justify-between h-16">
            <a className="h-full flex py-4 items-center justify-center text-xl font-semibold dark:text-white" href="/" aria-label="Brand">
              <Image src={"/src/img/logo.png"} width={150} height={150} alt="" />
            </a>
            <div className="sm:hidden ">
              <button type="button" className="hs-collapse-toggle w-9 h-9 flex justify-center 
            items-center text-sm font-semibold rounded-lg border border-gray-200 
            text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none
             dark:text-white dark:border-red-500 dark:hover:bg-red-500 
             dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-red-600 dark:bg-red-800"
                data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              {/* News */}
              <a className="font-medium text-gray-800 hover:text-gray-500 sm:py-6 dark:text-red-500 dark:hover:text-gray-400" href="/news/category/mining">Mining</a>
              <a className="font-medium text-gray-800 hover:text-gray-500 sm:py-6 dark:text-red-500 dark:hover:text-gray-400" href="/news/category/energy">Energy </a>
              <a className="font-medium text-gray-800 hover:text-gray-500 sm:py-6 dark:text-red-500 dark:hover:text-gray-400" href="/news/category/tourism">Tourism </a>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button type="button" className="flex items-center w-full text-gray-800 hover:text-gray-500 font-medium dark:text-red-500 dark:hover:text-gray-400">
                  Directory
                  <svg className="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2  sm:dark:border before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500" href="/directory">
                    Company Profiles
                  </a>
                  <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500" href="/leaders">
                    Business Leaders
                  </a>
                </div>
              </div>

              <a className="font-medium text-gray-800 hover:text-gray-500 sm:py-6 dark:text-red-500 dark:hover:text-gray-400" href="/tenders">Tenders</a>
              <a className="font-medium text-gray-800 hover:text-gray-500 sm:py-6 dark:text-red-500 dark:hover:text-gray-400" href="/events">Events</a>
              <a className="font-medium text-gray-800 hover:text-gray-500 sm:py-6 dark:text-red-500 dark:hover:text-gray-400" href="/services">Services</a>
              <a className="font-medium text-gray-800 hover:text-gray-500 sm:py-6 dark:text-red-500 dark:hover:text-gray-400" href="/about">About</a>



              <SearchForm />
              <AuthButtons />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;