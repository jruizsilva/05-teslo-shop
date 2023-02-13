import Link from 'next/link'
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  XMarkIcon,
  ListBulletIcon,
  UsersIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline'
import { Popover, Transition } from '@headlessui/react'
import { CiLogout, CiLogin } from 'react-icons/ci'
import { MdChildCare } from 'react-icons/md'
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc'
import { AiOutlineInbox } from 'react-icons/ai'
import { Fragment } from 'react'

interface Props {}

export function Header(props: Props) {
  return (
    <>
      <Popover>
        <header className='bg-white ring-1 ring-black ring-opacity-5'>
          <nav className='p-6 mx-auto container flex justify-between items-center relative'>
            <NavItem label='Teslo Shop' href='' />
            <div className='gap-8 hidden md:flex'>
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

              <Popover.Button className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Menu
              </Popover.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >
              <Popover.Panel className='bg-white absolute right-0 top-2 container max-w-xs text-gray-500 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-10'>
                <div className='divide-y-2 divide-gray-50'>
                  {/* Menu header */}
                  <div className='flex justify-between items-center p-4'>
                    <h3 className='ml-3 text-base font-medium text-gray-900'>
                      Teslo Shop
                    </h3>
                    <Popover.Button className='text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-md'>
                      <XMarkIcon className='w-6 h-6 text-gray-500 ' />
                    </Popover.Button>
                  </div>
                  {/* Menu */}
                  <div className='grid py-1'>
                    <MenuItem
                      label={'Perfil'}
                      href={''}
                      icon={UserCircleIcon}
                    />
                    <MenuItem
                      label={'Mis ordenes'}
                      href={''}
                      icon={ListBulletIcon}
                    />
                    <div className='md:hidden'>
                      <MenuItem
                        label={'Hombres'}
                        href={''}
                        icon={FcBusinessman}
                      />
                      <MenuItem
                        label={'Mujeres'}
                        href={''}
                        icon={FcBusinesswoman}
                      />
                      <MenuItem
                        label={'Niños'}
                        href={''}
                        icon={MdChildCare}
                      />
                    </div>
                    <MenuItem
                      label={'Ingresar'}
                      href={''}
                      icon={CiLogin}
                    />
                    <MenuItem
                      label={'Salir'}
                      href={''}
                      icon={CiLogout}
                    />
                  </div>
                  {/* Admin menu */}
                  <div className='grid py-1'>
                    <MenuItem
                      label={'Productos'}
                      href={''}
                      icon={AiOutlineInbox}
                    />
                    <MenuItem
                      label={'Ordenes'}
                      href={''}
                      icon={ListBulletIcon}
                    />
                    <MenuItem
                      label={'Usuarios'}
                      href={''}
                      icon={UsersIcon}
                    />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </nav>
        </header>
      </Popover>
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
        <div className='absolute w-5 h-5 rounded-full -top-2 -right-2 text-white bg-red-400 flex justify-center items-center text-sm group-hover:bg-red-500 transition-all duration-100'>
          12
        </div>
      )}
    </button>
  )
}

interface MenuItemProps extends NavItemProps {
  icon: React.ElementType<any>
}

const MenuItem = ({ href, label, icon: Icon }: MenuItemProps) => {
  return (
    <>
      <Link
        href={href}
        className='flex items-center rounded-md hover:bg-gray-50 p-4'
      >
        <Icon className='h-6 w-6 flex-shrink-0 text-indigo-600' />
        <span className='ml-3 text-base font-medium text-gray-900'>
          {label}
        </span>
      </Link>
    </>
  )
}
