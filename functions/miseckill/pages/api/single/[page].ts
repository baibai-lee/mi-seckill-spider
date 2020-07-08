import { NextApiRequest, NextApiResponse } from 'next'
import { getListByPage } from '../../../components'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`Request from ${req.url}`)

  const { page } = req.query

  const list = await getListByPage(Number(page) || 1)
  res.send({ data: list })
}
