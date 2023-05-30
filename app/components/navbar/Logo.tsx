'use client';

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Logo() {
  const router = useRouter();

  return (
    <Image
      alt="Logo"
      width={100}
      height={100}
      src={'/images/logo.png'}
      className="hidden cursor-pointer md:block"
    />
  );
}
