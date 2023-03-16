import { MdCreditScore } from 'react-icons/md'

interface Props {}

export function OrderState(props: Props) {
  return (
    <div className='inline-flex items-center p-2 px-3 border rounded-full border-green-700'>
      <span className='pr-2'>
        <MdCreditScore className='text-lg text-green-700' />
      </span>
      <span className='text-sm text-green-700'>
        Orden ya fue pagada
      </span>
    </div>
  )
}
