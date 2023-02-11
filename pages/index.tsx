import { ShopLayout } from '@/components/layouts'
import { ProductList } from '@/components/products'

export default function Home() {
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
