'use client';

import React, { Fragment } from 'react';
import CourseCard from '@components/edu/body/CourseCard';
import Pagination from '@components/edu/pagination/Pagination';
import SectionWraper from '@components/edu/SectionWraper';

export default function BodyForms() {
  return (
    <Fragment>
      <SectionWraper>
        <div className="border-b border-solid border-gray-200 py-3">
          <div className="inline-block text-xs font-semibold">전체 227개</div>
        </div>
      </SectionWraper>
      <SectionWraper className="flex flex-wrap gap-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </SectionWraper>
      <SectionWraper className="mt-6 flex justify-center">
        <Pagination total={20} current={10} />
      </SectionWraper>
    </Fragment>
  );
}
