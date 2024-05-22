import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import DirectoryListingComponent from '../../components/DirectoryListing';

const AllDirectories = ({ searchParams }: { searchParams: Params }) => {
    let page = searchParams['page'] ?? '1';
    return <DirectoryListingComponent page={page} />;
};

export default AllDirectories;
