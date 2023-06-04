import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismaDB';
import { getCurrentUser } from '@/app/actions/getCurrentUser';

interface IParams {
  listingId?: string;
}

export async function POST(req: Response, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const { listingId } = params;

  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds.push(listingId);

  const user = await prisma.user.update({
    data: {
      favoriteIds,
    },
    where: {
      id: currentUser.id,
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(req: Response, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const { listingId } = params;

  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds = favoriteIds.filter((favoriteId) => favoriteId !== listingId);

  const user = await prisma.user.update({
    data: {
      favoriteIds,
    },
    where: {
      id: currentUser.id,
    },
  });

  return NextResponse.json(user);
}
