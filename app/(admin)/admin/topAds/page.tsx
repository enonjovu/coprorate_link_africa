import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import TopAdsListingComponent from "../../components/TopAdsListing";

const AllTopAds = ({ searchParams, }: { searchParams: Params }) => {
    let page = searchParams['page'] ?? "1";
    return (
        <TopAdsListingComponent page={page} />
    );
}

export default AllTopAds;