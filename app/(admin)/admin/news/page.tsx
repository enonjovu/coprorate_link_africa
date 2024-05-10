import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import ListingComponent from '../../components/ListingComponents';

const AllNews = ({ searchParams }: { searchParams: Params }) => {
    let page = searchParams['page'] ?? '1';
    return <ListingComponent page={page} />;
};

export default AllNews;
