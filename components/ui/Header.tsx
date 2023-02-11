import Link from 'next/link'
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'

interface Props {}

export function Header(props: Props) {
  return (
    <>
      <header className='bg-white'>
        <nav className='p-6 mx-auto container py-6 flex justify-between items-center'>
          <NavItem label={'Teslo Shop'} href={''} />
          <div className='flex gap-8'>
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
          </div>
        </nav>
      </header>
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
