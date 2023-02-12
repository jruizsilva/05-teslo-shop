import { initialData } from '../../database/products'

export function ProductList() {
  return (
    <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
      {initialData.products.map((product) => (
        <div key={product.slug} className='group relative'>
          <div className='min-h-80 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
            <img
              src={`/products/${product.images[0]}`}
              alt={product.title}
              className='h-full w-full object-cover object-center lg:h-full lg:w-full'
            />
          </div>
          <div className='mt-4 flex justify-between'>
            <div>
              <h3 className='text-sm text-gray-700'>
                <a href={`/product/${product.slug}`}>
                  <span
                    aria-hidden='true'
                    className='absolute inset-0'
                  />
                  {product.title}
                </a>
              </h3>
            </div>
            <p className='text-sm font-medium text-gray-900'>
              ${product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
