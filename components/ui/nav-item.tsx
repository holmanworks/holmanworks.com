'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavItem({
  href,
  children,
  onClick,
  className,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        'flex items-center gap-3 rounded-[12px] p-3 text-black text-base font-medium transition-all hover:bg-gray-200',
        {
          'bg-indigo-50 text-black font-semibold': pathname === href
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}


export function NavTab({
  href,
  children,
  onClick,
  className,
  variant = 'black',
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'black' | 'white';
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        'flex items-center text-base font-semibold transition-all border-b-2',
        {
          'text-black': variant === 'black',
          'text-white': variant === 'white',
          'opacity-100': pathname === href,
          'opacity-50 border-transparent': pathname !== href,
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
