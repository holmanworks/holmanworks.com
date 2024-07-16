import Image from 'next/image'

import oscover1 from '@/images/screenshots/oursong/oursong_cover_1.png'
import oscover2 from '@/images/screenshots/oursong/oursong_cover_2.gif'
import oscover3 from '@/images/screenshots/oursong/oursong_cover_3.png'

export function osCover1() {

    return (
        <Image 
            src={oscover1} 
            alt="" 
            className='border-3 border-black rounded-[24px]'
        />
    )
}