import { ShopLayout } from '@/components/layouts'
import { ProductList } from '@/components/products'

import useSWR from 'swr'

const fetcher = async (...args: [key: string]) =>
  await fetch(...args).then(async (res) => await res.json())

export default function HomePage() {
  const { data, error, isLoading } = useSWR('/api/products', fetcher)

  console.log(data)
  if (typeof error === 'object') return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <ShopLayout
        title='Teslo Shop - Home'
        pageDescription='Encuentra los mejores  productos de Teslo aquí'
      >
        <h1 className='text-3xl font-bold'>Tienda</h1>
        <h1 className='mb-2 text-2xl'>Todos los productos</h1>
        <ProductList />
      </ShopLayout>
    </>
  )
}
