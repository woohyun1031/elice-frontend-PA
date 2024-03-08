'use client';

import { COURSE_CONVERT_OBJECTS } from '@constants/course';
import { PAGINATION } from '@constants/pagination';
import convertObjectToQueryString from '@utils/convertObjectToQueryString';
import convertSearchParamsToCourseObject from '@utils/convertSearchParamsToCourse';
import { CoursesContext } from 'app/(main)/edu/form';
import { PaginationContext } from 'app/(main)/providers';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import Arrow from './Arrow';
import PageNum from './PageNum';

const getPageCount = (endPage: number, currentPage: number) => {
  if (!currentPage) return [];
  const slicePoint = Math.floor(PAGINATION.SHOW / 2);
  const startShow = Math.max(currentPage - slicePoint, 1);
  const endShow = Math.min(currentPage + slicePoint, endPage);
  let length = endShow - startShow;

  if (endPage >= PAGINATION.SHOW && endShow <= PAGINATION.SHOW) {
    length = PAGINATION.SHOW - startShow;
  }
  return new Array(length + 1).fill(0).map((_, i) => startShow + i);
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
  const pages = getPageCount(endPage, currentPage);

  async function handleOnClick(num: number) {
    const query = new URLSearchParams(searchParams?.toString());
    const paramsObject = Object.keys(COURSE_CONVERT_OBJECTS).reduce(
      (acc, cur) => {
        return { ...acc, [cur]: query.getAll(cur) };
      },
      {},
    );
    const courseObject = convertSearchParamsToCourseObject(paramsObject);
    const queryString = convertObjectToQueryString({
      ...courseObject,
      offset: `${(num - 1) * PAGINATION.PAGES_LIMIT}`,
      count: `${PAGINATION.PAGES_LIMIT}`,
    });
    await axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/getOrgCourseList?${queryString}`)
      .then((res) => res.data)
      .then((data) => {
        setOffset((num - 1) * PAGINATION.PAGES_LIMIT);
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
