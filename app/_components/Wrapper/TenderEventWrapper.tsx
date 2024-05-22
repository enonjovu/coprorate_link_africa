import TopStories from '@/app/(pages)/(client)/components/TopStories';
import { PropsWithChildren } from 'react';

export default function TenderEventWrapper(props: PropsWithChildren) {
    return (
        <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
                {props.children}

                <TopStories />
            </div>
        </div>
    );
}
