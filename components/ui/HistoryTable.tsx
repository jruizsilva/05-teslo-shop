import { PaidState } from './'
interface Props {}

export function HistoryTable(props: Props) {
  return (
    <>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left text-gray-500 '>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Id
              </th>
              <th scope='col' className='px-6 py-3'>
                Nombre Completo
              </th>
              <th scope='col' className='px-6 py-3'>
                Pagada
              </th>
              <th scope='col' className='px-6 py-3'></th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <th
                scope='row'
                className='px-6 py-3 font-medium text-gray-900 whitespace-nowrap'
              >
                23
              </th>
              <td className='px-6 py-3'>Jonathan Ruiz</td>
              <td className='px-6 py-3'>
                <PaidState />
              </td>
              <td className='px-6 py-3'>
                <a
                  href='#'
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline whitespace-nowrap'
                >
                  Ver orden
                </a>
              </td>
            </tr>
            <tr className='border-b'>
              <th
                scope='row'
                className='px-6 py-3 font-medium text-gray-900 whitespace-nowrap'
              >
                23
              </th>
              <td className='px-6 py-3'>Jonathan Ruiz</td>
              <td className='px-6 py-3'>
                <PaidState />
              </td>
              <td className='px-6 py-3'>
                <a
                  href='#'
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline whitespace-nowrap'
                >
                  Ver orden
                </a>
              </td>
            </tr>
            <tr>
              <th
                scope='row'
                className='px-6 py-3 font-medium text-gray-900 whitespace-nowrap'
              >
                23
              </th>
              <td className='px-6 py-3'>Jonathan Ruiz</td>
              <td className='px-6 py-3'>
                <PaidState paid />
              </td>
              <td className='px-6 py-3'>
                <a
                  href='#'
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline whitespace-nowrap'
                >
                  Ver orden
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <nav
          className='flex items-center justify-between pt-4'
          aria-label='Table navigation'
        >
          <span className='text-sm font-normal text-gray-500'>
            Mostrando{' '}
            <span className='font-semibold text-gray-900'>1-3</span>{' '}
            de <span className='font-semibold text-gray-900'>3</span>
          </span>
          <ul className='inline-flex items-center -space-x-px'>
            <li>
              <a
                href='#'
                className='block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700'
              >
                <span className='sr-only'>Previous</span>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
              >
                1
              </a>
            </li>
            <li>
              <a
                href='#'
                className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
              >
                2
              </a>
            </li>
            <li>
              <a
                href='#'
                aria-current='page'
                className='z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
              >
                3
              </a>
            </li>
            <li>
              <a
                href='#'
                className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
              >
                ...
              </a>
            </li>
            <li>
              <a
                href='#'
                className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
              >
                100
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700'
              >
                <span className='sr-only'>Next</span>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
