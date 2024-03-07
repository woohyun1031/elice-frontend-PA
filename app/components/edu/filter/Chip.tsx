'use client';

import React from 'react';

export default function Chip({ label }: { label: string }) {
  return (
    <button className="text-filter-950 bg-filter-50 border-filter-50 hover:bg-filter-100 active:text-filter-50 active:bg-elice group m-2 inline-flex h-10 min-w-8 cursor-pointer items-center rounded-3xl  px-5 py-2 duration-200 hover:font-bold">
      <span>{label ?? ''}</span>
    </button>
  );
}
