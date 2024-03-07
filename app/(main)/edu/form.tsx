'use client';

import CourseCard from '@components/edu/body/CourseCard';
import Filter from '@components/edu/filter/Filter';
import Pagination from '@components/edu/pagination/Pagination';
import SearchBox from '@components/edu/search/SearchBox';
import React from 'react';

function Wraper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`mb-2.5 w-full ${className}`}>{children}</section>;
}

export default function Form() {
  return (
    <React.Fragment>
      <Wraper>
        <SearchBox />
      </Wraper>
      <Wraper className="border-filter border border-solid">
        {new Array(1).fill(0).map(() => (
          <Filter label="유형" />
        ))}
      </Wraper>
      <Wraper>
        <div className="border-b border-solid border-gray-200 py-3">
          <div className="inline-block text-xs font-semibold">전체 227개</div>
        </div>
        <div className="flex flex-wrap items-center justify-start"></div>
      </Wraper>
      <Wraper className="flex flex-wrap gap-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Wraper>
      <Wraper className="mt-6 flex justify-center">
        <Pagination total={20} current={10} />
      </Wraper>
    </React.Fragment>
  );
}
