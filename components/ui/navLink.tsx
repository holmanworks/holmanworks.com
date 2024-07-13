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
      className="border-b-2 border-transparent font-mono flex items-center h-10 text-base text-grey hover:border-black hover:text-black hover:font-medium"
    >
      {children}
    </Link>
  )
} 

