import Image from 'next/image'
import { useEffect, useState, } from 'react'
import clsx from 'clsx'
import React from 'react';

import { Container } from '@components/ui/container'
import feature1 from '@/images/screenshots/feature1.png'
import feature2 from '@/images/screenshots/feature2.png'
import feature3 from '@/images/screenshots/feature3.png'
import feature4 from '@/images/screenshots/feature4.png'



const steps = [
  {
      number:'01',
      title: 'Enter a text instruction',
      content:
        'Enter your URL for MakeYour.Ai to scan, or upload files, or drop in raw text content.',
      icon: feature1,    
  },
  {
    number:'02',
    title: 'Generate and preview',
    content:
      'Enter your URL for MakeYour.Ai  to scan, or upload files, or drop in raw text content.',
    icon: feature2,    
  },
  {
    number:'03',
    title: 'Share or export',
    content:
      'Use real chat history to improve your AI by providing feedback that allows it to improve with every interaction.',
    icon: feature3,    
  },
  {
    number:'04',
    title: 'Simple explanation',
    content:
      'Use real chat history to improve your AI by providing feedback that allows it to improve with every interaction.',
    icon: feature4,    
 },
 {
  number:'05',
  title: 'See score',
  content:
    'Use real chat history to improve your AI by providing feedback that allows it to improve with every interaction.',
  icon: feature4,    
},
]

export function Steps() {
  return (
    <section id="steps" aria-label="steps" className="lg:py-20 py-12">

      <Container>

        <div className="mx-auto">
          <h1 className="max-w-[768px] mx-auto font-medium tracking-tight text-black text-center md:text-8xl text-5xl w-full pb-4">
            How it works
          </h1>
        </div>

        <div className="mx-auto flex flex-col w-full max-w-[1024px] gap-20 lg:mt-16 mt-12">
          {steps.map((step, stepIndex) => (
            <div
              key={stepIndex}
              className={clsx(
                'relative grid grid-cols-1 lg:grid-cols-2',
                stepIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''
              )}
            >
              {/* Image */}
              <div className={clsx('relative aspect-square flex justify-center', stepIndex % 2 === 1 ? 'order-first lg:order-first' : 'order-first lg:order-last')}>
                <Image 
                  src={step.icon} 
                  alt='' 
                  className='md:rounded-[24px] rounded-[20px]' />
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
