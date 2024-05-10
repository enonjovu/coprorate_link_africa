import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import TenderListingComponent from '../../components/TenderListing';

const AllAds = ({ searchParams }: { searchParams: Params }) => {
    let page = searchParams['page'] ?? '1';
    return <TenderListingComponent page={page} />;
};

export default AllAds;
