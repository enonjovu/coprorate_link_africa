import AdvertHeroCarousel from '@/app/_components/Advert/AdvertHeroCarousel';
import { AdvertDocument } from '@/lib/document-types';
import env from '@/utils/env';

export default async function SideAds() {
    const res = await fetch(env.ROOT_LINK + '/api/adverts/side', {
        cache: 'no-store',
    });

    const adverts = (await res.json()) as AdvertDocument[];

    return <AdvertHeroCarousel adverts={adverts} />;
}
