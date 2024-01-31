import { fetchAllTopAds } from "@/app/action";
import TopAdsSlider from "./TopAdsSlider";

const TopAds = async () => {
    const topAds = await fetchAllTopAds();
    console.log("Top Ads => ", topAds)
    return (
        <TopAdsSlider topAds={topAds} />
    );
}

export default TopAds;