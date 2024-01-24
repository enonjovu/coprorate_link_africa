import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import AdsListingComponent from "../../components/AdsListing";

const AllTopAds = ({ searchParams, }: { searchParams: Params }) => {
    let page = searchParams['page'] ?? "1";
    return (
        <AdsListingComponent page={page} />
    );
}

export default AllTopAds;