'use client';

import { PAGINATION } from '@constants/pagination';
import React from 'react';
import Arrow from './Arrow';
import PageNum from './PageNum';

const getPageCount = (total: number, current: number) => {
  const point = Math.floor(PAGINATION.SHOW / 2);
  const start = Math.max(current - point, 1);
  const end = Math.min(current + point, total);
  const length = end - start;

  return new Array(length + 1).fill(0).map((_, i) => start + i);
};

export default function Pagination({
  total,
  current,
}: {
  total: number;
  current: number;
}) {
  const pages = getPageCount(total, current);

  return (
    <div className="flex justify-center">
      <Arrow isEnable={true} isLeft />
      {pages.map((num) => (
        <PageNum value={num} isCurrent={num == current} />
      ))}
      <Arrow isEnable={false} />
    </div>
  );
}
