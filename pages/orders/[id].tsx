import {
  OrderAddress,
  OrderSummary,
  ProductCart
} from '@/components/cart'
import { ShopLayout } from '@/components/layouts'
import { OrderState } from '@/components/ui'
import { initialData } from '@/database/products'
const img = initialData.products[0].images[0]

export default function OrderPage() {
  return (
    <ShopLayout
      title='Resumen de la orden 54648'
      pageDescription='Orden 54648'
    >
      <div className='container mx-auto px-6 mb-12'>
        <h1 className='pb-12 font-bold text-3xl'>Orden: 54648</h1>
        <OrderState />

        <div className='flex flex-col lg:flex-row gap-16'>
          <div className='border-t border-black border-opacity-10 flex-grow'>
            <ProductCart img={img} />
            <ProductCart img={img} />
          </div>
          <div className='lg:max-w-md flex-grow flex flex-col'>
            <OrderAddress />
            <OrderSummary buttonText='Pagar' />
          </div>
        </div>
      </div>
    </ShopLayout>
  )
}
