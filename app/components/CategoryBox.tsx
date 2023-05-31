'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { IconType } from 'react-icons';
import queryString from 'query-string';
import { useCallback } from 'react';

interface Category {
  label: string;
  icon: IconType;
  description: string;
}

interface CategoryBoxPros {
  category: Category;
  selected?: boolean;
}

export default function CategoryBox({
  category: { icon: Icon, label },
  selected,
}: CategoryBoxPros) {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = queryString.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`
    flex
    flex-col
    items-center
    justify-center
    gap-2
    p-3
    border-b-2
    hover:text-neutral-800
    transition

    cursor-pointer
    ${selected ? 'border-b-neutral-800' : 'border-transparent'}
    ${selected ? 'text-neutral-800' : 'text-neutral-500'}
  `}
    >
      <Icon size={26} />
      <div className="text-sm font-medium ">{label}</div>
    </div>
  );
}
