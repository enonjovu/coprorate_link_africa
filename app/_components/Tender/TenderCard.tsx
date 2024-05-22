import { TenderDocument } from '@/lib/document-types';
import Link from 'next/link';

export default function TenderCard(props: { tender: TenderDocument }) {
    return (
        <div className="relative flex max-w-sm flex-col overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Link href={`tenders/${props.tender.id}`} className="absolute left-0 top-0 z-20 h-full w-full ">
                &nbsp;
            </Link>
            <div className="h-auto overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                    <img src="/src/img/logo.png" className="h-full w-full object-cover" alt="" />
                </div>
            </div>
            <div className="bg-white px-3 py-4">
                <h3 className="mb-2 text-center font-bold text-black">{props.tender.title}</h3>
            </div>
        </div>
    );
}
