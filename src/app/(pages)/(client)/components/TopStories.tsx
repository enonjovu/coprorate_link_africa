import { Suspense } from 'react';
import EveTend from './EveTend';
import SideAds from './SideAds';

const LoadingDammy = () => <div className="h-52 w-full animate-pulse"></div>;

const TopStories = (props: { minimal?: boolean }) => {
    return (
        <div className="order-last w-full max-w-full flex-shrink lg:w-1/3 lg:pb-8 lg:pl-8 lg:pt-14">
            <div className="sticky mb-6 text-sm">
                <Suspense fallback={<LoadingDammy />}>
                    <SideAds />
                </Suspense>
            </div>
            <Suspense fallback={<LoadingDammy />}>
                <EveTend minimal={props.minimal} />
            </Suspense>
        </div>
    );
};

export default TopStories;
