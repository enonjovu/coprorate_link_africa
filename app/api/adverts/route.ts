import { convertDocumentsToModelObjectCollection } from '@/lib/helpers';
import { getAllAdverts } from '@/lib/repositories/AdvertRepository';
import { NextResponse } from 'next/server';

export async function GET() {
    let adverts = await getAllAdverts();

    adverts = convertDocumentsToModelObjectCollection(adverts);

    return NextResponse.json(adverts);
}
