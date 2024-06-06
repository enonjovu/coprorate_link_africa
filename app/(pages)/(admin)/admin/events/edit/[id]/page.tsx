import { getEventById } from '@/lib/repositories/EventRepository';
import { notFound } from 'next/navigation';
import EditEventComponent from './EditEventForm';
import EventRepository from '@/app/_db/repositories/EventRepository';

type PageProps = {
    params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
};

const EditEvent = async ({ params }: PageProps) => {
    const id = params.id;

    const event = await getEventById(id);

    if (!event) {
        return notFound();
    }

    const eventPropeties = EventRepository.getPropeties(event);

    return <EditEventComponent event_id={id} event={eventPropeties} />;
};

export default EditEvent;
