import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { ShopLayout } from '@/components/layouts'
// import { Slideshow } from '@/components/products/Slideshow'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' }
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.'
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.'
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.'
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.'
    }
  ],
  colors: [
    {
      name: 'White',
      class: 'bg-white',
      selectedClass: 'ring-gray-400'
    },
    {
      name: 'Gray',
      class: 'bg-gray-200',
      selectedClass: 'ring-gray-400'
    },
    {
      name: 'Black',
      class: 'bg-gray-900',
      selectedClass: 'ring-gray-900'
    }
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true }
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton'
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <ShopLayout title='Product page' pageDescription='product page'>
      <div className=''>
        <div className='space-y-2'>
          {/* <Slideshow /> */}
          <h2 className='sr-only'>Product information</h2>
          <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
            {product.name}
          </h1>
          <p className='text-3xl tracking-tight text-gray-900'>
            {product.price}
          </p>
          <h3 className='sr-only'>Description</h3>
          <p className='text-base text-gray-900'>
            {product.description}
          </p>
          <form>
            {/* Sizes */}
            <div className='mt-10'>
              <h3 className='text-sm font-medium text-gray-900'>
                Size
              </h3>
              <RadioGroup
                value={selectedSize}
                onChange={setSelectedSize}
                className='mt-4'
              >
                <RadioGroup.Label className='sr-only'>
                  {' '}
                  Choose a size{' '}
                </RadioGroup.Label>
                <div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>
                  {product.sizes.map((size) => (
                    <RadioGroup.Option
                      key={size.name}
                      value={size}
                      disabled={!size.inStock}
                      className={({ active }) =>
                        classNames(
                          size.inStock
                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          active ? 'ring-2 ring-indigo-500' : '',
                          'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label as='span'>
                            {size.name}
                          </RadioGroup.Label>
                          {size.inStock ? (
                            <span
                              className={classNames(
                                active ? 'border' : 'border-2',
                                checked
                                  ? 'border-indigo-500'
                                  : 'border-transparent',
                                'pointer-events-none absolute -inset-px rounded-md'
                              )}
                              aria-hidden='true'
                            />
                          ) : (
                            <span
                              aria-hidden='true'
                              className='pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200'
                            >
                              <svg
                                className='absolute inset-0 h-full w-full stroke-2 text-gray-200'
                                viewBox='0 0 100 100'
                                preserveAspectRatio='none'
                                stroke='currentColor'
                              >
                                <line
                                  x1={0}
                                  y1={100}
                                  x2={100}
                                  y2={0}
                                  vectorEffect='non-scaling-stroke'
                                />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <button
              type='submit'
              className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Add to bag
            </button>
          </form>
        </div>
      </div>
    </ShopLayout>
  )
}
