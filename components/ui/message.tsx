'use client'

/* eslint-disable @next/next/no-img-element */

import { Logo, Logomark, Avatar } from '@components/Logo'
import { cn } from '@/lib/utils'
import { Spinner } from '@components/ui/spinner'

// Different types of message bubbles.

export function BotMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex items-start py-[10px]">

      <div className="bg-white flex items-center justify-center border border-divider rounded-full size-[32px]">
        <Avatar />
      </div>

      <div className="text-lg leading-[22px] ml-4 flex-1 space-y-2 overflow-hidden py-[6px]">
        {children}
      </div>

    </div>
  )
}

export function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex justify-end py-[10px]">

      <div className="bg-primary/15 rounded-[12px] w-4/5 text-lg text-black leading-[22px] overflow-hidden px-[16px] py-[12px]">
        {children}
      </div>

    </div>
  )
}

export function BotCard({
  children,
  showAvatar = true
}: {
  children: React.ReactNode
  showAvatar?: boolean
}) {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div
        className={cn(
          'bg-background flex size-[25px] shrink-0 select-none items-center justify-center rounded-lg border shadow-sm',
          !showAvatar && 'invisible'
        )}
      >
        <img className="size-6" src="/images/gemini.png" alt="gemini logo" />
      </div>
      <div className="ml-4 flex-1 pl-2">{children}</div>
    </div>
  )
}

export function SystemMessage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        'mt-2 flex items-center justify-center gap-2 text-xs text-gray-500'
      }
    >
      <div className={'max-w-[600px] flex-initial p-2'}>{children}</div>
    </div>
  )
}

export function SpinnerMessage() {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div className="bg-background flex size-[25px] shrink-0 select-none items-center justify-center rounded-lg border shadow-sm">
        <img className="size-6" src="/images/gemini.png" alt="gemini logo" />
      </div>
      <div className="ml-4 h-[24px] flex flex-row items-center flex-1 space-y-2 overflow-hidden px-1">
        {Spinner}
      </div>
    </div>
  )
}
