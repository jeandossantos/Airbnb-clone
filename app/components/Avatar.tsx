'use client';

import Image from 'next/image';
import React from 'react';

export default function Avatar() {
  return (
    <Image
      className="rounded-full"
      src={'/images/placeholder.jpg'}
      width={30}
      height={30}
      alt="Avatar"
    />
  );
}
