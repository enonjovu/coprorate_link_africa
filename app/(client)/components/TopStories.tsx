import EveTend from './EveTend';
import SideAds from './SideAds';

const TopStories = () => {
    return (
        <div className="order-last w-full max-w-full flex-shrink lg:w-1/3 lg:pb-8 lg:pl-8 lg:pt-14">
            <div className="sticky mb-6 text-sm">{/* <SideAds /> */}</div>
            <EveTend />
        </div>
    );
};

export default TopStories;
