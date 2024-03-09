import type { NextApiRequest, NextApiResponse } from 'next';
import type { IOrgCourseListResponses } from '#types/course';
import { ESSENTIAL_COURSE_KEYS } from '@constants/course';
import { api } from './index';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await api.get<IOrgCourseListResponses>(
      '/org/academy/course/list/',
      {
        params: {
          ...req.query,
        },
      },
    );
    const result = {
      course_count: response.data.course_count,
      courses: response.data.courses.map((course) => {
        return ESSENTIAL_COURSE_KEYS.reduce((acc, cur) => {
          return { ...acc, [cur]: course[cur] };
        }, {});
      }),
    };
    res.status(200).json(result);
  } catch (e) {
    console.log('e:::', e);
    res.status(200).json({ message: 'error' });
  }
}
