import React from 'react';

export default function CardLabel({ label }: { label: string }) {
  return (
    <div className="text-elice mb-2 overflow-hidden text-ellipsis p-0 text-xs font-bold leading-relaxed">
      {label}
    </div>
  );
}
