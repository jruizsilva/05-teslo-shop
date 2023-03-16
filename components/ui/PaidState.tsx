import { memo } from 'react'

interface Props {
  paid?: boolean
}

export const PaidState = memo(function PaidState({
  paid = false
}: Props) {
  const borderStyle = paid ? 'border-green-700' : 'border-red-700'
  const textStyle = paid ? 'text-green-700' : 'text-red-700'
  const textToShow = paid ? 'Pagada' : 'No pagada'

  return (
    <div
      className={`inline-flex items-center p-2 px-3 border rounded-3xl ${borderStyle}`}
    >
      <span className={`text-sm whitespace-nowrap ${textStyle}`}>
        {textToShow}
      </span>
    </div>
  )
})
