interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  children: JSX.Element[]
}

export function SelectField({
  label,
  name,
  children,
  ...rest
}: Props) {
  return (
    <>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <select
        name={name}
        className='mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2.5'
        {...rest}
      >
        {children}
      </select>
    </>
  )
}
