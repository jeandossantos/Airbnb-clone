'use client';

import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  src: string | null | undefined;
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <Image
      className="rounded-full"
      src={src ? src : '/images/placeholder.jpg'}
      width={30}
      height={30}
      alt="Avatar"
    />
  );
}
