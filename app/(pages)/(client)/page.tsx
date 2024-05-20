import LatestNews from './components/LatestNews';
import Hero from './components/Hero';
import Videos from './components/Videos';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export default async function Home({ searchParams }: { searchParams: Params }) {
    let page = searchParams['page'] ?? '1';

    return (
        <main id="content">
            <Hero />
            <LatestNews page={page} />
            <Videos />
        </main>
    );
}
