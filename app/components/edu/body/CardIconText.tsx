import Image from 'next/image';
import React from 'react';

export default function CardIconText({
  id,
  src = '',
  label = '',
  value = '',
}: {
  id: number;
  src: string;
  label: string;
  value: string;
}) {
  return (
    <div className="mb-1 flex items-center gap-x-2">
      <Image src={src} alt={label} width={24} height={24} />
      <div className="text-icon_text inline-block">
        {label}: {value}
      </div>
    </div>
  );
}
