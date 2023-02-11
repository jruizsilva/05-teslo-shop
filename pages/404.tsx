import { ShopLayout } from '@/components/layouts'
import Link from 'next/link'

interface Props {}

export default function NotFoundPage(props: Props) {
  return (
    <>
      <ShopLayout
        title='Error 404 - Page not found'
        pageDescription='La pagina no fue encontrada'
        showFooter={false}
        showHeader={false}
      >
        <section>
          <div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6'>
            <div className='max-w-screen-sm mx-auto text-center'>
              <h1 className='mb-4 font-extrabold tracking-tight text-7xl lg:text-9xl text-indigo-600 dark:text-primary-500'>
                404
              </h1>
              <p className='mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white'>
                {`Something's missing.`}
              </p>
              <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
                {`Sorry, we can't find that page. You'll find lots to
                explore on the home page.`}
              </p>
              <Link
                href='/'
                className='inline-flex text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4'
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </section>
      </ShopLayout>
    </>
  )
}
