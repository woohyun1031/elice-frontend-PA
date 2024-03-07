import React from 'react';

export default function PageNum({
  value,
  isCurrent,
}: {
  value: number;
  isCurrent: boolean;
}) {
  return (
    <button
      className={`hover:text-elice hover:bg-body h-6 w-6 cursor-pointer rounded duration-300
       ${isCurrent ? 'bg-elice text-white' : 'text-page'}`}
    >
      {value}
    </button>
  );
}
