'use client';

import { IconType } from 'react-icons';

interface CategoryInputProps {
  onClick: (value: string) => void;
  label: string;
  icon: IconType;
  selected: boolean;
}

export default function CategoryInput({
  icon: Icon,
  label,
  selected,
  onClick,
}: CategoryInputProps) {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
  flex
  flex-col
  gap-3
  rounded-xl
  border-2
  p-4
  transition
  hover:border-black
  cursor-pointer
  ${selected ? 'border-black' : 'border-neutral-200'}
  `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
}
