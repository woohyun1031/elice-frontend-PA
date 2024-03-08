'use client';

import React, { createContext, Fragment, Suspense } from 'react';
import { BodyForms, FilterForms, SearchForms } from '@containers/edu';
import { IOrgCourseListResponses, IOrgCourse } from '#types/course';

export const CoursesContext = createContext({
  courses: [] as IOrgCourse[],
  setCourses: (value: IOrgCourse[]) => {},
  courseCount: 0 as number,
  setCourseCount: (value: number) => {},
});

export default function Form(props: IOrgCourseListResponses) {
  const [courses, setCourses] = React.useState(props.courses);
  const [courseCount, setCourseCount] = React.useState(props.course_count);

  React.useEffect(() => {
    setCourses(props.courses);
    setCourseCount(props.course_count);
  }, [props]);

  return (
    <CoursesContext.Provider
      value={{ courses, setCourses, courseCount, setCourseCount }}
    >
      <Fragment>
        <Suspense>
          <SearchForms />
        </Suspense>
        <Suspense>
          <FilterForms />
        </Suspense>
        <Suspense>
          <BodyForms {...{ course_count: courseCount, courses }} />
        </Suspense>
      </Fragment>
    </CoursesContext.Provider>
  );
}
