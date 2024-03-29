import { ShopLayout } from '@/components/layouts'
import { InputField, SelectField } from '@/components/ui'

export default function CheckoutAddressPage(): JSX.Element {
  return (
    <>
      <ShopLayout
        title='Checkout Address'
        pageDescription='Ingresa tus datos'
      >
        <div className='container mx-auto'>
          <div className='md:grid md:grid-cols-3 md:gap-6'>
            <div className='md:col-span-1'>
              <div className='px-4 sm:px-0'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  Información personal
                </h3>
                <p className='mt-1 text-sm text-gray-600'>
                  Rellena los campos para que podamos enviarte el
                  producto.
                </p>
              </div>
            </div>
            <div className='mt-5 md:col-span-2 md:mt-0'>
              <form action='#' method='POST'>
                <div className='overflow-hidden shadow sm:rounded-md'>
                  <div className='bg-white px-4 py-5 sm:p-6'>
                    <div className='grid grid-cols-6 gap-6'>
                      <div className='col-span-6 sm:col-span-3'>
                        <InputField
                          label='Nombre'
                          type='text'
                          name='name'
                        />
                      </div>
                      <div className='col-span-6 sm:col-span-3'>
                        <InputField
                          label='Apellido'
                          type='text'
                          name='last-name'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-3'>
                        <SelectField label='País' name='country'>
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </SelectField>
                      </div>
                      <div className='col-span-6 sm:col-span-3'>
                        <InputField
                          label='Telefono'
                          type='text'
                          name='phone'
                        />
                      </div>
                      <div className='col-span-6 sm:col-span-3'>
                        <InputField
                          label='Dirección'
                          type='text'
                          name='address1'
                        />
                      </div>
                      <div className='col-span-6 sm:col-span-3'>
                        <InputField
                          label='Dirección 2 (opcional)'
                          type='text'
                          name='address2'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                        <InputField
                          label='Ciudad'
                          type='text'
                          name='city'
                        />
                      </div>
                      <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                        <InputField
                          label='Provincia'
                          type='text'
                          name='region'
                        />
                      </div>
                      <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                        <InputField
                          label='Código postal'
                          type='text'
                          name='postal-code'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                    <button
                      type='submit'
                      className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ShopLayout>
    </>
  )
}
