import { memo } from 'react'
import { MdCreditScore, MdCreditCardOff } from 'react-icons/md'

interface Props {
  paid?: boolean
}

export const OrderState = memo(function OrderState({
  paid = false
}: Props) {
  const borderStyle = paid ? 'border-green-700' : 'border-red-700'
  const textStyle = paid ? 'text-green-700' : 'text-red-700'
  const textToShow = paid ? 'Orden ya fue pagada' : 'Orden no pagada'
  const IconToShow = paid ? MdCreditScore : MdCreditCardOff

  return (
    <div
      className={`inline-flex items-center p-2 px-3 border rounded-full ${borderStyle}`}
    >
      <span className='pr-2'>
        <IconToShow className={`text-lg ${textStyle}`} />
      </span>
      <span className={`text-sm ${textStyle}`}>{textToShow}</span>
    </div>
  )
})
