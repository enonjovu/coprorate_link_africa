import { fetchAllTopAds } from "@/app/action";
import TopAdsSlider from "./TopAdsSlider";

const TopAds = async () => {
    const topAds = await fetchAllTopAds();
    return (
        <TopAdsSlider topAds={topAds} />
    );
}

export default TopAds;