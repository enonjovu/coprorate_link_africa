import { DirectoryDocument } from '@/lib/document-types';

export default function DirectoryCard(props: { directory: DirectoryDocument }) {
    return (
        <div className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0">
            <div className="hover-img flex flex-row sm:block">
                <a href={`/directory/${props.directory.id}`}>
                    <img
                        className="mx-auto h-20 w-20 max-w-20 object-cover"
                        src={props.directory.logo[0]?.url}
                        alt="alt title"
                    />
                </a>
                <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                    <h3 className="mb-2 text-center text-2xl font-bold leading-tight text-black">
                        <a href={`/directory/${props.directory.id}`}>{props.directory.name}</a>
                    </h3>
                </div>
            </div>
        </div>
    );
}
