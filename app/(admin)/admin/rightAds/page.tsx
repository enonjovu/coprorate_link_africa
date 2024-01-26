import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import SideAdsListingComponent from "../../components/SideAdsListing";

const AllTopAds = ({ searchParams, }: { searchParams: Params }) => {
    let page = searchParams['page'] ?? "1";
    return (
        <SideAdsListingComponent page={page} />
    );
}

export default AllTopAds;