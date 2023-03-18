import { Product } from '@/models'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { IProduct } from '../../../interfaces'
import { db } from '@/database'

type Data =
  | {
      message: string
    }
  | IProduct

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET': {
      await getProductBySlug(req, res)

      break
    }

    default: {
      res.status(400).json({ message: 'Bad request' })
    }
  }
}
const getProductBySlug = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  await db.connect()
  const { slug } = req.query

  const product = await Product.findOne({ slug }).lean()
  await db.disconnect()

  if (product !== null) {
    res.status(404).json({ message: 'Product not found' })
    return
  }
  res.json(product)
}
