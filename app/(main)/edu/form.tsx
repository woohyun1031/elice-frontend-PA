'use client';

import React, { Fragment, Suspense } from 'react';
import BodyForm from '@containers/edu/BodyForm';
import FilterForm from '@containers/edu/FilterForm';
import SearchForm from '@containers/edu/SearchForm';

import { IOrgCourseListResponses } from '#types/course';
import { CoursesContext } from '@contexts/contexts';

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
          <SearchForm />
        </Suspense>
        <Suspense>
          <FilterForm />
        </Suspense>
        <Suspense>
          <BodyForm {...{ course_count: courseCount, courses }} />
        </Suspense>
      </Fragment>
    </CoursesContext.Provider>
  );
}
