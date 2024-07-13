import { Footer } from '@components/Footer'
import Image from 'next/image'
import { Header } from '@components/Header'
import { Container } from '@components/ui/container'
import { FTSolve } from '@/components/Logo'
import thumbnail from '@/images/screenshots/forethought/thumbnail.png'
import v0 from '@/images/screenshots/forethought/v-0.png'
import vInternal from '@/images/screenshots/forethought/v-internal.png'
import strategy from '@/images/screenshots/forethought/strategy.png'
import insight from '@/images/screenshots/forethought/insight.png'
import concept1 from '@/images/screenshots/forethought/concept1.png'
import concept2 from '@/images/screenshots/forethought/concept2.png'
import concept3 from '@/images/screenshots/forethought/concept3.png'
import solution from '@/images/screenshots/forethought/solution.png'



export default function Solve() {

  return (
    <>    
      <Header />
      <div className='w-full'>
        
        {/* Title */}
        <Container className='py-16 flex flex-col lg:gap-12 gap-8'>
          <div className='grid justify-center'>
            <FTSolve />
          </div>

          <div className='flex flex-col lg:text-8xl text-6xl font-semibold justify-center text-center'>
            Forethought Solve - The Workflow Builder
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            <div className='flex flex-col gap-1 md:items-start items-center'>
              <p className='font-mono font-semibold text-base text-black'>
                Timeline
              </p>
              <p className='text-lg font-mono md:text-start text-center'>
                Dec. 2021- Oct. 2023
              </p>
            </div>

            <div className='flex flex-col gap-1 md:items-start items-center'>
              <p className='font-mono font-semibold text-base text-black'>
                Role
              </p>
              <p className='text-lg font-mono md:text-start text-center'>
                Lead Product Designer
              </p>
            </div>

            <div className='flex flex-col gap-1 md:items-start items-center'>
              <p className='font-mono font-semibold text-base text-black'>
                Responsibilities
              </p>
              <p className='text-lg font-mono md:text-start text-center'>
                UI/UX, Visual Design, Prototyping & Testing
              </p>
            </div>
          </div>
        </Container>


        {/* Herobanner */}
        <div className="my-16 mx-auto relative md:h-[600px] h-[360px] max-w-[1140px] flex justify-center bg-indigo-200 ">
          <Image
            src={thumbnail}
            alt="Banner"
            layout="fill"
            objectFit="contain"
            className='p-6'
          />
        </div>


        {/* Overview */}
        <Container className='py-16'>
          <div className='text-5xl font-semibold pb-3'>Overview</div>
          <div className='text-xl pb-4'>
            Forethought Solve is an AI-powered customer support platform, combined with natural language understanding and generative AI to provide customers with the right answers.
          </div>
          <div className='text-xl'>
            <span className='font-semibold'>Workflow Builder</span> is a tool that allows admins to create, customize, and manage workflows.
          </div>
        </Container>


        {/* Problem */}
        <Container className='py-16'>
          <div className='text-5xl font-semibold pb-3'>Problem</div>
          <div className='text-xl pb-4'>
            Workflow Builder empowers CS teams to enhance the end-user experience. The more workflows are created, the better end-user experience becomes.
          </div>
          <div className='text-xl pb-4'>
            In September 2021, the company introduced Workflow Builder (v.0), featuring a graphical interface for CS admins to edit workflows. The goal was to enable self-service and reduce the workload of Implementation Engineers. However, there was a lack of motivation for our clients' admins to try it.
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <Image
                src={vInternal}
                alt="Internal version"
              />
              <p className='text-black pt-1 text-base'><span className='font-semibold'>Internal version -</span> The builder was not available to external users. Clients had to rely on our IEs, which was an inefficient process.</p>
            </div>

            <div>
              <Image
                src={v0}
                alt="Internal version"
              />
              <p className='text-black pt-1 text-base'><span className='font-semibold'>Version 0 -</span> Decision tree diagram builder</p>
            </div>
          </div>
        </Container>


        {/* Strategy */}
        <Container className='py-16'>
          <div className='text-5xl font-semibold pb-3'>Strategy</div>
          <div className='text-xl pb-4'>
            I have limited opportunities to speak directly with clients. To understand their needs, I consulted with our VP of Product, Product Managers, Sales Representatives, Implementation Engineers, and other team members. From these discussions, I have identified some possible reasons.
          </div>

          <div className="relative md:h-[600px] h-[360px] flex justify-center bg-gray-100 ">
            <Image
              src={strategy}
              alt="Strategy"
              layout="fill"
              objectFit="contain"
              className=''
            />
          </div>
        </Container>


        {/* Design Goal */}
        <Container className='py-16'>
          <div className='text-5xl font-semibold pb-3'>Design Goal</div>

          <div className='grid md:grid-cols-2 grid-cols-1 text-xl gap-10'>
            <div className='flex flex-col'>
              <div className='text-3xl font-semibold py-4'>
                1. Easy and engaging for non-technical users
              </div>

              <ul className='list-disc pl-5 gap-5 flex flex-col'>
                <li>Provide CS admins a visual interface for creating conversational workflows, including complex sequences of action and conditions.</li>
                <li>Allow non-technical CS admin to launch a chatbot with no coding skills.</li>
                <li>Reduce Forethought Implement Engineer team workload.</li>
                <li>Promote self-service and drive product growth.</li>
                <li>Bridge the gap between our product and that of competitors.</li>
              </ul>
            </div>

            <div className='flex flex-col'>
              <div className='text-3xl font-semibold py-4'>
                2. Develop a design system
              </div>

              <ul className='list-disc pl-5 gap-5 flex flex-col'>
                <li>Design interface that aligns with Forethought new brand identity, brand voice and tone.</li>
                <li>Create a design system that sets standards and building blocks to maintain a consistent look and feel across all products and experiences.</li>
              </ul>
            </div>
          </div>
        </Container>


        {/* Ideation */}
        <Container className='py-16'>
          <div className='grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
              <div className='text-5xl font-semibold pb-3'>Insight & Ideation</div>
              <div className='text-xl pb-4'>
                Base on the findings, CS admins often use mind mapping tools to organize their ideas, scripts, and processes. Also, they frequently need to tailor and refine their chatbot scripts.
              </div>
            </div>

            <div className='col-span-1'>
              <Image
                src={insight}
                alt="Insight"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 pt-8 gap-8">
            <div>
              <Image
                src={concept1}
                alt="Internal version"
              />
              <p className='text-black pt-2 text-base font-semibold'>Concept 1 - Timeline blocks</p> 
              <p className='text-black text-base'>Each step or action displayed as a block from left to right.</p>
            </div>

            <div>
              <Image
                src={concept2}
                alt="Internal version"
              />
              <p className='text-black pt-2 text-base font-semibold'>Concept 2 - Accordion layouts</p> 
              <p className='text-black text-base'>Organizes workflow elements into collapsible sections for focused use.</p>
            </div>

            <div>
              <Image
                src={concept3}
                alt="Internal version"
              />
              <p className='text-black pt-2 text-base font-semibold'>Concept 3 - Chat-based interface</p> 
              <p className='text-black text-base'>Each workflow step is represented as a message exchange between the user and the system.</p>
            </div>
          </div>
        </Container>


        {/* Solution */}
        <Container className='py-16'>
          <div className='text-5xl font-semibold pb-3'>Solution</div>
          <div className='text-xl pb-4'>
            <span className='font-semibold'>Chat-Based UI</span> enables users to build workflows that align with natural communication patterns, enhancing user-friendliness, especially for those unfamiliar with traditional interfaces or technology.
          </div>

          <div className="relative md:h-[600px] h-[360px] flex justify-center bg-indigo-200">
            <Image
              src={solution}
              alt="Strategy"
              layout="fill"
              objectFit="contain"
              className='p-6'
            />
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 pt-4 gap-4">
            <div className='flex'>
              <p className='w-6 text-black pb-1 text-xl font-semibold'>1.</p>
              <div className='flex-1'>
                <p className='text-black text-xl font-semibold'>Intent Section</p> 
                <p className='text-black text-base pt-1'>It provides an example of phrases indicating customers’ intentions to inquire.</p>
              </div>
            </div>

            <div className='flex'>
              <p className='w-6 text-black pb-1 text-xl font-semibold'>2.</p>
              <div className='flex-1'>
                <p className='text-black text-xl font-semibold'>Builder Canvas</p> 
                <p className='text-black text-base pt-1'>It is where the entire conversation is crafted, replacing the traditional tree diagram.</p>
              </div>
            </div>

            <div className='flex'>
              <p className='w-6 text-black pb-1 text-xl font-semibold'>3.</p>
              <div className='flex-1'>
                <p className='text-black text-xl font-semibold'>Input and Business Logic Components</p> 
                <p className='text-black text-base pt-1'>Type a message as a response to the user when they interact with your widget.</p>
              </div>
            </div>
          </div>
        </Container>
        
      </div>
      <Footer />
    </>
  )
}
