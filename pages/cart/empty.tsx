import { ShopLayout } from '@/components/layouts'
import Link from 'next/link'
import { MdRemoveShoppingCart } from 'react-icons/md'

interface Props {}

export default function EmptyPage(props: Props) {
  return (
    <>
      <ShopLayout
        title='Carrito vacio'
        pageDescription='No hay productos en el carrito'
        showFooter={false}
        showHeader={true}
      >
        <section>
          <div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6'>
            <div className='max-w-screen-sm mx-auto text-center'>
              <div className='mb-4 '>
                <MdRemoveShoppingCart className='mx-auto font-extrabold tracking-tight text-7xl lg:text-9xl text-indigo-600 dark:text-primary-500' />
                <h1 className=''></h1>
              </div>
              <p className='mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>
                No hay productos en el carrito
              </p>
              <p className='mb-4 text-lg font-light text-gray-500'>
                Agregue los productos desde el inicio
              </p>
              <Link
                href='/'
                className='inline-flex text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4'
              >
                Ir al inicio
              </Link>
            </div>
          </div>
        </section>
      </ShopLayout>
    </>
  )
}
