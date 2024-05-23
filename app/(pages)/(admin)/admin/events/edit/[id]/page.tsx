import { getEventById } from '@/lib/repositories/EventRepository';
import { notFound } from 'next/navigation';
import EditEventComponent from './EditEventForm';

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

    return <EditEventComponent event={event} />;
};

export default EditEvent;
