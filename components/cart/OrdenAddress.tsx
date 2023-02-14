import Link from 'next/link'

interface Props {
  showEditButtons?: boolean
}

export function OrderAddress({ showEditButtons = false }: Props) {
  return (
    <>
      <div className='bg-gray-50 px-9 pt-9 rounded w-full'>
        <div className='flex items-center justify-between'>
          <h2 className='font-medium text-gray-900 text-lg'>
            Revisa los datos de envío
          </h2>

          {showEditButtons && <Link href='/cart'>Editar</Link>}
        </div>

        <div className='flex border-b border-black border-opacity-5 py-6 '>
          <p className='text-base font-medium text-gray-400'>
            Nombre
          </p>
          <span className='ml-auto text-gray-900 text-base font-medium'>
            John
          </span>
        </div>
        <div className='flex border-b border-black border-opacity-5 py-6 '>
          <p className='text-base font-medium text-gray-400'>
            Apellido
          </p>
          <span className='ml-auto text-gray-900 text-base font-medium'>
            Nicarias
          </span>
        </div>

        <div className='flex border-b border-black border-opacity-5 py-6 '>
          <p className='text-base font-medium text-gray-400'>Pais</p>
          <span className='ml-auto text-gray-900 text-base font-medium'>
            Canada
          </span>
        </div>
        <div className='flex border-b border-black border-opacity-5 py-6 '>
          <p className='text-base font-medium text-gray-400'>
            Provincia
          </p>
          <span className='ml-auto text-gray-900 text-base font-medium'>
            Almagro
          </span>
        </div>
        <div className='flex border-b border-black border-opacity-5 py-6 '>
          <p className='text-base font-medium text-gray-400'>
            Dirección
          </p>
          <span className='ml-auto text-gray-900 text-base font-medium'>
            Vijuela 213
          </span>
        </div>
        <div className='flex border-b border-black border-opacity-5 py-6 '>
          <p className='text-base font-medium text-gray-400'>
            Telefono
          </p>
          <span className='ml-auto text-gray-900 text-base font-medium'>
            +558 7884 312
          </span>
        </div>
      </div>
    </>
  )
}
