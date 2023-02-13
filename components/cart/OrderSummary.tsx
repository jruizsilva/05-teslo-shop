interface Props {}

export function OrderSummary(props: Props) {
  return (
    <>
      <div className='bg-gray-50 p-9 rounded'>
        <h2 className='font-medium text-gray-900 text-lg'>
          Order Summary
        </h2>
        <div className='flex border-b border-black border-opacity-5 py-6 '>
          <p className='text-base font-medium text-gray-400'>
            Subtotal
          </p>
          <span className='ml-auto text-gray-900 text-base font-medium'>
            $99.00
          </span>
        </div>
        <div className='flex border-b border-black border-opacity-5 py-6 '>
          <p className='text-base font-medium text-gray-400'>
            Tax estimate
          </p>
          <span className='ml-auto text-gray-900 text-base font-medium'>
            $9.00
          </span>
        </div>
        <div className='flex py-6'>
          <h3 className='text-gray-900 text-lg font-medium'>
            Order total
          </h3>
          <span className='ml-auto text-gray-900 text-lg font-medium'>
            $112.32
          </span>
        </div>
        <button
          type='button'
          className='text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-base w-full px-5 py-2.5 text-center mr-2 mb-2'
        >
          Checkout
        </button>
      </div>
    </>
  )
}
