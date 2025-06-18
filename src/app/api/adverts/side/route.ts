import AdvertRepository from '@/app/_db/repositories/AdvertRepository';
import { convertDocumentsToModelObjectCollection } from '@/lib/helpers';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    let adverts = await AdvertRepository.get({ options: { variant: 'side' }, limit: 4 });

    adverts = convertDocumentsToModelObjectCollection(adverts);

    return NextResponse.json(adverts);
}
