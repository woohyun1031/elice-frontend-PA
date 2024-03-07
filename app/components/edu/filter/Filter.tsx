'use client';

import React from 'react';
import Chip from './Chip';

export default function Filter({ label }: { label: string }) {
  return (
    <div className="border-filter-50 flex w-full border-b border-solid bg-white">
      <div className="bg-filter_header border-filter min-w-24 border-r border-solid px-4 py-5">
        <div className="text-filter-950 text-xs font-bold leading-normal">
          {label ?? ''}
        </div>
      </div>
      <div className="flex flex-wrap px-2 align-middle">
        <Chip label="무료" />
        <Chip label="유료" />
      </div>
    </div>
  );
}
