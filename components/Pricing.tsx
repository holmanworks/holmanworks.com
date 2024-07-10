'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
declare global {
  namespace JSX {
      interface IntrinsicElements {
          'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
  }
}
const plans = [
  {
    name: 'Starter',
    featured: false,
    price: { Monthly: '$29', Annually: '$290' },
    description: '',
    button: {
      label: 'Start trial',
      href: '/register',
    },
    features: [
      '1 AI Assistant',
      '3,000 messages per month',
      '100 training links',
      '10 file uploads',
      '10 MB per file',
    ],
    // logomarkClassName: 'fill-gray-300',
  },

  {
    name: 'Growth',
    featured: false,
    price: { Monthly: '$49', Annually: '$499.9' },
    description: '',
    button: {
      label: 'Start trial',
      href: '/register',
    },
    features: [
      '2 AI Assistants',
      '8,000 messages per month',
      '1,000 training links',
      '100 file uploads',
      'Slack, Messenger, and communication platform integration',
      '5 team members',
    ],
    logomarkClassName: 'fill-cyan-500',
  },

  {
    name: 'Scale',
    featured: false,
    price: { Monthly: '$99', Annually: '$999.9' },
    description: '',
    button: {
      label: 'Start trial',
      href: '/register',
    },
    features: [
      '5 AI Assistants',
      '30,000 messages per month',
      '10,000 training links',
      '500 file uploads',
      'Unlimited integrations',
      '10 team members',
      'Webhook support',
    ],
    logomarkClassName: 'fill-gray-300',
  },

  {
    name: 'Enterprise',
    featured: true,
    price: { Monthly: '', Annually: '' },
    description: '',
    button: {
      label: 'Schedule a time',
      href: '/register',
    },
    features: [
      'Unlimited AI Assistants',
      'Unlimited messages per month',
      'Up to 100,000 training links',
      '10,000 training links',
      '1,000 file uploads',
      'Unlimited integrations',
      'Unlimited members',
      'Webhook support',
      'Priority support',
      'API Access',
    ],
    logomarkClassName: 'fill-gray-500',
  },
]

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
  </svg>

  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  activePeriod,
  logomarkClassName,
  featured = false,
}: {
  name: string
  price: {
    Monthly: string
    Annually: string
  }
  description: string
  button: {
    label: string
    href: string
  }
  features: Array<string>
  activePeriod: 'Monthly' | 'Annually'
  logomarkClassName?: string
  featured?: boolean
}) {

  

  return (
    <section
      // CARD STYLE
      className={clsx(
        'flex flex-col overflow-hidden rounded-[12px] p-5 h-full',
        featured ? 'bg-white lg:order-none' : 'bg-white',
      )}
    >
      {/* TITLE */}
      <h3
        className={clsx(
          'flex items-center text-2xl font-semibold',
          featured ? 'text-black' : 'text-black',
        )}
      >

        {/* <Diamond className={clsx('h-6 w-6 flex-none', logomarkClassName)} /> */}

        <span className="">{name}</span>
      </h3>

      {/* PRICE */}
      <p
        className={clsx(
          'relative mt-3 flex text-6xl tracking-tight font-medium',
          featured ? 'text-primary icon-diamond' : 'text-black',
        )}
      >
        {price.Monthly === price.Annually ? (
          price.Monthly
        ) : (
          <>
            <span
              aria-hidden={activePeriod === 'Annually'}
              className={clsx(
                'transition duration-300',
                activePeriod === 'Annually' &&
                  'pointer-events-none translate-x-6 select-none opacity-0',
              )}
            >
              {price.Monthly}
            </span>
            <span
              aria-hidden={activePeriod === 'Monthly'}
              className={clsx(
                'absolute left-0 top-0 transition duration-300',
                activePeriod === 'Monthly' &&
                  'pointer-events-none -translate-x-6 select-none opacity-0',
              )}
            >
              {price.Annually}
            </span>
          </>
        )}
      </p>
      
      {/* DESCRIPTION */}
      {/* <p
        className={clsx(
          'font-icomoon mt-3 text-3xl',
          featured ? 'text-black icon-diamond' : 'text-gray-700',
        )}
      >
        {description}
      </p> */}

      {/* LISTS */}
      <div className="order-last mt-4">
        <ul
          role="list"
          className={clsx(
            'text-base',
            featured
              ? 'text-black' : 'text-black',
          )}
        >
        <span className="">Includes</span>

          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-4 w-4 flex-none',
                  featured ? 'text-white' : 'text-cyan-500',
                )}
              />
              <span className="ml-2">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* BUTTON */}
      <Button
        href={button.href}
        variant='solid'
        color='primary'
        size='small'
        className="mt-4"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {button.label}
      </Button>

    </section>
  )
}

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState<'Monthly' | 'Annually'>(
    'Monthly',
  )

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="bg-white py-20"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="font-medium tracking-tight text-black lg:text-7xl md:text-6xl text-5xl">
            Choose the plan that fits your needs.
          </h2>

          <p className="font-normal pt-4 lg:text-3xl text-3xl text-black tracking-tight">
              <span className="relative pr-2">or get a taste with out</span>
              <Link 
                href="https://checkout.stripe.com/c/pay/cs_live_a1iPyFteNOafhfeDsNxjJv7oS3LJvnRdeOyhieiRNq2PnGxTmMfcEvqixf#fidkdWxOYHwnPyd1blppbHNgWjA0Sm91RmNBUEpOZEZvcUtoVFB%2FcEpnVTJTVFRhandHdn0wPDJtcWFuaE5tdUZSUFBNQkI1VnAxSEpjSDFSUGlGMW1pQ1dBRjFNRmtTVlZWVnBjZlFxcndGNTU8ZGs2PDREQScpJ3ZwZ3Zmd2x1cWxqa1BrbHRwYGtgdnZAa2RnaWBhJz9jZGl2YHgl" 
                className="relative font-semibold underline underline-offset-2">
                  Free plan.
              </Link>
          </p>

        </div>


        {/* Holman's hand crafted componentTOGGLE MONTHLY/YEARLY 
        <div className="mt-16 flex justify-center">
          <div className="relative bg-[#d1d5db] rounded-full border-4 border-[#d1d5db]">

            <RadioGroup
              value={activePeriod}
              onChange={setActivePeriod}
              className="grid grid-cols-2"
            >
              {['Monthly', 'Annually'].map((period) => (
                <Radio
                  key={period}
                  value={period}
                  className={clsx(
                    'flex cursor-pointer px-8 py-3 text-base font-semibold text-black outline-2 outline-offset-2 transition-colors',
                    period === 'Monthly'
                      ? 'rounded-l-full'
                      : 'rounded-r-full',
                  )}
                >
                  {period}
                </Radio>
              ))}
            </RadioGroup>
            
            <div
              aria-hidden="true"
              className={clsx(
                'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-full bg-primary transition-all duration-300',
                activePeriod === 'Monthly'
                  ? '[clip-path:inset(0_50%_0_0)] items-center'
                  : '[clip-path:inset(0_0_0_calc(50%-1px))] items-center',
              )}
            >
              {['Monthly', 'Annually'].map((period) => (
                <div
                  key={period}
                  className={clsx(
                    'text-center text-base font-semibold text-white flex justify-center ',
                    period === 'Annually' && '-ml-px',
                  )}
                >
                  {period}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 grid items-start gap-x-6 gap-y-6 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
          ))}
        </div> */}
       


        
      </Container>
      <div className='py-4'></div>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
          <stripe-pricing-table 
            pricing-table-id="prctbl_1PGEnzDUOKaCjtNmgPHKY2vf"
            publishable-key="pk_live_51OjpCfDUOKaCjtNmQUzuObP7VQQdorBsx597htdkmKhpCWUUHGG0Su4MOfM4WUlC4hlFRDC4HCnVSSSSufcTtwrC009an391AD"
            
          >
          </stripe-pricing-table>

    </section>
  )
}