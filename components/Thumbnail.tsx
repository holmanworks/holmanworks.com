import Image from 'next/image'
import { useEffect, useState, } from 'react'
import clsx from 'clsx'
import React from 'react';

import { Container } from '@components/ui/container'
import thumbnail from '@/images/screenshots/forethought/thumbnail.png'



const steps = [
  {
      number:'01',
      title: 'Enter a text instruction',
      content:
        'Enter your URL for MakeYour.Ai to scan, or upload files, or drop in raw text content.',
      icon: thumbnail,    
  },
]

export function Thumbnail() {
  return (
    <section id="thumbnail" aria-label="thumbnail" className="">

      <Container>

        <div className="mx-auto flex flex-col w-full max-w-[1024px] gap-2">
          {steps.map((step, stepIndex) => (
            <div key={stepIndex} className='relative grid grid-cols-1 lg:grid-cols-2'>

              {/* Image */}
              <div className='p-10 flex justify-center bg-indigo-200'>
                <Image
                  src={step.icon} 
                  alt='' 
                  className='' />
              </div>

              {/* Text */}
              <div className='flex flex-col md:gap-y-4 gap-y-2 md:p-12 p-4 justify-center'>
                <div className="font-medium text-4xl text-primary">
                  {step.number}
                </div>

                <div className="font-medium md:text-6xl sm:text-5xl text-4xl text-black">
                  {step.title}
                </div>

                <p className="md:text-xl text-lg text-gray-800">
                  {step.content}
                </p>
              </div>
              
            </div>
            
          ))}
        </div>
      </Container>
    </section>
  )
}
