import { Op } from 'sequelize';
import type { NextApiRequest, NextApiResponse } from 'next';
import MockData from '../../models/MockDataModel';

export interface ISearchResult {
  result: Result[];
  page: number;
  limit: number;
  totalRows: number;
  totalPage: number;
}

export interface Result {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const page = +req.query.page! || 0;
  const limit = +req.query.limit! || 30;
  const search = req.query.search_query || '';
  const offset = limit * page;
  const whereStatement = {
    [Op.or]: [
      {
        description: {
          [Op.like]: '%' + search + '%',
        },
      },
    ],
  };

  const totalRows = await MockData.count({
    where: whereStatement,
  });

  const totalPage = Math.ceil(totalRows / limit);
  const result = await MockData.findAll({
    where: whereStatement,
    offset: offset,
    limit: limit,
    order: [['id', 'DESC']],
  });

  res.json({
    result: result,
    page: page,
    limit: limit,
    totalRows: totalRows,
    totalPage: totalPage,
  });
}
