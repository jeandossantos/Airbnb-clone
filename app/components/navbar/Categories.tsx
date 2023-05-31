import React from 'react';
import { TbBeach } from 'react-icons/tb';
import { GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import Container from '../Container';
import CategoryBox from '../CategoryBox';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property has windmills!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern!',
  },
];
export default function Categories() {
  return (
    <Container>
      <div className="flex items-center justify-between pt-4 overflow-x-hidden ">
        {categories.map((category, index) => (
          <CategoryBox key={index} category={category} />
        ))}
      </div>
    </Container>
  );
}
