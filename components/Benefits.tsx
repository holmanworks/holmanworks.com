import Image from 'next/image'
import { useEffect, useState, } from 'react'
import clsx from 'clsx'
import React from 'react';

import { Container } from '@components/ui/container'
import Feature1 from '@/images/screenshots/feature1.svg'
import Feature2 from '@/images/screenshots/feature2.svg'
import Feature3 from '@/images/screenshots/feature3.svg'


const steps = [
  {
    content:
      'Get new practice problems every session, so you never repeat the same ones.',
    title: 'New Practice Problems Every Time',
    icon: Feature1,    
  },
  {
    content:
      'Choose between using worksheets online or printing them out for convenience.',
    title: 'Online or Printable Worksheets',
    icon: Feature2,    
  },
  {
    content:
      'See your scores right away and get simple explanations to understand your answers.',
    title: 'Instant Scores with Easy Explanations',
    icon: Feature3,    
  },
]

export function Benefits() {
  return (
    <section
      id="benefits"
      aria-label=""
      className="bg-white lg:py-20 py-12"
    >
      <Container>
        <div className="mx-auto lg:max-w-4xl max-w-2xl md:text-center">

          <h1 className="max-w-[768px] mx-auto font-medium tracking-tight text-black text-center md:text-8xl text-5xl w-full pb-4">
            What you'll get          
          </h1>
          
        </div>

        <ul
          role="list"
          className="mx-auto grid max-w-4xl grid-cols-1 gap-16 lg:mt-16 mt-8 lg:max-w-none lg:grid-cols-3"
        >
          {steps.map((step, stepIndex) => (
            <li key={stepIndex}>

                    
                    <figure className="relative bg-white">

                      <div className="relative pb-4 flex justify-center">
                        <Image 
                          src={step.icon} 
                          alt={step.title} 
                          height={250}
                        />
                      </div>

                      <div>
                        <div className="font-medium lg:text-5xl sm:text-4xl text-3xl text-black text-center pb-2">
                          {step.title}
                        </div>

                        <p className="lg:text-xl text-lg text-black text-center">
                          {step.content}
                        </p>

                      </div>


                    </figure>
                  </li>
                ))}
              
        </ul>
      </Container>
    </section>
  )
}
