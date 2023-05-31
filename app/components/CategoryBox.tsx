'use client';
import { IconType } from 'react-icons';

interface Category {
  label: string;
  icon: IconType;
  description: string;
}

interface CategoryBoxPros {
  category: Category;
  selected?: boolean;
}

export default function CategoryBox(category: CategoryBoxPros) {
  return <div>CategoryBox</div>;
}
