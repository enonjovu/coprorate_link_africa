import SideAdsSlider from './SideAdsSlider';
import ApplicationConfiguration from '@/lib/config';
import { AdvertDocument } from '@/lib/document-types';

const rootUrl = ApplicationConfiguration.BASE_URL;

const SideAds = async () => {
    const res = await fetch(rootUrl + '/api/adverts', {
        next: { revalidate: 0 },
    });

    const adverts = (await res.json()) as AdvertDocument[];

    return <SideAdsSlider ads={adverts} />;
};

export default SideAds;
