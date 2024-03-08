import React, { Fragment } from 'react';
import { IDefaultPageProps } from '#types/default';
import Form from './form';
import getOrgCourseList from '@apis/getOrgCourseList';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function Page({
  searchParams,
}: IDefaultPageProps<Record<string, string | string[]>>) {
  const response = await getOrgCourseList(searchParams, 0);
  const res = await response.json();

  return (
    <Fragment>
      <Form {...res} />
    </Fragment>
  );
}
