'use client';

import React from 'react';
import { BiSearch } from 'react-icons/bi';

export default function Search() {
  return (
    <div
      className="
    border-[1px]
    w-full
    md:w-auto
    py-2
    rounded-full
    shadow-sm
    hover:shadow-md
    transition
    cursor-pointer
  "
    >
      <div className="flex items-center justify-between ">
        <div className="px-6 text-sm font-semibold ">Anywhere</div>
        <div className="px-6 text-sm font-semibold border-x-[1px] flex-1 text-center  hidden sm:block">
          Any week
        </div>
        <div className="flex items-center gap-3 pl-6 pr-2 text-sm text-gray-600 ">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 text-white rounded-full bg-rose-500">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
