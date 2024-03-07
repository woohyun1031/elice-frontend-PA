import React from 'react';

export default function CardDescription({ label }: { label: string }) {
  return (
    <div className="text-filter-950 leading-card mb-2 line-clamp-2 overflow-hidden  text-ellipsis p-0 text-sm font-bold">
      {label}
    </div>
  );
}
