import { Select } from '@/components/cart'
import { XMarkIcon } from '@heroicons/react/24/outline'
interface Props {
  img: string
  editable?: boolean
}

export function ProductCart({ img, editable = false }: Props) {
  return (
    <>
      <div className='py-10 border-b border-black border-opacity-10'>
        <div className='flex gap-6 relative'>
          <div className='max-w-[190px]'>
            <img src={`/products/${img}`} alt='' />
          </div>
          <div className='w-full'>
            <div className='flex flex-col xl:flex-row xl:w-[calc(100%-40px)]'>
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
              </div>
              <div className='xl:mx-auto'>
                {editable && <Select />}
              </div>
            </div>
            <div className='absolute right-0 top-0 text-base font-medium hover:bg-gray-100 p-2 rounded-md'>
              {editable && (
                <XMarkIcon className='w-6 h-6 text-gray-500' />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
