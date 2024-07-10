'use client'

import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/ui/container'  
import feature1 from '@/images/screenshots/feature1.png'
import feature2 from '@/images/screenshots/feature2.png'
import feature3 from '@/images/screenshots/feature3.png'
import feature4 from '@/images/screenshots/feature4.png'
import feature5 from '@/images/screenshots/feature5.png'
import featureIntegration from '@/images/screenshots/feature_integration.png'
import featureTraining from '@/images/screenshots/feature_training.png'
import featureLanguage from '@/images/screenshots/feature_language.png'


interface Feature {
  name: React.ReactNode
  description: string
  image: ImageProps['src']
}

const features: Array<Feature> = [
  {
    name: 'Chat Integrations',
    description:
      'With native integrations into platforms like Crisp, Intercom, and Zendesk.',
    image: featureIntegration,
  },
  {
    name: 'Import Training Content',
    description:
      'Build a custom chatbot trained on your own content',
    image: featureTraining,
  },
  {
    name: '95+ Language Supported',
    description:
      'Let visitor ask questions and respond in any language',
    image: featureLanguage,
  },
  {
    name: 'Escalate to Human',
    description:
      'Escalate to a human when necessary.',
    image: feature4,
  },
  {
    name: 'Email Summaries',
    description:
      'Stay up to date with daily email summaries.',
    image: feature5,
  },
]

function Feature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature
  isActive: boolean
}) {
  return (
    <div className={clsx(className, !isActive && 'opacity-60 hover:opacity-90')}{...props}>

      <div className='flex lg:gap-x-6 gap-x-4'>


      </div>
    </div>    
  )
}

function FeaturesMobile() {
  return (
    <div className="mt-12 flex flex-col gap-y-12 overflow-hidden md:hidden">
      {features.map((feature, index) => (
        <div key={index}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-6">
            <div className="relative aspect-square overflow-hidden rounded-[16px]">
              <Image className="w-full" src={feature.image} alt="" sizes="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <div className="mx-auto grid gap-5 lg:mt-16 mt-12">
    
      <div className="grid grid-cols-2 gap-5">
        {features.slice(0, 2).map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="bg-gray-200/60 aspect-h-1 aspect-w-1 relative flex flex-col justify-between p-6 rounded-[16px] gap-y-4"
          >
            <div className="w-full flex flex-col z-10">
              <h3 className="lg:text-3xl sm:text-3xl text-2xl font-semibold">{feature.name}</h3>
              <p className="mt-1 text-lg text-black">{feature.description}</p>
            </div>

            <div className="px-12">
              <Image 
                className="p-auto"
                src={feature.image} 
                alt="" 
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5">
        {features.slice(2).map((feature, featureIndex) => (
          <div
            key={featureIndex + 2}  // Adjust the key to avoid duplicates
            className="bg-gray-200/60 aspect-h-1 aspect-w-1 relative flex flex-col justify-between p-6 rounded-[16px] gap-y-4"
          >
            <div className="w-full flex flex-col z-10">
            <h3 className="lg:text-3xl sm:text-3xl text-2xl font-semibold">{feature.name}</h3>
              <p className="mt-1 text-lg text-black">{feature.description}</p>
            </div>

            <div className="px-10">
              <Image 
                className="p-auto"
                src={feature.image} 
                alt="" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



export function Features() {
  return (
    <section
      id="features"
      aria-label="Powerful features"
      className="bg-gray-50 lg:py-20 py-12"
    >
      <Container>
        <div className="mx-auto lg:max-w-4xl max-w-2xl md:text-center">
          <h1 className="lg:max-w-4xl max-w-2xl mx-auto font-medium tracking-tight text-black text-center md:text-8xl text-5xl w-full pb-4">
            How it works
          </h1>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
