import { getCurrentUser } from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismaDB';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const {
    price,
    location,
    imageSrc,
    title,
    description,
    category,
    roomCount,
    bathroomCount,
    guestCount,
  } = await req.json();

  const listing = await prisma.listing.create({
    data: {
      imageSrc,
      title,
      description,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
