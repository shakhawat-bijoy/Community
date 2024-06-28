import React from 'react'
import Title from './layer/Title'
import s4 from '/s4.png'
import s5 from '/s5.png'
import s6 from '/s6.png'
import s7 from '/s7.png'
import s8 from '/s8.png'
import s9 from '/s9.png'
import Image from './layer/Image'

const PopularTags = () => {
  return (
    
    <div  className='w-[210px] bg-[#262D34] p-[20px] rounded-lg'>
    <Title text="Popular Tags"/>

    <div className='flex flex-col gap-y-[10px] items-center justify-center w-full'>

    <div className='w-[175px] flex gap-2 items-center py-2 px-1 hover:bg-[#2c353d] transition-all duration-300 rounded-lg'>
        <div>
            <Image src={s4}/>
        </div>
        <div>
            <h5 className='text-xs font-semibold leading-[18px] text-[#fefeff] mb-[2px]'>#javascript</h5>
            <p className='text-[9px] leading-[14px] text-[#96989c]'>82,645 Posted by this tag</p>
        </div>
    </div>

    <div className='w-[175px] flex gap-2 items-center py-2 px-1 hover:bg-[#2c353d] transition-all duration-300 rounded-lg'>
        <div>
            <Image src={s5}/>
        </div>
        <div>
            <h5 className='text-xs font-semibold leading-[18px] text-[#fefeff] mb-[2px]'>#bitcoin</h5>
            <p className='text-[9px] leading-[14px] text-[#96989c]'>65,523 Posted • Trending</p>
        </div>
    </div>

    <div className='w-[175px] flex gap-2 items-center py-2 px-1 hover:bg-[#2c353d] transition-all duration-300 rounded-lg'>
        <div>
            <Image src={s6}/>
        </div>
        <div>
            <h5 className='text-xs font-semibold leading-[18px] text-[#fefeff] mb-[2px]'>#design</h5>
            <p className='text-[9px] leading-[14px] text-[#96989c]'>51,354 • Trending in Bangladesh</p>
        </div>
    </div>

    <div className='w-[175px] flex gap-2 items-center py-2 px-1 hover:bg-[#2c353d] transition-all duration-300 rounded-lg'>
        <div>
            <Image src={s7}/>
        </div>
        <div>
            <h5 className='text-xs font-semibold leading-[18px] text-[#fefeff] mb-[2px]'>#innovation</h5>
            <p className='text-[9px] leading-[14px] text-[#96989c]'>48,029 Posted by this tag</p>
        </div>
    </div>

    <div className='w-[175px] flex gap-2 items-center py-2 px-1 hover:bg-[#2c353d] transition-all duration-300 rounded-lg'>
        <div>
            <Image src={s8}/>
        </div>
        <div>
            <h5 className='text-xs font-semibold leading-[18px] text-[#fefeff] mb-[2px]'>#tutorial</h5>
            <p className='text-[9px] leading-[14px] text-[#96989c]'>51,354 • Trending in Bangladesh</p>
        </div>
    </div>

    <div className='w-[175px] flex gap-2 items-center py-2 px-1 hover:bg-[#2c353d] transition-all duration-300 rounded-lg'>
        <div>
            <Image src={s9}/>
        </div>
        <div>
            <h5 className='text-xs font-semibold leading-[18px] text-[#fefeff] mb-[2px]'>#busieness</h5>
            <p className='text-[9px] leading-[14px] text-[#96989c]'>82,645 Posted by this tag</p>
        </div>
    </div>

    </div>



</div>
  )
}

export default PopularTags