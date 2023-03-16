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
      </div>
    </>
  )
}
