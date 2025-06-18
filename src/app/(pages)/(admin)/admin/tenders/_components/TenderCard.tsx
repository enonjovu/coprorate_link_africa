import { TenderDocument } from '@/lib/document-types';
import { deleteTender, fetchTenders } from '@/app/action';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import Link from 'next/link';
import { BsPencil, BsTrash } from 'react-icons/bs';
import DeleteTenderButton from './DeleteTenderButton';

export default function TenderCard({ tender }: { tender: TenderDocument }) {
    return (
        <div className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0">
            <div className="hover-img flex flex-row sm:block">
                <h1 className="text-center text-lg">{tender.title}</h1>
                <div className="roundeg-lg flex h-16 w-full items-center justify-center space-x-4 bg-red-700">
                    <button type="submit" className="cursor-pointer rounded-lg border-[1px] border-white p-2">
                        <BsPencil size={20} color={'#fff'} />
                    </button>
                    <DeleteTenderButton id={tender.id} />
                </div>
            </div>
        </div>
    );
}
