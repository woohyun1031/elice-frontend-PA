'use client';

import { PAGINATION } from '@constants/pagination';
import { CoursesContext } from 'app/(main)/edu/form';
import { PaginationContext } from 'app/(main)/providers';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import Arrow from './Arrow';
import PageNum from './PageNum';

const getPageCount = (total: number, current: number) => {
  if (!current) return [];

  const point = Math.floor(PAGINATION.SHOW / 2);
  const start = Math.max(current - point, 1);
  const end = Math.min(current + point, total);
  const length = end - start;

  return new Array(length + 1).fill(0).map((_, i) => start + i);
};

export default function Pagination({
  total,
  courseLength,
}: {
  total: number;
  courseLength: number;
}) {
  const { offset, setOffset } = React.useContext(PaginationContext);
  const { setCourses, setCourseCount } = React.useContext(CoursesContext);
  const searchParams = useSearchParams();
  const currentPage = courseLength
    ? Math.floor(offset / PAGINATION.PAGES_LIMIT) + 1
    : 0;

  const endPage = Math.ceil(total / PAGINATION.PAGES_LIMIT);
  const pages = getPageCount(total, currentPage);

  async function handleOnClick(num: number) {
    const newParams =
      searchParams?.toString() +
      `&offset=${num * PAGINATION.PAGES_LIMIT}` +
      `&count=${PAGINATION.PAGES_LIMIT}`;
    await axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/getOrgCourseList?${newParams}`)
      .then((res) => res.data)
      .then((data) => {
        setOffset(num * PAGINATION.PAGES_LIMIT);
        setCourses(data.courses);
        setCourseCount(data.course_count);
      });
  }

  return (
    <div className="flex justify-center">
      <Arrow
        isEnable={currentPage > 1}
        isLeft
        onClick={() => handleOnClick(currentPage - 1)}
      />
      {pages.map((num) => (
        <PageNum
          key={num}
          value={num}
          isEnable={num === currentPage}
          onClick={() => handleOnClick(num)}
        />
      ))}
      <Arrow
        isEnable={currentPage < endPage}
        onClick={() => handleOnClick(currentPage + 1)}
      />
    </div>
  );
}
