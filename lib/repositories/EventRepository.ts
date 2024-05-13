import Event from '@/models/Event';
import type { PaginatorableParameters } from '../types';
import connectToDatabase from '@/lib/db';

type EventParamters = {
    title: String;
    images: String;
    description: String;
    eventDate: String;
    time: String;
    venue: String;
};

export async function getEvents(params: PaginatorableParameters) {
    await connectToDatabase();

    const EventsParameters: any = {};

    if (params.search) {
        EventsParameters['$text'] = { $search: params.search ? params.search : '' };
    }

    const results = await Event.find(EventsParameters)
        .sort({ date: -1 })
        .skip(params.skip ?? 12 * (params.currentPage - 1))
        .limit(params.limit ?? 12);

    return results;
}

export async function getEventsCount() {
    await connectToDatabase();
    const itemsCount = await Event.countDocuments({});

    return itemsCount;
}

export async function getEventById(id: string) {
    await connectToDatabase();

    const result = await Event.findOne({ _id: id });

    return result;
}

export async function deleteEventById(id: string) {
    await connectToDatabase();

    const result = await Event.findOneAndDelete({ _id: id });

    return result;
}

export async function createEvent(params: EventParamters) {
    await connectToDatabase();

    const date = Date.now();

    const result = await Event.create({
        ...params,
        date,
    });

    return result;
}

export async function updateEventById(id: string, params: Partial<EventParamters>) {
    await connectToDatabase();

    const updateData = {
        $set: params,
    };

    const result = await Event.updateOne({ _id: id }, updateData);
}
