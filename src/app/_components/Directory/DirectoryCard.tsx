import { DirectoryDocument } from '@/lib/document-types';
import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function DirectoryCard(props: { directory: DirectoryDocument }) {
    return (
        <div className="flex w-full items-start overflow-hidden rounded-md border p-2">
            <div className="shrink-0">
                <a href={`/directory/${props.directory.id}`}>
                    <img className="size-24 rounded-md" src={props.directory.logo[0]?.url} alt={props.directory.name} />
                </a>
            </div>
            <div className="ml-2 flex flex-1 flex-col space-y-2 p-1">
                <h3 className="text-lg font-bold leading-tight text-black">
                    <a href={`/directory/${props.directory.id}`}>{props.directory.name}</a>
                </h3>

                {props.directory.email && (
                    <span className="flex items-center space-x-2 text-gray-700">
                        <EnvelopeIcon className="size-4" />
                        <p className="text-sm text-gray-700">{props.directory.email}</p>
                    </span>
                )}

                {props.directory.phone && (
                    <span className="flex items-center space-x-2 text-gray-700">
                        <DevicePhoneMobileIcon className="size-4" />
                        <p className="text-sm text-gray-700">{props.directory.phone}</p>
                    </span>
                )}
            </div>
        </div>
    );
}
