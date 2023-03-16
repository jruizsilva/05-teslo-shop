import Link from 'next/link'

interface Props {}

export default function RegisterPage(props: Props) {
  return (
    <>
      <section className='bg-gray-50'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <Link href='/' className='mb-4'>
            <span className='text-base font-medium text-gray-500 hover:text-gray-900 '>
              Teslo Shop
            </span>
          </Link>
          <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
                Crea una cuenta
              </h1>
              <form className='space-y-4 md:space-y-6' action='#'>
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Correo electronico
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5'
                    placeholder='name@company.com'
                    required
                    autoComplete='off'
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Contraseña
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='confirm-password'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Repite la contraseña
                  </label>
                  <input
                    type='confirm-password'
                    name='confirm-password'
                    id='confirm-password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5'
                    required
                  />
                </div>

                <button
                  type='submit'
                  className='w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Crear cuenta
                </button>
                <p className='text-sm font-light text-gray-500'>
                  ¿Ya tienes cuenta?{' '}
                  <a
                    href='#'
                    className='font-medium text-indigo-600 hover:underline'
                  >
                    Inicia sesión aquí
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
