import LatestNews from './components/LatestNews';
import Hero from './components/Hero';
import Videos from './components/Videos';

type PageProps = {
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ searchParams }: PageProps) {
    let page: string = (searchParams.page as string) ?? '1';

    return (
        <main id="content">
            <Hero />
            <LatestNews page={page} />
            <Videos />
        </main>
    );
}
