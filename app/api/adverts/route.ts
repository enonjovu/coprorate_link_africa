import AdvertRepository from '@/app/_db/repositories/AdvertRepository';
import { convertDocumentsToModelObjectCollection } from '@/lib/helpers';
import { getAllAdverts } from '@/lib/repositories/AdvertRepository';
import { NextResponse } from 'next/server';

export async function GET() {
    let adverts = await AdvertRepository.get({ options: { variant: 'normal' }, limit: 4 });

    adverts = convertDocumentsToModelObjectCollection(adverts);

    return NextResponse.json(adverts);
}
