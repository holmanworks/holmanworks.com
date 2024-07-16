import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import React from 'react';
import { Container } from '@components/ui/container'
import thumbnail from '@/images/screenshots/forethought/thumbnail.png'
import oscover1 from '@/images/screenshots/oursong/oursong_cover_1.png'
import oscover2 from '@/images/screenshots/oursong/oursong_cover_2.gif'
import oscover3 from '@/images/screenshots/oursong/oursong_cover_3.png'

const steps = [
  {
    title: 'Forethought Solve - Workflow Builder',
    date: 'Dec 2021 - Oct 2023',
    image: [thumbnail],
    content: '•UI/UX •Visual Design •Prototyping & Testing',
    link: '/forethoughtSolve',
    bgColor: 'bg-indigo-200',
  },
  {
    title: 'OurSong - Music NFT + VIP Community',
    date: 'Jun 2019 - Nov 2022',
    image: [oscover1, oscover2, oscover3],
    content: '•UI/UX •Research •Visual Design •Prototyping & Testing',
    link: '/oursong',
    bgColor: 'bg-red-200',
  },
]

export function Thumbnail() {
  return (
    <section id="thumbnail" aria-label="thumbnail" className="">

      <Container>

        <div className="mx-auto w-full">
          {steps.map((step, stepIndex) => (
            <div key={stepIndex} className='relative grid md:grid-cols-8 grid-cols-1 gap-6 py-1'>

              {/* Image */}
              <Link 
                href={step.link}
                className={clsx("md:h-[480px] h-[360px] col-span-6 p-10 flex justify-center", step.bgColor)}
              >
                <div className={`relative w-full ${step.image.length > 1 ? 'flex gap-4' : ''}`}>
                  {step.image.map((imgSrc, imgIndex) => (
                    <div key={imgIndex} className={`relative ${step.image.length > 1 ? 'w-full h-full' : 'w-full h-full '}`}>
                      <Image
                        src={imgSrc}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-300 ease-in-out transform hover:scale-95"
                      />
                    </div>
                  ))}
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
