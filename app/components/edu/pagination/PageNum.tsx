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
      type="button"
      className={`h-6 w-6 cursor-pointer rounded duration-300 hover:bg-body hover:text-elice
       ${isCurrent ? 'bg-elice text-white' : 'text-page'}`}
    >
      {value}
    </button>
  );
}
