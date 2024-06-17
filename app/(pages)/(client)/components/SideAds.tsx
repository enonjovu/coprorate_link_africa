import AdvertHeroCarousel from '@/app/_components/Advert/AdvertHeroCarousel';
import config from '@/lib/config';
import { AdvertDocument } from '@/lib/document-types';

const rootUrl = config.BASE_URL;

export default async function SideAds() {
    const res = await fetch(rootUrl + '/api/adverts/side', {
        cache: 'no-store',
    });

    const adverts = (await res.json()) as AdvertDocument[];

    return <AdvertHeroCarousel adverts={adverts} />;
}
