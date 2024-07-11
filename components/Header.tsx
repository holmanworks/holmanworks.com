'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Button } from '@components/ui/button'
import { Container } from '@components/ui/container'
import { MakesheetsLogo, Logo } from '@/components/Logo'
import { NavLink } from '@components/ui/navLink'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-grey"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-grey/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-[16px] bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className="mx-2 my-4 border-divider" />
            <Button href="" variant="solid" color="primary" size="small">
              <span>
                Sign up <span className="hidden lg:inline"></span>
              </span>
            </Button>
            <MobileNavLink href="/login" >Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

// DESKTOP HEADER
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f5f3ec] w-full">
      <Container>
        <nav className="flex items-center justify-between h-[64px]">
          {/* <div className="flex items-center md:gap-x-12"> */}

            {/* LOGO */}
            <div className='font-mono text-base flex-1 flex justify-start'>
              <Link href="#" aria-label="Home">
                holmanworks.com              
              </Link>
            </div>
            
            {/* NAVIGATION */}
            <div className="hidden lg:flex -my-5">
              <NavLink href="#benefits">Works</NavLink>
              <NavLink href="#benefits">About me</NavLink>
            </div>

        </nav>
      </Container>
    </header>
  )
}
