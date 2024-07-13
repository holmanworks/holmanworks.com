import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, } from 'react'
import clsx from 'clsx'
import React from 'react';
import { Container } from '@components/ui/container'
import thumbnail from '@/images/screenshots/forethought/thumbnail.png'



const steps = [
  {
      title: 'Forethought Solve - the workflow builder',
      date: 'Dec 2021 - Oct 2023',
      image: thumbnail,
      content: '•UI/UX •Visual Design •Prototyping & Testing',
      link: '/forethoughtSolve',
      bgColor: 'bg-indigo-200',
  },
]

export function Thumbnail() {
  return (
    <section id="thumbnail" aria-label="thumbnail" className="">

      <Container>

        <div className="mx-auto w-full">
          {steps.map((step, stepIndex) => (
            <div key={stepIndex} className='relative grid md:grid-cols-8 grid-cols-1 gap-6'>

              {/* Image */}
              <Link 
                href={step.link}
                className={clsx("md:h-[480px] h-[360px] col-span-6 p-8 flex justify-center", step.bgColor)}
              >
                  <div className="relative w-full">
                    <Image
                      src={step.image}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-300 ease-in-out transform hover:scale-95"
                    />
                  </div>

              </Link>


              {/* Text */}
              <div className='col-span-2 flex flex-col'>

                  <div className="font-mono text-medium text-base text-black pb-5">
                    {step.title}
                  </div>

                  {step.content.split('•').map((sentence, idx) => (
                    <p key={idx} className="text-base font-mono text-gray-500">
                      {sentence.trim()}
                    </p>
                  ))}

                  <p className="text-base font-mono text-gray-500 pt-5">
                    {step.date}
                  </p>
                </div>

            </div>
            
          ))}
        </div>
      </Container>
    </section>
  )
}
