import { useCountries } from '@/app/hooks/useCountries';
import { SafeUser } from '@/app/types';
import React from 'react';
import Heading from '../Heading';
import Image from 'next/image';
import HeartButton from '../HeartButton';

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
}

export default function ListingHead({
  title,
  imageSrc,
  locationValue,
  id,
  currentUser,
}: ListingHeadProps) {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />

      <div className="relative h-[60vh] overflow-hidden rounded-xl w-full">
        <Image
          src={imageSrc}
          fill
          alt="Image"
          className="w-full object-cover "
        />

        <div className="absolute right-5 top-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
}
