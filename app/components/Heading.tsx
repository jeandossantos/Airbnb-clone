'use client';

interface HeadingProps {
  center?: boolean;
  subtitle?: string;
  title: string;
}

export default function Heading({ center, title, subtitle }: HeadingProps) {
  return (
    <div
      className={`
    ${center ? 'text-center' : 'text-start'}

  `}
    >
      <div className="text-2xl font-bold ">{title}</div>

      <div className="mt-2 font-light text-neutral-500">{subtitle}</div>
    </div>
  );
}
