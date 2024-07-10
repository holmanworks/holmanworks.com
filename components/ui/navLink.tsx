import Link from 'next/link'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="flex items-center rounded-full h-10 px-5 font-semibold text-base text-grey hover:bg-gray-200 hover:text-black"
    >
      {children}
    </Link>
  )
} 

