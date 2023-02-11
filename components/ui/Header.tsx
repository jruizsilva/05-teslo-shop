import Link from 'next/link'
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  XMarkIcon,
  UserIcon
} from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'

interface Props {}

export function Header(props: Props) {
  return (
    <>
      <Disclosure>
        <header className='bg-white'>
          <nav className='p-6 mx-auto container flex justify-between items-center relative'>
            <NavItem label={'Teslo Shop'} href={''} />
            <div className=' gap-8 hidden md:flex'>
              <NavItem label={'Hombres'} href={''} />
              <NavItem label={'Mujeres'} href={''} />
              <NavItem label={'Niños'} href={''} />
            </div>
            <div className='flex gap-8'>
              <NavItemWithIcon icon={MagnifyingGlassIcon} />
              <NavItemWithIcon
                icon={ShoppingCartIcon}
                showNotification
              />

              <Disclosure.Button className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Menu
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className='bg-white absolute right-0 top-2 container text-gray-500 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='divide-y-2 divide-gray-50'>
                {/* Menu header */}
                <div className='flex justify-between items-center p-4'>
                  <h3 className='ml-3 text-base font-medium text-gray-900'>
                    Teslo Shop
                  </h3>
                  <Disclosure.Button className='text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-md'>
                    <XMarkIcon className='w-6 h-6 text-gray-500 ' />
                  </Disclosure.Button>
                </div>
                {/* Menu content */}
                <div className='grid py-1 md:hidden'>
                  <MenuItem label={'Hombres'} href={''} />
                  <MenuItem label={'Mujeres'} href={''} />
                  <MenuItem label={'Niños'} href={''} />
                </div>

                {/* Menu footer */}
                <div className='grid py-1'>
                  <MenuItem label={'Hombres'} href={''} />
                  <MenuItem label={'Mujeres'} href={''} />
                  <MenuItem label={'Niños'} href={''} />
                </div>
              </div>
            </Disclosure.Panel>
          </nav>
        </header>
      </Disclosure>
    </>
  )
}

interface NavItemProps {
  label: string
  href: string
}

const NavItem = ({ href, label }: NavItemProps) => {
  return (
    <Link href={href}>
      <span className='text-base font-medium text-gray-500 hover:text-gray-900'>
        {label}
      </span>
    </Link>
  )
}

interface NavItemWithIconProps {
  showNotification?: boolean
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
}

const NavItemWithIcon = ({
  showNotification = false,
  icon: SVG
}: NavItemWithIconProps) => {
  return (
    <button className='relative group'>
      <SVG className='text-base font-medium w-6 text-gray-500 group-hover:text-gray-900 transition-all duration-100' />
      {showNotification && (
        <div className='absolute w-5 h-5 rounded-full -top-2 -right-2 bg-red-400 flex justify-center items-center text-sm group-hover:bg-red-500 transition-all duration-100'>
          12
        </div>
      )}
    </button>
  )
}

interface MenuItemProps extends NavItemProps {}

const MenuItem = ({ href, label }: MenuItemProps) => {
  return (
    <>
      <Link
        href={href}
        className='flex items-center rounded-md hover:bg-gray-50 p-4'
      >
        <UserIcon className='h-6 w-6 flex-shrink-0 text-indigo-600' />
        <span className='ml-3 text-base font-medium text-gray-900'>
          {label}
        </span>
      </Link>
    </>
  )
}
