import { fetchAllSideAds } from '@/app/action';
import SideAdsSlider from './SideAdsSlider';
const SideAds = async () => {
    const ads = await fetchAllSideAds();
    return <SideAdsSlider ads={ads} />;
};

export default SideAds;
