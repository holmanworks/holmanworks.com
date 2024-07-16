import { Footer } from '@components/Footer'
import Image from 'next/image'
import { Header } from '@components/Header'
import { Container } from '@components/ui/container'
import { OursongLogo } from '@/components/Logo'
import oscover1 from '@/images/screenshots/oursong/oursong_cover_1.png'
import oscover2 from '@/images/screenshots/oursong/oursong_cover_2.gif'
import oscover3 from '@/images/screenshots/oursong/oursong_cover_3.png'
import explore0 from '@/images/screenshots/oursong/Explore-0.png'
import explore1 from '@/images/screenshots/oursong/Explore-1.png'
import explore2 from '@/images/screenshots/oursong/Explore-2.png'
import explore3 from '@/images/screenshots/oursong/Explore-3.png'
import explore4 from '@/images/screenshots/oursong/Explore-4.png'

import v0 from '@/images/screenshots/forethought/v-0.png'
import vInternal from '@/images/screenshots/forethought/v-internal.png'
import strategy from '@/images/screenshots/forethought/strategy.png'
import insight from '@/images/screenshots/forethought/insight.png'
import concept1 from '@/images/screenshots/forethought/concept1.png'
import concept2 from '@/images/screenshots/forethought/concept2.png'
import concept3 from '@/images/screenshots/forethought/concept3.png'
import solution from '@/images/screenshots/forethought/solution.png'
import feature1 from '@/images/screenshots/forethought/gif_buttons.gif'
import feature2 from '@/images/screenshots/forethought/gif_dragndrop.gif'
import feature3 from '@/images/screenshots/forethought/gif_rightpanel.gif'
import trainingphrase from '@/images/screenshots/forethought/wfb_trainingphrase.png'
import preview from '@/images/screenshots/forethought/wfb_preview.png'
import barometer from '@/images/screenshots/forethought/wfb_barometer.png'
import copypaste from '@/images/screenshots/forethought/wfb_copypaste.png'
import translation from '@/images/screenshots/forethought/wfb_translations.png'
import iteration1 from '@/images/screenshots/forethought/iteration1.png'
import iteration2 from '@/images/screenshots/forethought/iteration2.png'
import designsystem from '@/images/screenshots/forethought/designsystem.png'
import bugbash from '@/images/screenshots/forethought/bugbash.png'
import validation from '@/images/screenshots/forethought/validation.png'
import vmware from '@/images/screenshots/forethought/ic_vmware.jpg'
import upwork from '@/images/screenshots/forethought/ic_upwork.jpg'
import ifit from '@/images/screenshots/forethought/ic_ifit.jpg'
import v2cover from '@/images/screenshots/forethought/wfb_v2_cover.png'


export default function Oursong() {

  return (
    <>    
      <Header />
      <div className='w-full text-black'>
        
        {/* Title */}
        <Container className='py-16 flex flex-col lg:gap-12 gap-8'>
          <div className='grid justify-center'>
            <OursongLogo />
          </div>

          <div className='flex flex-col lg:text-9xl text-6xl font-medium justify-center text-center'>
            OurSong - Music NFT + VIP Community
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            <div className='flex flex-col gap-1 md:items-start items-center'>
              <p className='font-mono font-semibold text-base text-black'>
                Timeline
              </p>
              <p className='text-lg md:text-start text-center'>
                Jun 2019 - Nov 2022
              </p>
            </div>

            <div className='flex flex-col gap-1 md:items-start items-center'>
              <p className='font-mono font-semibold text-base text-black'>
                Role
              </p>
              <p className='text-lg md:text-start text-center'>
                Manager, Product Design / Founding Designer
              </p>
            </div>

            <div className='flex flex-col gap-1 md:items-start items-center'>
              <p className='font-mono font-semibold text-base text-black'>
                Responsibilities
              </p>
              <p className='text-lg md:text-start text-center'>
                UI/UX, Research, Visual Design, Prototyping & Testing
              </p>
            </div>
          </div>
        </Container>


        {/* Herobanner */}
        <div className="my-16 mx-auto flex gap-8 max-w-[1140px] justify-center bg-red-200 p-10">
            <Image src={oscover1} alt="cover1" className='h-[520px] w-auto border-[6px] border-black rounded-[36px]' />
            <Image src={oscover2} alt="cover2" className='h-[520px] w-auto border-[6px] border-black rounded-[36px]'/>
            <Image src={oscover3} alt="cover3" className='h-[520px] w-auto border-[6px] border-black rounded-[36px]'/>
        </div>


        {/* Overview */}
        <Container className='py-16'>
          <div className='text-5xl font-medium pb-3'>Overview</div>
          <div className='grid md:grid-cols-3 grid-cols-1 text-xl gap-10'>

            <div className='flex flex-col'>
              <div className='text-3xl font-medium py-4'>
                What is OurSong?
              </div>
              <div className='text-lg pb-4'>
                The blockchain-based platform was designed to give creators, including musicians and artists, a more equitable way to monetize their work, and build communities around them.
              </div>
              <div className='text-lg pb-4'>
                The company was co-founded by:
              </div>

              <ul className='list-disc pl-5 gap-1 flex flex-col text-lg'>
                <li><span className='font-semibold'>Chris Lin</span>, CEO of KKBOX</li>
                <li><span className='font-semibold'>Kevin Lin</span>, Co-founder of Twitch</li>
              </ul>
            </div>

            <div className='flex flex-col'>
              <div className='text-3xl font-medium py-4'>
                Users
              </div>
              <div className='text-lg pb-4'>
                <span className='font-semibold'>Creators / Artists</span> -  Independent artist, uses our platform to connect with her fans and creates digital merch for the metaverse.
              </div>
              <div className='text-lg pb-4'>
                <span className='font-semibold'>Collectors / Fans</span> -  Gen-Z individuals who are eager to support their favorite artists or creators through buying their works and perks.              </div>
            </div>

            <div className='flex flex-col'>
              <div className='text-3xl font-medium py-4'>
                Project Goal
              </div>
              <div className='text-lg pb-4'>
                I led efforts to boost user engagement after our initial app launch. To achieve this, we need to:
              </div>

              <ul className='list-disc pl-5 gap-5 flex flex-col text-lg'>
                <li>Improve fan/user engagement.</li>
                <li>Implement self-serviceability to simplify NFT creation.</li>
                <li>Expand monetization opportunities for creators beyond NFT sales.</li>
              </ul>
            </div>

          </div>
        </Container>


        {/* Background */}
        <Container className='py-16'>
          <div className='text-5xl font-medium pb-3'>Background</div>
          <div className='text-lg pb-4'>
            OurSong began as a blockchain research project at the Ideation Lab of KKBOX, an on-demand music streaming service in asia.
          </div>
          <div className='text-lg pb-4'>
            In May 2019, OurSong (v.1) was launched, utilizing blockchain technology to create limited edition NFTs represented as virtual cards, essentially digital token.  The NFTs are collectible due to supply is limited, and each one is uniquely owned by its owner.  Our platform also allows collectors to trade these NFTs on our marketplace.
          </div>

          <div className="grid md:grid-cols-5 grid-cols-1 gap-8 pt-1">
            <div>
              <Image src={explore0} alt="" className='h-auto w-auto border-[4px] border-black rounded-[22px]' />
              <p className='text-black pt-2 text-base text-center'>Explore available Music NFTs</p>
            </div>

            <div>
              <Image
                src={v0}
                alt=""
              />
              <p className='text-black pt-2 text-base'><span className='font-semibold'>Version 0 -</span> Decision tree diagram builder</p>
            </div>
          </div>
        </Container>


        {/* Strategy */}
        <Container className='py-16'>
          <div className='text-5xl font-medium pb-3'>Strategy</div>
          <div className='text-lg pb-4'>
            I have limited opportunities to speak directly with clients. To understand their needs, I consulted with our VP of Product, Product Managers, Sales Representatives, Implementation Engineers, and other team members. From these discussions, I have identified some possible reasons.
          </div>

          <div className="relative md:h-[600px] h-[360px] flex justify-center bg-gray-100">
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
          <div className='text-5xl font-medium pb-3'>Design Goal - Phase 1</div>

          <div className='grid md:grid-cols-2 grid-cols-1 text-xl gap-10'>

            <div className='flex'>
              <div className='text-3xl w-8 font-medium py-4'>1.</div>
              <div className='flex-1'>
                <div className='text-3xl font-medium py-4'>
                  Easy and engaging for non-technical users
                </div>

                <ul className='list-disc pl-5 gap-5 flex flex-col text-lg'>
                  <li>Provide CS admins a visual interface for creating conversational workflows, including complex sequences of action and conditions.</li>
                  <li>Allow non-technical CS admin to launch a chatbot with no coding skills.</li>
                  <li>Reduce Forethought Implement Engineer team workload.</li>
                  <li>Promote self-service and drive product growth.</li>
                  <li>Bridge the gap between our product and that of competitors.</li>
                </ul>
              </div>
            </div>

            <div className='flex'>
              <div className='text-3xl w-8 font-medium py-4'>2.</div>
              <div className='flex-1'>
                <div className='text-3xl font-medium py-4'>
                  Develop a design system
                </div>

                <ul className='list-disc pl-5 gap-5 flex flex-col text-lg'>
                  <li>Design interface that aligns with Forethought new brand identity, brand voice and tone.</li>
                  <li>Create a design system that sets standards and building blocks to maintain a consistent look and feel across all products and experiences.</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>


        {/* Insight & Ideation */}
        <Container className='py-16'>
          <div className='grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
              <div className='text-5xl font-medium pb-3'>Insight & Ideation</div>
              <div className='text-lg pb-4'>
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


        {/* The Design */}
        <Container className='py-16'>
          <div className='text-5xl font-medium pb-3'>The Design</div>
          <div className='text-lg pb-4'>
            <span className='font-semibold'>Chat-Based UI</span> enables users to build workflows that align with natural communication patterns, enhancing user-friendliness, especially for those unfamiliar with traditional interfaces or technology.
          </div>

          <div className="relative md:h-[480px] h-[360px] flex justify-center bg-indigo-200">
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
              <p className='w-6 text-black pb-1 text-2xl font-medium'>1.</p>
              <div className='flex-1'>
                <p className='text-black text-2xl font-medium'>Intent Section</p> 
                <p className='text-black text-base pt-1'>It provides an example of phrases indicating customers’ intentions to inquire.</p>
              </div>
            </div>

            <div className='flex'>
              <p className='w-6 text-black pb-1 text-2xl font-medium'>2.</p>
              <div className='flex-1'>
                <p className='text-black text-2xl font-medium'>Builder Canvas</p> 
                <p className='text-black text-base pt-1'>It is where the entire conversation is crafted, replacing the traditional tree diagram.</p>
              </div>
            </div>

            <div className='flex'>
              <p className='w-6 text-black pb-1 text-2xl font-medium'>3.</p>
              <div className='flex-1'>
                <p className='text-black text-2xl font-medium'>Input and Business Logic Components</p> 
                <p className='text-black text-base pt-1'>Type a message as a response to the user when they interact with your widget.</p>
              </div>
            </div>
          </div>
        </Container>


        {/* Features */}
        <Container className='py-8 flex flex-col gap-8'>
          <div className='grid md:grid-cols-3 grid-cols-1 text-xl md:gap-8'>
            <div className='flex flex-col justify-center col-span-1 gap-1'>
              <div className='md:text-4xl text-2xl font-medium'>
                1-click navigate through different branches
              </div>
              <p className='text-base flex flex-col pb-2'>
                Easily navigate each branch to focus on the conversation in each subcategory.
              </p>
            </div>

            <div className='col-span-2'>
              <Image
                src={feature1}
                alt="Feature 1"
                layout="fit"
                objectFit="contain"
                className=''
              />
            </div>
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 text-xl md:gap-8'>
            <div className='flex flex-col justify-center col-span-1 gap-1'>
              <div className='md:text-4xl text-2xl font-medium'>
                Drag and drop
              </div>
              <p className='text-base flex flex-col pb-2'>
                Enables users to drag and drop pre-configured elements from the right panel, ensuring accessibility for those without technical expertise.
              </p>
            </div>

            <div className='col-span-2'>
              <Image
                src={feature2}
                alt="Feature 2"
                layout="fit"
                objectFit="contain"
                className=''
              />
            </div>
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 text-xl md:gap-8'>
            <div className='flex flex-col justify-center col-span-1 gap-1'>
              <div className='md:text-4xl text-2xl font-medium'>
                Hierarchy of visual elements
              </div>
              <p className='text-base flex flex-col pb-2'>
                Allows users to customize the right panel of elements without navigating through multiple menus or interfaces.
              </p>
            </div>

            <div className='col-span-2'>
              <Image
                src={feature3}
                alt="Feature 3"
                layout="fit"
                objectFit="contain"
                className=''
              />
            </div>
          </div>
        </Container>


        {/* More */}
        <Container className='py-16'>
          <div className='text-5xl font-medium pb-4'>More Features</div>

          <ul role="list" className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <li>
              <Image src={trainingphrase} alt=""/>
              <div className='flex pt-2 text-base'>Chatbot training</div>
            </li>

            <li>
              <Image src={preview} alt=""/>
              <div className='flex pt-2 text-base'>Chatbot testing</div>
            </li>

            <li>
              <Image src={barometer} alt=""/>
              <div className='flex pt-2 text-base'>Chatbot health monitoring</div>
            </li>

            <li>
              <Image src={copypaste} alt=""/>
              <div className='flex pt-2 text-base'>Reuse steps or workflows</div>
            </li>

            <li>
              <Image src={translation} alt=""/>
              <div className='flex pt-2 text-base'>Support multilingual</div>
            </li>
          </ul>
        </Container>


        {/* Iteration */}
        <Container className='py-16'>
          <div className='text-5xl font-medium pb-3'>Iteration</div>
          <div className='text-lg pb-4'>
            The toughest part of this project is making sure everything looks clear and that interactions are consistent, especially when dealing with issues like “users can’t delete” and understanding why certain actions are restricted.
          </div>
          <div className='text-lg pb-4'>
            To accomplish this, we explore every use case and scenario, using clear labels, tooltips, dialog-box, and well-organized visual layout to guide users effectively.
          </div>

          <div className="flex flex-col bg-gray-100 p-10 gap-10">
            <Image src={iteration1} alt="" />
            <Image src={iteration2} alt="" />
          </div>
        </Container>


        {/* Design System */}
        <Container className='py-16'>
          <div className='text-5xl font-medium pb-3'>Design System</div>
          <div className='text-lg pb-4'>
            When designing a component for a design system, it’s essential to consider all potential use cases, and should be adaptable and scalable to different products within the organization.
          </div>

          <div className="flex flex-col bg-gray-100 p-10 gap-10">
            <Image src={designsystem} alt="" />
          </div>
        </Container>


        {/* Bug Bash */}
        <Container className='py-16'>
          <div className='text-5xl font-medium pb-3'>Bug Bash</div>
          <div className='text-lg pb-4'>
            I worked very closely with the Front End team to spec out any missing interactions that were not covered in the high fidelity mockups. 
          </div>
          <div className='text-lg pb-4'>
            I utilized Chrome “Inspect” to assist engineers in debugging and fixing code issue.
          </div>

          <div className="flex flex-col bg-gray-100 p-10 gap-10">
            <Image src={bugbash} alt="" />
          </div>
        </Container>

        
        {/* User Feedbacks */}
        <Container className='py-16'>
          <div className='grid grid-cols-2 gap-8'>
            <div className='col-span-1'>
              <div className='text-5xl font-medium pb-3'>User Feedbacks</div>
              <div className='text-lg pb-4'>
                We conducted user interview and remote testing sessions regularly with our clients, helped us to validate, test ideas and iterate quickly.
              </div>
            </div>

            <div className='col-span-1'>
              <Image src={validation} alt="" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 pt-8 gap-8">
            <div className='flex flex-col gap-1'>
              <div className='flex gap-4'>
                <Image src={vmware} alt="" className='w-10 h-10' />
                <div className='flex flex-col'>
                  <div className='text-2xl font-medium'>CS Admin</div>
                  <div className='text-base'>VMware</div>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='flex-1'>
                  <p className='text-black text-lg pt-2 italic'>" ... implementation has been easy and thorough and the tool is very easy to use.  I’m still early into configuration but so far the experience has been great… "</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <div className='flex gap-4'>
                <Image src={upwork} alt="" className='w-10 h-10' />
                <div className='flex flex-col'>
                  <div className='text-2xl font-medium'>Project Manager/Admin</div>
                  <div className='text-base'>Upwork</div>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='flex-1'>
                  <p className='text-black text-lg pt-2 italic'>" ... I really like this product, the workflow builder is awesome.  It’s really easy to understand. Seeing the status per bubble helps (Barometer). Training the workflow is easy… ”</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <div className='flex gap-4'>
                <Image src={ifit} alt="" className='w-10 h-10' />
                <div className='flex flex-col'>
                  <div className='text-2xl font-medium'>Operations Manager</div>
                  <div className='text-base'>iFit</div>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='flex-1'>
                  <p className='text-black text-lg pt-2 italic'>" ... it’s not complex, not like you need to take an online courses to figure out how to use it, utilize the AI and the interface to make it as simple and as intuitive… “</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        

        {/* Results */}
        <Container className='py-16'>
          <div className='text-5xl font-medium pb-3'>Results</div>
          <div className='text-lg pb-8'>
            The introduction of Solve version 1.0 has not only significantly improved its product-market fit but has also:
          </div>

          <div className='flex'>
            <ul className='list-disc pl-6 gap-4 flex flex-col md:text-4xl text-2xl'>
              <li>Generated over <span className='font-semibold'>50%</span> of the company's revenue.</li>
              <li>Reduce the first valuable moment from 120 days to <span className='font-semibold'>32 days</span>.</li>
              <li>Self-serviceability increased by over <span className='font-semibold'>10%</span>.</li>
            </ul>
          </div>
        </Container>


        {/* Continued improvements */}
        <Container className='py-16'>
          <div className='p-10 bg-gray-100'>
            <div className='grid grid-cols-2 gap-10'>
              <div className='flex flex-col'>
                <div className='col-span-1'>
                  <div className='text-5xl font-medium pb-4'>Continued improvements</div>
                </div>

                <div className='flex'>
                  <ul className='list-disc pl-6 gap-5 flex flex-col text-lg'>
                    <li><span className='font-semibold'>Improve efficiency</span> - Drag-and-drop components speed up workflow building.</li>
                    <li><span className='font-semibold'>Scalable design</span> - Maintains optimal user experience as features grow.</li>
                    <li><span className='font-semibold'>Reduce friction</span> - Clear error messages guide users on corrective steps.</li>
                  </ul>
                </div>
              </div>

              <div className='col-span-1'>
                <Image src={v2cover} alt="" />
              </div>
            </div>
          </div>
        </Container>

      </div>
      <Footer />
    </>
  )
}
