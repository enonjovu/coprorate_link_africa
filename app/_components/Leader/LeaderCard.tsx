import { LeaderDocument } from '@/lib/document-types';
import { BsEye } from 'react-icons/bs';

export default function LeaderCard(props: { leader: LeaderDocument }) {
    return (
        <div className="relative flex max-w-sm flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <a href={`/leaders/${props.leader.id}`} className="absolute left-0 top-0 z-20 h-full w-full ">
                &nbsp;
            </a>
            <div className="h-auto overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                    <img src={props.leader.images[0].url} alt={`image of ${props.leader.name}`} />
                </div>
            </div>
            <div className="bg-white px-3 py-4">
                <h3 className="mb-2 text-lg font-bold text-black">{props.leader.name}</h3>
                <div className="flex items-center justify-between">
                    <p className="text-md text-gray-400">{props.leader.description}...</p>
                    <div className="relative z-40 flex items-center gap-2">
                        <a
                            className="flex flex-col items-center justify-center text-red-600 hover:text-red-700"
                            href={`/leaders/${props.leader.id}`}
                        >
                            <BsEye size={20} color="red" />
                            <span>view</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
