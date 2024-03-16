import EveTend from "./EveTend";
import SideAds from "./SideAds";

const TopStories = () => {
    return (
        <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-last">
            <div className="text-sm sticky mb-6">
                {/* <SideAds /> */}
            </div>
            <EveTend />
        </div>
    );
}

export default TopStories;