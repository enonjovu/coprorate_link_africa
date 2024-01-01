import Ads from "./Advertisment";
import EveTend from "./EveTend";

const TopStories = () => {
    return ( 
        <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-last">
            <div className="text-sm py-6 sticky">
                <Ads/>
            </div>
            <EveTend/>
        </div>
     );
}
 
export default TopStories;