import { OrderSummary, ProductCart } from '@/components/cart'
import { ShopLayout } from '@/components/layouts'
import { initialData } from '@/database/products'

const img = initialData.products[0].images[0]

interface Props {}

export default function CartPage(props: Props) {
  return (
    <>
      <ShopLayout
        title='Página del carrito'
        pageDescription='Ve y edita los productos en el carrito'
      >
        <div className='container mx-auto px-6 mb-12'>
          <h1 className='pb-12 font-bold text-3xl'>Shopping Cart</h1>
          <div className='flex flex-col lg:flex-row gap-16'>
            <div className='border-t border-black border-opacity-10 flex-grow'>
              <ProductCart img={img} editable />
              <ProductCart img={img} editable />
            </div>
            <div className='lg:max-w-md flex-grow'>
              <OrderSummary />
            </div>
          </div>
        </div>
      </ShopLayout>
    </>
  )
}
