import Link from 'next/link';
import clsx from 'clsx';
import { ReactElement } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const baseStyles = {
  solid: 'gap-x-1 group inline-flex items-center justify-center font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  outline: 'gap-x-1 group inline-flex ring-1 items-center justify-center font-semibold focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
  ghost: 'gap-x-1 group inline-flex items-center justify-center font-semibold focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
  icon: 'rounded-full group inline-flex items-center justify-center focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
};

const variantStyles = {
  solid: {
    primary: 'bg-primary text-white hover:bg-indigo-600 hover:text-white active:bg-indigo-700 active:text-white',
    black: 'bg-black text-white hover:bg-grey hover:text-white active:bg-grey active:text-white',
    white: 'bg-white text-black hover:bg-white/80 hover:text-black active:bg-white active:text-black',
  },
  outline: {
    primary: 'ring-primary text-primary hover:text-black hover:ring-black active:bg-black active:text-black',
    white: 'ring-white/30 text-white hover:text-white hover:ring-white active:ring-white active:text-white',
    black: 'ring-border text-black hover:text-black hover:ring-grey active:ring-black active:text-black',
  },
  ghost: {
    black: 'bg-transparent text-black hover:bg-gray-200 hover:text-black active:bg-gray-300 active:text-black',
    white: 'bg-transparent text-white hover:bg-white/20 hover:text-white active:bg-white active:text-black',
  },
  icon: {
    black: 'bg-transparent text-black hover:bg-gray-200 hover:text-black active:bg-gray-200 active:text-black',
    white: 'bg-transparent text-white hover:bg-white/70 hover:text-black active:bg-white active:text-black',
  },
  sizes: {
    small: 'h-8 px-3 text-base rounded-[8px]',
    medium: 'h-10 px-4 text-base rounded-[8px]',
    large: 'h-12 px-6 text-lg rounded-[10px]',
    xlarge: 'h-14 px-8 text-xl rounded-[10px]',
    icon: '',
  },
};

type ButtonProps = (
  | {
      variant?: 'solid';
      color?: keyof typeof variantStyles.solid;
      size?: 'small' | 'medium' | 'large' | 'xlarge';
      icon?: ReactElement;
      disabled?: boolean;
    }
  | {
      variant: 'outline';
      color?: keyof typeof variantStyles.outline;
      size?: 'small' | 'medium' | 'large' | 'xlarge';
      icon?: ReactElement;
      disabled?: boolean;
    }
  | {
      variant: 'ghost';
      color?: keyof typeof variantStyles.ghost;
      size?: 'small' | 'medium' | 'large' | 'xlarge';
      icon?: ReactElement;
      disabled?: boolean;
    }
  | {
      variant: 'icon';
      color?: keyof typeof variantStyles.ghost;
      size?: 'icon';
      icon?: ReactElement;
      disabled?: boolean;
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color' | 'size'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color' | 'size'> & {
        href?: undefined;
      })
  );

export function Button({ className, icon, children, disabled, ...props }: ButtonProps) {
  props.variant ??= 'solid';
  props.color ??= 'primary';

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline' ? variantStyles.outline[props.color] : undefined,
    props.variant === 'solid' ? variantStyles.solid[props.color] : undefined,
    props.variant === 'ghost' && props.color ? variantStyles.ghost[props.color] : undefined,
    props.variant === 'icon' && props.color ? variantStyles.icon[props.color] : undefined,
    props.size && variantStyles.sizes[props.size],
    className,
  );

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} disabled={disabled}>
      {icon && <span className="">{icon}</span>}
      {children}
    </button>
  ) : (
    <Link className={clsx(className, disabled && 'pointer-events-none opacity-50')} {...props}>
      {icon && <span className="">{icon}</span>}
      {children}
    </Link>
  );
}

// Example usage with Heroicons
export function ExampleUsage() {
  return (
    <Button 
      variant="solid" 
      color="primary" 
      size="medium" 
      icon={<ArrowRightIcon className="w-5 h-5" />}
      disabled
    >
      Click me
    </Button>
  );
}
 
