import clsx from 'clsx'

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-auto max-w-[1280px] lg:px-8 px-6', className)}
      {...props}
    />
  )
}

