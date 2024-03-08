'use client';

import React, { Fragment, Suspense } from 'react';
import { BodyForms, FilterForms, SearchForms } from '@containers/edu';
import { IOrgCourseListResponses } from '#types/course';

export default function Form(props: IOrgCourseListResponses) {
  return (
    <Fragment>
      <Suspense>
        <SearchForms />
      </Suspense>
      <Suspense>
        <FilterForms />
      </Suspense>
      <Suspense>
        <BodyForms {...props} />
      </Suspense>
    </Fragment>
  );
}
