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
import creationflow from '@/images/screenshots/oursong/creationflow.png'
import sendgift1 from '@/images/screenshots/oursong/sendgift1.png'
import sendgift2 from '@/images/screenshots/oursong/sendgift2.gif'
import monetization1 from '@/images/screenshots/oursong/monetization1.png'
import monetization2 from '@/images/screenshots/oursong/monetization2.gif'
import voucher1 from '@/images/screenshots/oursong/voucher1.png'
import voucher2 from '@/images/screenshots/oursong/voucher2.gif'
import result1 from '@/images/screenshots/oursong/web1.png'
import result2 from '@/images/screenshots/oursong/web2.png'
import result3 from '@/images/screenshots/oursong/web3.png'
import result4 from '@/images/screenshots/oursong/web4.png'
import result5 from '@/images/screenshots/oursong/web5.png'



export default function Oursong() {

  return (
    <>    
      <Header />
      <div className='w-full text-black'>
        
        {/* Title */}
        <Container className='py-20 flex flex-col lg:gap-12 gap-8'>
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
        <div className="mx-auto max-w-[1140px] flex justify-center bg-red-200 md:p-10 p-6">
          <div className='grid grid-cols-3 md:gap-8 gap-4'>
            <Image
              src={oscover1}
              alt="Strategy"
              height={520}
              className='mx-auto md:border-[6px] border-[3px] border-black md:rounded-[32px] rounded-[16px]'
            />
            <Image
              src={oscover2}
              alt="Strategy"
              height={520}
              className='mx-auto md:border-[6px] border-[3px] border-black md:rounded-[32px] rounded-[16px]'
            />
            <Image
              src={oscover3}
              alt="Strategy"
              height={520}
              className='mx-auto md:border-[6px] border-[3px] border-black md:rounded-[32px] rounded-[16px]'
            />
          </div>
        </div>


        {/* Overview */}
        <Container className='py-20'>
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

          <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 py-2">
            <div>
              <Image src={explore0} alt="" className='h-auto w-auto border-[5px] border-black rounded-[22px]' />
              <p className='text-black pt-2 px-2 text-base text-center'>Explore available Music NFTs</p>
            </div>

            <div className=''>
              <Image src={explore1} alt="" className='h-auto w-auto border-[5px] border-black rounded-[22px]' />
              <p className='text-black pt-2 px-2 text-base text-center'>Discover the details behind of a song</p>
            </div>

            <div>
              <Image src={explore3} alt="" className='h-auto w-auto border-[5px] border-black rounded-[22px]' />
              <p className='text-black pt-2 px-2 text-base text-center'>Music NFTs showcased as virtual cards</p>
            </div>

            <div className=''>
              <Image src={explore4} alt="" className='h-auto w-auto border-[5px] border-black rounded-[22px]' />
              <p className='text-black pt-2 px-2 text-base text-center'>Swipe the card for exclusive contents</p>
            </div>

            <div>
              <Image src={explore2} alt="" className='h-auto w-auto border-[5px] border-black rounded-[22px]' />
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
              <div className='md:w-full h-auto w-1/3'>
                <Image src={pivot1} alt="" className='md:border-[6px] sm:border-[5px] border-[3px] border-black md:rounded-[32px] sm:rounded-[24px] rounded-[16px]' />
              </div>
              <div className='flex md:w-full w-2/3'>
                <p className='w-8 text-black pb-1 text-3xl font-medium'>1.</p>
                <div className='flex-1'>
                  <p className='text-black text-3xl font-medium'>Improve clarity</p> 
                  <p className='text-black text-lg pt-1'>
                    Provide clear information about the benefits of purchasing this NFT.
                  </p>
                </div>
              </div>
            </div>

            <div className='flex md:flex-col gap-4 w-full'>
              <div className='md:w-full h-auto w-1/3'>
                <Image src={pivot2} alt="" className='md:border-[6px] sm:border-[5px] border-[3px] border-black md:rounded-[32px] sm:rounded-[24px] rounded-[16px]' />
              </div>
              <div className='flex md:w-full w-2/3'>
                <p className='w-8 text-black pb-1 text-3xl font-medium'>2.</p>
                <div className='flex-1'>
                  <p className='text-black text-3xl font-medium'>Share your thought</p> 
                  <p className='text-black text-lg pt-1'>
                    Allow fans to share their impressions with the artists/creators and all others who appreciate the song.
                  </p>
                </div>
              </div>
            </div>

            <div className='flex md:flex-col gap-4 w-full'>
              <div className='md:w-full h-auto w-1/3'>
                <Image src={pivot3} alt="" className='md:border-[6px] sm:border-[5px] border-[3px] border-black md:rounded-[32px] sm:rounded-[24px] rounded-[16px]' />
              </div>
              <div className='flex md:w-full w-2/3'>
                <p className='w-8 text-black pb-1 text-3xl font-medium'>3.</p>
                <div className='flex-1'>
                  <p className='text-black text-3xl font-medium'>Get exclusive message</p> 
                  <p className='text-black text-lg pt-1'>
                    NFT owners will receive exclusive messages from artists/creators and can also leave comments.
                  </p>
                  <p className='text-black font-semibold text-lg pt-2 '>
                    (We chose Chat UI over feed posts for a more private interaction).
                  </p>
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
              <div className='text-lg'>
                I then collaborated with the product team to brainstorm product ideas.
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

            {/* #1 */}
            <div className='flex flex-col gap-4'>
              <div className='gap-2 flex flex-col'>
                <div className='pt-4 text-3xl font-medium'>
                  Music NTF = VIP community access card
                </div>
                <div className='text-lg'>
                  The virtual NFT card acts as a unique digital membership token, granting access to exclusive VIP communities. Here, members find belonging, acceptance, and identity within the group, free from fake news and artificial connections.
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 pt-4 md:gap-8 gap-4">
                <div className='flex'>
                  <p className='w-8 text-black pb-1 text-2xl font-medium'>1.</p>
                  <div className='flex-1'>
                    <p className='text-black text-2xl font-medium'>Interest-based communities</p> 
                    <p className='text-black text-lg pt-1'>It is where the entire conversation is crafted, replacing the traditional tree diagram.</p>
                  </div>
                </div>

                <div className='flex'>
                  <p className='w-8 text-black pb-1 text-2xl font-medium'>2.</p>
                  <div className='flex-1'>
                    <p className='text-black text-2xl font-medium'>Channel organization</p> 
                    <p className='text-black text-lg pt-1'>Each channel serves a specific purpose or topic, allowing users to find discussions they are interested in.</p>
                  </div>
                </div>
              </div>

              <div className="mx-auto w-full flex justify-center bg-gray-200 md:p-10 p-6">
                <div className='grid grid-cols-2 md:gap-8 gap-4'>
                  <Image
                    src={solution1}
                    alt="Strategy"
                    height={420}
                    className='mx-auto md:border-[5px] sm:border-[4px] border-[3px] border-black md:rounded-[24px] sm:rounded-[20px] rounded-[16px]'
                  />
                  <Image
                    src={solution2}
                    alt="Strategy"
                    height={420}
                    className='mx-auto md:border-[5px] sm:border-[4px] border-[3px] border-black md:rounded-[24px] sm:rounded-[20px] rounded-[16px]'
                  />
                </div>
              </div>
            </div>

            {/* #2 */}
            <div className='flex flex-col gap-4 pt-8'>
              <div className='gap-2 flex flex-col'>
                <div className='pt-4 text-3xl font-medium'>
                  Enabled self-servicing
                </div>
                <div className='text-lg'>
                  Turn your original content into NFT in just seconds. Have complete freedom to decide how many editions to make, set initial sell price and your NFT debut date. 
                </div>
              </div>

              <div className="mx-auto w-full flex justify-center bg-gray-200 md:p-10 p-6">
                <div className='grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 justify-center items-center flex flex-col'>
                  <Image
                    src={selfservice}
                    alt="Strategy"
                    height={420}
                    className='mx-auto md:border-[5px] sm:border-[4px] border-[4px] border-black md:rounded-[24px] sm:rounded-[20px] rounded-[20px]'
                  />
                  <Image
                    src={creationflow}
                    alt="Strategy"
                    height={420}
                    className='mx-auto col-span-2'
                  />
                </div>
              </div>
            </div>

            {/* #3 */}
            <div className='flex flex-col gap-4 pt-8'>
              <div className='gap-2 flex flex-col'>
                <div className='pt-4 text-3xl font-medium'>
                  Send NFT as gifts or invitations
                </div>
                <div className='text-lg'>
                  Allow artists/creators to gifting minted NFT to their fans or friends as a reward, which also serves as an invitation card to their private chat room.
                </div>
              </div>

              <div className="mx-auto w-full flex justify-center bg-gray-200 md:p-10 p-6">
                <div className='grid grid-cols-2 md:gap-8 gap-4'>
                  <Image
                    src={sendgift1}
                    alt="Strategy"
                    height={420}
                    className='mx-auto md:border-[5px] sm:border-[4px] border-[3px] border-black md:rounded-[24px] sm:rounded-[20px] rounded-[16px]'
                  />
                  <Image
                    src={sendgift2}
                    alt="Strategy"
                    height={420}
                    className='mx-auto md:border-[5px] sm:border-[4px] border-[3px] border-black md:rounded-[24px] sm:rounded-[20px] rounded-[16px]'
                  />
                </div>
              </div>
            </div>

            {/* #4 */}
            <div className='flex flex-col gap-4 pt-8'>
              <div className='gap-2 flex flex-col'>
                <div className='pt-4 text-3xl font-medium'>
                  Monetization
                </div>
                <div className='text-lg'>
                  "Likes" often lack genuine sentiment and can be inflated; instead, give props that hold tangible value.
                </div>
              </div>

              <div className="mx-auto w-full flex justify-center bg-gray-200 md:p-10 p-6">
                <div className='grid grid-cols-2 md:gap-8 gap-4'>
                  <Image
                    src={monetization1}
                    alt="Strategy"
                    height={420}
                    className='mx-auto md:border-[5px] sm:border-[4px] border-[3px] border-black md:rounded-[24px] sm:rounded-[20px] rounded-[16px]'
                  />
                  <Image
                    src={monetization2}
                    alt="Strategy"
                    height={420}
                    className='mx-auto md:border-[5px] sm:border-[4px] border-[3px] border-black md:rounded-[24px] sm:rounded-[20px] rounded-[16px]'
                  />
                </div>
              </div>
            </div>

            {/* #5 */}
            <div className='flex flex-col gap-4 pt-8'>
              <div className='gap-2 flex flex-col'>
                <div className='pt-4 text-3xl font-medium'>
                  Offline event voucher
                </div>
                <div className='text-lg'>
                  NFTs can also function as office vouchers.  These digital tokens can be redeemed for various rewards with the OurSong platform, such as concert admission, merchandise redemption, and more.
                </div>
              </div>

              <div className="mx-auto w-full flex justify-center bg-gray-200 md:p-10 p-6">
                <div className='grid grid-cols-2 md:gap-8 gap-4'>
                  <Image
                    src={voucher1}
                    alt="Strategy"
                    height={420}
                    className='mx-auto md:border-[5px] sm:border-[4px] border-[3px] border-black md:rounded-[24px] sm:rounded-[20px] rounded-[16px]'
                  />
                  <Image
                    src={voucher2}
                    alt="Strategy"
                    height={420}
                    className='mx-auto md:border-[5px] sm:border-[4px] border-[3px] border-black md:rounded-[24px] sm:rounded-[20px] rounded-[16px]'
                  />
                </div>
              </div>
            </div>
        </Container>
        

        {/* Results */}
        <Container className='py-16 gap-4 flex flex-col'>
          <div className='text-5xl font-medium'>Results</div>
          <div className='text-lg'>
            After several rounds of iteration following a major product pivot, our efforts have led to significant advancements and positive outcomes.
          </div>

          <div className='flex pt-4'>
            <ul className='list-disc pl-6 gap-4 flex flex-col md:text-4xl text-2xl'>
              <li>Achieved <span className='font-semibold'>150k</span> active users.</li>
              <li>Welcomed John Legend as Co-founder.</li>
              <li>Secured <span className='font-semibold'>$7.5 million</span>seed round.</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 py-2">
            <div>
              <Image src={result1} alt="" className='h-auto w-auto' />
            </div>

            <div className=''>
              <Image src={result2} alt="" className='h-auto w-auto' />
            </div>

            <div>
              <Image src={result3} alt="" className='h-auto w-auto' />
            </div>

            <div className=''>
              <Image src={result4} alt="" className='h-auto w-auto' />
            </div>

            <div>
              <Image src={result5} alt="" className='h-auto w-auto' />
            </div>
          </div>
        </Container>


      </div>
      <Footer />
    </>
  )
}
