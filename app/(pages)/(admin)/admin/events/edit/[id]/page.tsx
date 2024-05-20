import EditEventComponent from '@/app/(pages)/(admin)/components/EditEvents';
import { fetchEventById } from '@/app/action';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

const EditEvent = async ({ params }: { params: Params }) => {
    const id = params.id;
    const event = await fetchEventById(id);

    return <EditEventComponent event={event} />;
};

export default EditEvent;
