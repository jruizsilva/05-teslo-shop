import { OrderSummary, Select } from '@/components/cart'
import { initialData } from '@/database/products'
import { XMarkIcon } from '@heroicons/react/24/outline'

const img = initialData.products[0].images[0]

interface Props {}

export default function CartPage(props: Props) {
  return (
    <>
      <div className='container mx-auto px-6'>
        <h1 className='py-12 font-bold text-3xl'>Shopping Cart</h1>
        <div className='flex flex-col'>
          {/* <div className='border-t border-black border-opacity-10'>
            <div className='p-10 border-b border-black border-opacity-10'>
              <div className='flex gap-6 relative'>
                <div className='max-w-[190px]'>
                  <img src={`/products/${img}`} alt='' />
                </div>
                <div>
                  <h3 className='text-base font-medium text-gray-600 '>
                    Basic Tee
                  </h3>
                  <div className='text-base text-gray-400'>
                    <h5 className='inline-block pr-4 border-r border-black border-opacity-5 font-medium'>
                      Black
                    </h5>
                    <h5 className='inline-block pl-4 font-medium'>
                      Large
                    </h5>
                  </div>
                  <h2 className='text-gray-900 text-base font-semibold mb-3'>
                    $32.00
                  </h2>
                  <Select />
                </div>
                <div className='absolute right-0 top-0 text-base font-medium hover:bg-gray-100 p-2 rounded-md'>
                  <XMarkIcon className='w-6 h-6 text-gray-500' />
                </div>
              </div>
            </div>
            <div className='p-10 border-b border-black border-opacity-10'>
              <div className='flex gap-6 relative'>
                <div className='max-w-[190px]'>
                  <img src={`/products/${img}`} alt='' />
                </div>
                <div>
                  <h3 className='text-base font-medium text-gray-600 '>
                    Basic Tee
                  </h3>
                  <div className='text-base text-gray-400'>
                    <h5 className='inline-block pr-4 border-r border-black border-opacity-5 font-medium'>
                      Black
                    </h5>
                    <h5 className='inline-block pl-4 font-medium'>
                      Large
                    </h5>
                  </div>
                  <h2 className='text-gray-900 text-base font-semibold mb-3'>
                    $32.00
                  </h2>
                  <Select />
                </div>
                <div className='absolute right-0 top-0 text-base font-medium hover:bg-gray-100 p-2 rounded-md'>
                  <XMarkIcon className='w-6 h-6 text-gray-500' />
                </div>
              </div>
            </div>
          </div> */}
          <div className=''>
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  )
}
