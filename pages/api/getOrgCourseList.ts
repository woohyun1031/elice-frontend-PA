import type { NextApiRequest, NextApiResponse } from 'next';
import type { IOrgCourseListResponses } from '#types/course';
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
    const result = { ...response.data };
    res.status(200).json(result);
  } catch (e) {
    console.log('e:::', e);
    res.status(200).json({ message: 'error' });
  }
}
