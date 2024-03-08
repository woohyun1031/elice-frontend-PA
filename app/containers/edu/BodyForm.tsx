'use client';

import React, { Fragment } from 'react';
import CourseCard from '@components/edu/body/CourseCard';
import Pagination from '@components/edu/pagination/Pagination';
import SectionWraper from '@components/edu/SectionWraper';
import { IOrgCourseListResponses } from '#types/course';

export default function BodyForms({
  course_count,
  courses = [],
}: IOrgCourseListResponses) {
  return (
    <Fragment>
      <SectionWraper>
        <div className="border-b border-solid border-gray-200 py-3">
          <div className="inline-block text-xs font-semibold">
            전체 {course_count}개
          </div>
        </div>
      </SectionWraper>
      <SectionWraper className="flex flex-wrap gap-4">
        {courses.map((course) => (
          <CourseCard {...course} />
        ))}
      </SectionWraper>
      <SectionWraper className="mt-6 flex justify-center">
        <Pagination total={course_count} courseLength={courses.length} />
      </SectionWraper>
    </Fragment>
  );
}
