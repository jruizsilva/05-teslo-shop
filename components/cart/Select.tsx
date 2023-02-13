import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon
} from '@heroicons/react/20/solid'

const quantyties = [...Array(15)].map((_, idx) => idx + 1)

console.log(quantyties)

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Select() {
  const [quantity, setQuantity] = useState(1)

  return (
    <Listbox value={quantity} onChange={setQuantity}>
      {({ open }) => (
        <>
          <div className='relative mt-1'>
            <Listbox.Button className='relative cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'>
              <span className='flex items-center'>
                <span className='ml-3 block truncate'>
                  {quantity}
                </span>
              </span>
              <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                <ChevronUpDownIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {quantyties.map((value) => (
                  <Listbox.Option
                    key={value}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'text-white bg-indigo-600'
                          : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={value}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className='flex items-center'>
                          <span
                            className={classNames(
                              selected
                                ? 'font-semibold'
                                : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {value}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active
                                ? 'text-white'
                                : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon
                              className='h-5 w-5'
                              aria-hidden='true'
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
