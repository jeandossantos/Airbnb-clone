import { useCountries } from '@/app/hooks/useCountries';
import { SafeUser } from '@/app/types';
import React from 'react';
import { IconType } from 'react-icons';
import Avatar from '../Avatar';
import ListingCategory from './ListingCategory';
import dynamic from 'next/dynamic';

interface ListingInfoProps {
  user: SafeUser;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  description: string;
  bathroomCount: number;
  roomCount: number;
  guestCount: number;
  locationValue: string;
}

export default function ListingInfo({
  user,
  category,
  description,
  bathroomCount,
  roomCount,
  guestCount,
  locationValue,
}: ListingInfoProps) {
  const { getByValue } = useCountries();

  const Map = dynamic(() => import('../Map'), {
    ssr: false,
  });

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="flex flex-col col-span-4 gap-8 ">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2 text-xl font-semibold">
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>

        <div className="flex items-center gap-4 font-light text-neutral-500">
          <div>{roomCount} Rooms</div>
          <div>{guestCount} guests</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          description={category.description}
          label={category.label}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />

      <Map center={coordinates} />
    </div>
  );
}
