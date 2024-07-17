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
import insight from '@/images/screenshots/oursong/insight.png'
import pivot1 from '@/images/screenshots/oursong/pivot1.png'
import pivot2 from '@/images/screenshots/oursong/pivot2.gif'
import pivot3 from '@/images/screenshots/oursong/pivot3.png'
import research from '@/images/screenshots/oursong/research.png'
import insight2 from '@/images/screenshots/oursong/insight2.png'
import solution1 from '@/images/screenshots/oursong/solution1.png'
import solution2 from '@/images/screenshots/oursong/solution2.gif'
import selfservice from '@/images/screenshots/oursong/self-servicing.gif'

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
        <div className="my-16 mx-auto flex flex-wrap gap-8 max-w-[1140px] justify-center bg-red-200 p-10">
            <Image src={oscover1} alt="cover1" className='h-[520px] w-auto border-[6px] border-black rounded-[36px]' />
            <Image src={oscover2} alt="cover2" className='h-[520px] w-auto border-[6px] border-black rounded-[36px]'/>
            <Image src={oscover3} alt="cover3" className='h-[520px] w-auto border-[6px] border-black rounded-[36px]'/>
        </div>


        {/* Overview */}
        <Container className='py-16'>
          <div className='text-5xl font-medium pb-4'>Overview</div>
          <div className='grid md:grid-cols-3 grid-cols-1 text-xl gap-10'>

            <div className='flex flex-col gap-4 pt-4'>
              <div className='text-3xl font-medium'>
                What is OurSong?
              </div>
              <div className='text-lg'>
                The blockchain-based platform was designed to give creators, including musicians and artists, a more equitable way to monetize their work, and build communities around them.
              </div>
              <div className='text-lg'>
                The company was co-founded by:
              </div>

              <ul className='list-disc pl-5 gap-1 flex flex-col text-lg'>
                <li><span className='font-bold'>Chris Lin</span>, CEO of KKBOX</li>
                <li><span className='font-bold'>Kevin Lin</span>, Co-founder of Twitch</li>
              </ul>
            </div>

            <div className='flex flex-col gap-4 pt-4'>
              <div className='text-3xl font-medium'>
                Users
              </div>
              <div className='text-lg'>
                <span className='font-bold'>Creators / Artists</span> -  Independent artist, uses our platform to connect with her fans and creates digital merch for the metaverse.
              </div>
              <div className='text-lg'>
                <span className='font-bold'>Collectors / Fans</span> -  Gen-Z individuals who are eager to support their favorite artists or creators through buying their works and perks.              </div>
            </div>

            <div className='flex flex-col gap-4 pt-4'>
              <div className='text-3xl font-medium'>
                Project Goal
              </div>
              <div className='text-lg'>
                I led efforts to boost user engagement after our initial app launch. To achieve this, we need to:
              </div>

              <ul className='list-disc pl-5 gap-4 flex flex-col text-lg'>
                <li>Improve fan/user engagement.</li>
                <li>Implement self-serviceability to simplify NFT creation.</li>
                <li>Expand monetization opportunities for creators beyond NFT sales.</li>
              </ul>
            </div>

          </div>
        </Container>


        {/* Background */}
        <Container className='py-16 flex flex-col gap-4'>
          <div className='text-5xl font-medium'>Background</div>
          <div className='text-lg'>
            OurSong began as a blockchain research project at the Ideation Lab of KKBOX, an on-demand music streaming service in asia.
          </div>
          <div className='text-lg'>
            In May 2019, OurSong (v.1) was launched, utilizing blockchain technology to create limited edition NFTs represented as virtual cards, essentially digital token.  The NFTs are collectible due to supply is limited, and each one is uniquely owned by its owner.  Our platform also allows collectors to trade these NFTs on our marketplace.
          </div>

          <div className="grid grid-cols-5 gap-4 py-2">
            <div>
              <Image src={explore0} alt="" className='h-auto w-auto border-[4px] border-black rounded-[22px]' />
              <p className='text-black pt-2 px-2 text-base text-center'>Explore available Music NFTs</p>
            </div>

            <div className=''>
              <Image src={explore1} alt="" className='h-auto w-auto border-[4px] border-black rounded-[22px]' />
              <p className='text-black pt-2 px-2 text-base text-center'>Discover the details behind of a song</p>
            </div>

            <div>
              <Image src={explore3} alt="" className='h-auto w-auto border-[4px] border-black rounded-[22px]' />
              <p className='text-black pt-2 px-2 text-base text-center'>Music NFTs showcased as virtual cards</p>
            </div>

            <div className=''>
              <Image src={explore4} alt="" className='h-auto w-auto border-[4px] border-black rounded-[22px]' />
              <p className='text-black pt-2 px-2 text-base text-center'>Swipe the card for exclusive contents</p>
            </div>

            <div>
              <Image src={explore2} alt="" className='h-auto w-auto border-[4px] border-black rounded-[22px]' />
              <p className='text-black pt-2 px-2 text-base text-center'>Buy or sell on our marketplace</p>
            </div>
          </div>

          <div className='text-2xl font-medium py-4 text-gray-500'>
            Key takeaways after the first launch:
          </div>
          <div className='flex'>
            <ul className='list-disc pl-6 gap-4 flex flex-col md:text-4xl text-2xl'>
              <li>Fans showed willingness to pay.</li>
              <li>Artists/Creators struggled to explain NFTs to fans.</li>
              <li>Low engagement post-purchase.</li>
              <li>Difficulty in acquiring artists due to NFT complexity and limited social influence.</li>
            </ul>
          </div>
        </Container>


        {/* Insight */}
        <Container className='grid md:grid-cols-2 grid-cols-1 py-16 gap-8'>
          <div className='flex flex-col col-span-1 gap-4'>
            <div className='text-5xl font-medium'>Insight</div>
            <div className='text-lg'>
              After the initial launch, our focus shifted to improving fan engagement to attract more creators. Increasing app retention became a key priority.
            </div>
            <div className='text-lg'>
              Analysis showed that a number of users engaged with the <span className='font-bold'>“Stories”</span> feature, where artists/creators post updates during song creation, with fans actively commenting on each post.
            </div>
            <div className='text-lg'>
              After the initial launch, our focus shifted to improving fan engagement to attract more creators. Increasing app retention became a key priority.
            </div>
          </div>

          <div className="col-span-1 relative flex justify-center bg-gray-200 pt-10 aspect-square">
            <Image src={insight} alt="" className='h-auto w-auto rounded-t-[22px]' />
          </div>
        </Container>


        {/* Quick pivot */}
        <Container className='py-16 gap-4 flex flex-col'>
          <div className='text-5xl font-medium'>Quick pivot</div>
          <div className='grid md:grid-cols-3 grid-cols-1 text-xl gap-12 pt-2'>

            <div className='flex md:flex-col gap-4 w-full'>
              <div className='md:w-full h-auto w-1/2'>
                <Image src={pivot1} alt="" className='border-[6px] border-black rounded-[32px]' />
              </div>
              <div className='flex flex-col px-1 md:w-full w-1/2'>
                <div className='text-3xl font-medium'>#1</div>
                <div className='text-3xl font-medium'>Improve clarity</div>
                <div className='text-lg pt-2'>
                  Provide clear information about the benefits of purchasing this NFT.
                </div>
              </div>
            </div>

            <div className='flex md:flex-col gap-4 w-full'>
              <div className='md:w-full h-auto w-1/2'>
                <Image src={pivot2} alt="" className='border-[6px] border-black rounded-[32px]' />
              </div>
              <div className='flex flex-col px-1 md:w-full w-1/2'>
                <div className='text-3xl font-medium'>#2</div>
                <div className='text-3xl font-medium'>Share your thoughts</div>
                <div className='text-lg pt-2'>
                  Allow fans to share their impressions with the artists/creators and all others who appreciate the song.
                </div>
              </div>
            </div>

            <div className='flex md:flex-col gap-4 w-full'>
              <div className='md:w-full h-auto w-1/2'>
                <Image src={pivot3} alt="" className='border-[6px] border-black rounded-[32px]' />
              </div>
              <div className='flex flex-col px-1 md:w-full w-1/2'>
                <div className='text-3xl font-medium'>#3</div>
                <div className='text-3xl font-medium'>Get exclusive message</div>
                <div className='text-lg pt-2'>
                  NFT owners will receive exclusive messages from artists/creators and can also leave comments.
                </div>
                <div className='text-xl font-semibold italic pt-2'>
                  (We chose a message UI over feed posts for a more private interaction).
                </div>
              </div>
            </div>
          </div>

          <div className='text-2xl font-medium py-4 text-gray-500'>
            Key takeaways:
          </div>
          <div className='flex'>
            <ul className='list-disc pl-6 gap-4 flex flex-col md:text-4xl text-2xl'>
              <li><span className='font-bold'>21%</span> of the <span className='font-bold'>146</span> song projects, fans have shared their impressions.</li>
              <li>A total of <span className='font-bold'>1,127</span> exclusive messages were sent and viewed by <span className='font-bold'>4,338</span> users.</li>
              <li>(DAU) increased after artists/creators sent exclusive message, but the growth was not consistent.</li>
            </ul>
          </div>
        </Container>


        {/* User Interviews */}
        <Container className='grid md:grid-cols-2 grid-cols-1 py-16 gap-8'>
          <div className='flex flex-col col-span-1 gap-4'>
            <div className='text-5xl font-medium'>User Interviews</div>
            <div className='text-lg'>
              To understand our users better, I partnered with Product Manager to conduct focus groups and qualitative interviews.
            </div>
            <div className='text-2xl font-semibold py-4 text-black'>
              Objectives:
            </div>
            <ul className='list-disc pl-5 gap-4 flex flex-col text-lg'>
              <li>Understand fan motivations and behaviors in music engagement.</li>
              <li>Identify preferred engagement platforms and channels.</li>
              <li>Understand barriers to fan engagement.</li>
              <li>Explore gamification role in boosting engagement.</li>
              <li>Investigate community’s impact on engagement and loyalty.</li>
            </ul>
          </div>

          <div className="col-span-1 flex flex-col gap-1 justify-center aspect-center">
            <Image src={research} alt="" className='h-auto w-auto' />
          </div>
        </Container>


        {/* Insights */}
        <Container className='py-16 flex flex-col gap-y-4'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
            <div className='flex flex-col gap-4'>
              <div className='text-5xl font-medium'>Insights</div>
              <div className='text-lg'>
                After the user interviews, I collaborated with my teammates to map and synthesize the feedback. 
              </div>
              <div className='text-lg'>
                We used Empathy Maps to enhance our understand of user profile, helping teams in developing valuable insights.
              </div>
            </div>

            <div className="flex flex-col gap-1 justify-center aspect-center">
              <Image src={insight2} alt="" className='h-auto w-auto' />
            </div>
          </div>

          <div className='text-2xl font-medium py-4 text-gray-500'>
            Key findings:
          </div>
          <div className='flex'>
            <ul className='list-disc pl-6 gap-4 flex flex-col md:text-4xl text-2xl'>
              <li>Target users: Gen Z (15-26), primarily introverts.</li>
              <li>Seeking resonances with same interests.</li>
              <li>Want to feel special and to have a connection with artists/creators.</li>
              <li>Worry about the quality of content that they contribute.</li>
              <li>Concerned about cyberbullying, sexual harassment, and personal attacks.</li>
            </ul>
          </div>
        </Container>


        {/* Solution */}
        <Container className='py-16 gap-4 flex flex-col'>
          <div className='text-5xl font-medium'>Solution</div>

          <div className='flex flex-col gap-16'>
            {/* #1 */}
            <div className='flex flex-col'>
              <div className="grid grid-cols-5 gap-4 py-2">
                <div>
                  <Image src={explore0} alt="" className='h-auto w-auto border-[4px] border-black rounded-[22px]' />
                </div>

                <div className=''>
                  <Image src={explore1} alt="" className='h-auto w-auto border-[4px] border-black rounded-[22px]' />
                </div>

                <div>
                  <Image src={explore3} alt="" className='h-auto w-auto border-[4px] border-black rounded-[22px]' />
                </div>

                <div className=''>
                  <Image src={explore4} alt="" className='h-auto w-auto border-[4px] border-black rounded-[22px]' />
                </div>

                <div>
                  <Image src={explore2} alt="" className='h-auto w-auto border-[4px] border-black rounded-[22px]' />
                </div>
              </div>

              <div className='flex flex-col gap-4 justify-center h-full p-10'>
                <div className='text-4xl font-medium'>
                  Music NTF = Access Card
                </div>
                <div className='text-lg'>
                  The virtual NFT card acts as a unique digital membership token, granting access to exclusive VIP communities. 
                </div>
                <div className='text-lg'>
                  Here, members find belonging, acceptance, and identity within the group, free from fake news and artificial connections.
                </div>
                <ul className='list-decimal pl-5 gap-4 flex flex-col text-lg'>
                  <li><span className='font-bold'>Interest-based communities</span> - Connect individuals with shared passions, enable collaboration and communication on topics they are passionate in.</li>
                  <li><span className='font-bold'>Channel organization</span> - Each channel serves a specific purpose or topic, allowing users to find discussions they are interested in.</li>
                </ul>
              </div>
            </div>

            {/* #2 */}
            <div className='grid md:grid-cols-2 grid-cols-1'>
              <div className='flex flex-col gap-4 justify-center h-full p-10'>
                <div className='text-4xl font-medium'>
                  Enabled self-servicing
                </div>
                <div className='text-lg'>
                  Turn your original content into NFT in just seconds. Have complete freedom to decide how many editions to make, set initial sell price and your NFT debut date. 
                </div>
              </div>

              <div className="flex aspect-square justify-center p-10 bg-gray-200">
                <div>
                  <Image src={selfservice} alt="" className='border-[4px] h-full w-auto border-black rounded-[22px]' />
                </div>
              </div>
            </div>

            {/* #3 */}

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
