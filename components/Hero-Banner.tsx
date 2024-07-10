'use client'
import React, { useState, useEffect } from "react"
import Image, { type ImageProps } from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { TypeAnimation } from 'react-type-animation'
import imgmakesheets from '@/images/screenshots/img_makesheets.jpg'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { ReactTyped } from 'react-typed'


export function HeroBanner() {

  return (
    <section id="hero" aria-label="hero" className="lg:pb-20 sm:pb-12 pb-12 lg:pt-12 sm:pt-8 pt-4">

      <Container className="flex flex-col">

          {/* MESSAGE GROUP */}
          <div className="flex flex-col">

            <div className="mx-auto justify-center tracking-widest max-w-full font-medium text-center text-black lg:text-lg text-base pb-2">
              TUTOR FOR KID
            </div>

            {/* BIG TEXT */}
            <h1 className="mx-auto max-w-full font-medium tracking-tight text-center text-black xl:text-9xl lg:text-7xl md:text-7xl sm:text-7xl text-6xl">
              Fun, Easy Learning with AI
            </h1>

          </div>

          <div className="mx-auto justify-center max-w-[700px] text-center text-gray-800 lg:text-3xl md:text-3xl sm:text-2xl text-lg lg:py-6 py-4">
            Help you with math, science, and grammar questions, and provide tutoring services for your kids.
          </div>

          {/* BUTTON */}
          <div className="lg:w-auto w-full flex justify-center lg:pb-12 sm:pb-10 pb-8">
            <Button 
              href="/home" 
              variant='solid' 
              color='primary' 
              size='medium' 
              className=''>
                Try it for free
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>


          <div className="relative w-full lg:h-[600px] md:h-[400px] sm:h-[300px] aspect-square mx-auto lg:p-6 md:p-5 p-3">
            <Image 
              src={imgmakesheets} // Make sure this path is correct
              alt="Feature image" 
              layout="fill" // Optional, use this if you want the image to fill the parent div
              objectFit="cover" // Optional, use this for proper scaling
              className="md:rounded-[24px] rounded-[20px]"
            />


            <div className="border border-white bg-white/80 backdrop-blur-lg lg:min-h-[50%] sm:min-h-[50%] h-fit lg:w-[380px] md:w-[280px] sm:w-[45%] w-[100%] lg:p-5 md:p-4 p-3 flex flex-col md:rounded-[16px] rounded-[14px]">
              
              <div className="lg:text-2xl sm:text-lg text-base text-primary font-semibold lg:pb-2 sm:pb-1 pb-0.5">
                Instruction
              </div>

              {/* SMALL TEXT */}
              <div className='flex-1 w-full text-black lg:text-4xl md:text-3xl sm:text-2xl text-xl'>
                Provide{" "}
                  <ReactTyped
                    strings={[
                      '10 math practice problems on multiplication word problems?', 
                      '10 grammar practice problems on identifying adverbs and verbs in sentences?', 
                      '30 chemistry practice problems on key aspects of the periodic table?'
                    ]}
                    typeSpeed={20}
                    loop
                    backSpeed={10}
                    backDelay={5000}
                    smartBackspace={true}
                    showCursor={true}
                  />
              </div>
            
            </div>
          </div>

      </Container>
    </section>
  )
}





// Old banner code

// export function HeroBanner() {

//   return (
//     <section id="hero" aria-label="hero" className="lg:pb-20 sm:pb-12 pb-12 lg:pt-10 sm:pt-6 pt-4">

//       <Container className="flex flex-col">

//           {/* MESSAGE GROUP */}
//           <div className="flex flex-col">

//             <div className="mx-auto justify-center tracking-widest max-w-full font-medium text-center text-black text-lg pb-2">
//               TUTOR FOR KID
//             </div>

//             {/* BIG TEXT */}
//             <h1 className="mx-auto max-w-full font-medium tracking-tight text-center text-black xl:text-9xl lg:text-7xl md:text-7xl sm:text-7xl text-6xl">
//               Fun, Easy Learning with AI
//             </h1>

//           </div>

//           <div className="mx-auto justify-center max-w-[700px] text-center text-gray-800 lg:text-3xl md:text-3xl sm:text-2xl text-xl py-8">
//             Help you with math, science, and grammar questions, and provide tutoring services for your kids.
//           </div>


//           <div className="relative w-full max-w-[1024px] lg:h-[576px] md:h-[576px] sm:aspect-square aspect-square mx-auto p-8">
//             <Image 
//               src={imgmakesheets} // Make sure this path is correct
//               alt="Feature image" 
//               layout="fill" // Optional, use this if you want the image to fill the parent div
//               objectFit="cover" // Optional, use this for proper scaling
//               className="md:rounded-[24px] rounded-[20px]"
//             />


//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:my-8 -my-8 border border-white bg-white/85 backdrop-blur-sm lg:min-w-[75%] md:min-w-[80%] min-w-[90%] lg:px-6 md:p-5 p-4 flex flex-col lg:flex-row items-center justify-between md:rounded-[16px] rounded-[12px] min-h-[102px] gap-y-4 gap-x-4 drop-shadow-2xl">
              
//               {/* SMALL TEXT */}
//               <div className='flex-1 w-full text-black lg:text-3xl md:text-3xl sm:text-2xl text-xl'>
//                 Can you{" "}
//                   <ReactTyped
//                     strings={[
//                       'provide 10 math practice problems on multiplication word problems?', 
//                       'provide 10 grammar practice problems on identifying adverbs and verbs in sentences?', 
//                       'provide 30 chemistry practice problems on key aspects of the periodic table?'
//                     ]}
//                     typeSpeed={20}
//                     loop
//                     backSpeed={10}
//                     backDelay={5000}
//                     smartBackspace={true}
//                     showCursor={true}
//                   />
//               </div>

//               {/* BUTTON */}
//               <div className="lg:w-auto w-full flex justify-end">
//                 <Button 
//                   href="/home" 
//                   variant='solid' 
//                   color='primary' 
//                   size='medium' 
//                   className='rounded-full'>
//                   Try it now
//                   <ArrowRightIcon className="w-5 h-5" />
//                 </Button>
//               </div>
            
//             </div>
//           </div>

//       </Container>
//     </section>
//   )
// }