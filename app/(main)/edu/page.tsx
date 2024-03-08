import React, { Fragment } from 'react';
import { PAGINATION } from '@constants/pagination';
import { IDefaultPageProps } from '#types/default';
import convertObjectToQueryString from '@utils/convertObjectToQueryString';
import convertSearchParamsToCourseObject from '@utils/convertSearchParamsToCourse';
import Form from './form';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function Page({
  searchParams,
}: IDefaultPageProps<Record<string, string | string[]>>) {
  const courseObject = convertSearchParamsToCourseObject(searchParams);
  const queryString = convertObjectToQueryString({
    ...courseObject,
    offset: '0',
    count: `${PAGINATION.PAGES_LIMIT}`,
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/getOrgCourseList?${queryString}`,
    { next: { revalidate: 0 } },
  );

  const res = await response.json();
  console.log(res);

  return (
    <Fragment>
      <Form {...res} />
    </Fragment>
  );
}
