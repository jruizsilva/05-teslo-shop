import { initialData } from '../../database/products'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  }
  // More products...
]

export function ProductList() {
  return (
    <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
      {initialData.products.map((product) => (
        <div key={product.slug} className='group relative'>
          <div className='min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
            <img
              src={`/products/${product.images[0]}`}
              alt={product.title}
              className='h-full w-full object-cover object-center lg:h-full lg:w-full'
            />
          </div>
          <div className='mt-4 flex justify-between'>
            <div>
              <h3 className='text-sm text-gray-700 dark:text-dark-text'>
                <a href={product.slug}>
                  <span
                    aria-hidden='true'
                    className='absolute inset-0'
                  />
                  {product.title}
                </a>
              </h3>
              <p className='mt-1 text-sm text-gray-500 dark:text-dark-text'>
                {product.inStock}
              </p>
            </div>
            <p className='text-sm font-medium text-gray-900 dark:text-dark-text'>
              ${product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
