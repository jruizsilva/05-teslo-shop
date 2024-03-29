import { db } from '@/database'
import { Product } from '@/models'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { IProduct } from '../../../interfaces/'

type Data =
  | {
      message: string
    }
  | IProduct[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET': {
      await searchProducts(req, res)
      return
    }
    default:
      res.status(400).json({ message: 'Bad request' })
  }
}
const searchProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  let { q = '' } = req.query

  if (q.length === 0) {
    res
      .status(400)
      .json({ message: 'Debe de especificar el query de busqueda' })
  }
  q = q.toString().toLowerCase()

  await db.connect()
  const products = await Product.find({
    $text: { $search: q }
  })
    .select('title images price inStock slug -_id')
    .lean()

  await db.disconnect()
  res.status(200).json(products)
}
