import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface OrgCourseListResponses {
  _result: {
    status: 'ok' | 'fail';
  };
  courseCount: number;
  courses: {
    courseType: number;
    tags: string[];
    title: string;
    shortDescription: string;
    classType: number;
    logoFileUrl: null | string;
    enrolledRolePeriod: null | string;
    enrolledRoleBeginDatetime: number | null;
    enrolledRoleEndDatetime: number | null;
    beginDatetime: number;
    endDatetime: null | number;
    isDiscounted: boolean;
    discountedPrice: string;
    discountedPriceUsd: string;
    discountRate: null | any;
    price: string;
    priceUsd: string;
    enrollType: number;
    isFree: boolean;
  }[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await axios.get<OrgCourseListResponses>(
      `${process.env.NEXT_PUBLIC_ELICE_REST_API}/org/academy/course/list/`,
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
