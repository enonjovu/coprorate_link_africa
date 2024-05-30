import Image from 'next/image';

export function AdvertBannerType1() {
    return (
        <div className="hover-img relative max-h-[395px] overflow-hidden">
            <Image
                className="mx-auto h-auto w-full max-w-full object-contain"
                width={1265}
                height={394}
                src="/src/img/tenders.jpg"
                alt="Image description"
            />
        </div>
    );
}
export function AdvertBannerType2() {
    return (
        <div className="w-full max-w-full flex-shrink px-3 pb-5">
            <div className="hover-img relative max-h-[50vh] overflow-hidden">
                {/*thumbnail*/}
                <a href="#">
                    <Image
                        className="mx-auto h-auto w-full max-w-full object-cover"
                        width={1300}
                        height={400}
                        src="/src/img/directory.jpg"
                        alt="Image description"
                    />
                </a>
            </div>
        </div>
    );
}

export default function AdvertBanner() {
    return <AdvertBannerType2 />;
}
