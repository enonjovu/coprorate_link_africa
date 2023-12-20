import Ads from "./Advertisment";

const TopStories = () => {
    return ( 
        <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-last">
            <div className="text-sm py-6 sticky">
                <Ads/>
            </div>
            <div className="w-full bg-white hidden md:block">
                <div className="mb-6">
                    <div className="p-4 bg-gray-100">
                    <h2 className="text-lg font-bold text-black">Most Popular</h2>
                    </div>
                    <ul className="post-number">
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a className="text-lg font-bold px-6 py-3 flex flex-row items-center text-black" href="#">Why the world would end without political polls</a>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a className="text-lg font-bold px-6 py-3 flex flex-row items-center text-black" href="#">Meet The Man Who Designed The Ducati Monster</a>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a className="text-lg font-bold px-6 py-3 flex flex-row items-center text-black" href="#">2020 Audi R8 Spyder spy shots release</a>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a className="text-lg font-bold px-6 py-3 flex flex-row items-center text-black" href="#">Lamborghini makes Huracán GT3 racer faster for 2019</a>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a className="text-lg font-bold px-6 py-3 flex flex-row items-center text-black" href="#">ZF plans $14 billion autonomous vehicle push, concept van</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default TopStories;