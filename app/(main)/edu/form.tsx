'use client';

import React, { Fragment, Suspense } from 'react';
import { BodyForms, FilterForms, SearchForms } from '@containers/edu';

export default function Form() {
  return (
    <Fragment>
      <Suspense>
        <SearchForms />
      </Suspense>
      <Suspense>
        <FilterForms />
      </Suspense>
      <Suspense>
        <BodyForms />
      </Suspense>
    </Fragment>
  );
}
