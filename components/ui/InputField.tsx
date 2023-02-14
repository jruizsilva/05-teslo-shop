interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  type: React.HTMLInputTypeAttribute
  placeholder?: string
}

export function InputField({
  label,
  name,
  placeholder = '',
  type,
  ...rest
}: Props) {
  return (
    <>
      <label
        htmlFor='first-name'
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <input
        type={type ?? 'text'}
        placeholder={placeholder}
        className='bg-gray-50 mt-1 border border-gray-200 text-gray-900 text-sm rounded-md outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2.5'
        {...rest}
      />
    </>
  )
}
