import React from 'react';
import { IconType } from 'react-icons';

interface ListingCategoryProps {
  label: string;
  description: string;
  icon: IconType;
}

export default function ListingCategory({
  label,
  description,
  icon: Icon,
}: ListingCategoryProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Icon size={40} className="text-neutral-500" />

        <div className="text-lg font-semibold ">{label}</div>

        <div className="font-light text-neutral-500">{description}</div>
   
      </div>
    </div>
  );
}
