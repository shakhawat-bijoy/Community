import React from 'react'
import Title from './layer/Title'
import s10 from '/s10.png'
import s11 from '/s11.png'
import s12 from '/s12.png'
import s13 from '/s13.png'
import s14 from '/s14.png'
import Image from './layer/Image'
import { GoArrowRight } from 'react-icons/go'

const PinnedGroup = () => {
  return (
    <div>
        <div  className='w-[210px] bg-[#262D34] p-[20px] rounded-lg'>
        <div className='flex items-center gap-x-1'>
        <Title text="Pinned Group" />
        <GoArrowRight className='text-white'/>
        </div>

        <div className='flex flex-col gap-y-[10px] items-center justify-center w-full'>

        <div className='w-[175px] flex gap-2 items-center py-2 px-1 hover:bg-[#2c353d] transition-all duration-300 rounded-lg'>
            <div>
                <Image src={s10}/>
            </div>
            <div>
                <h5 className='text-xs font-semibold leading-[18px] text-[#fefeff] mb-[2px]'>#javascript</h5>
                <p className='text-[9px] leading-[14px] text-[#96989c]'>82,645 Posted by this tag</p>
            </div>
        </div>

        <div className='w-[175px] flex gap-2 items-center py-2 px-1 hover:bg-[#2c353d] transition-all duration-300 rounded-lg'>
            <div>
                <Image src={s11}/>
            </div>
            <div>
                <h5 className='text-xs font-semibold leading-[18px] text-[#fefeff] mb-[2px]'>#bitcoin</h5>
                <p className='text-[9px] leading-[14px] text-[#96989c]'>65,523 Posted • Trending</p>
            </div>
        </div>

        <div className='w-[175px] flex gap-2 items-center py-2 px-1 hover:bg-[#2c353d] transition-all duration-300 rounded-lg'>
            <div>
                <Image src={s12}/>
            </div>
            <div>
                <h5 className='text-xs font-semibold leading-[18px] text-[#fefeff] mb-[2px]'>#design</h5>
                <p className='text-[9px] leading-[14px] text-[#96989c]'>51,354 • Trending in Bangladesh</p>
            </div>
        </div>

        <div className='w-[175px] flex gap-2 items-center py-2 px-1 hover:bg-[#2c353d] transition-all duration-300 rounded-lg'>
            <div>
                <Image src={s13}/>
            </div>
            <div>
                <h5 className='text-xs font-semibold leading-[18px] text-[#fefeff] mb-[2px]'>#blogging</h5>
                <p className='text-[9px] leading-[14px] text-[#96989c]'>48,029 Posted by this tag</p>
            </div>
        </div>

        <div className='w-[175px] flex gap-2 items-center py-2 px-1 hover:bg-[#2c353d] transition-all duration-300 rounded-lg'>
            <div>
                <Image src={s14}/>
            </div>
            <div>
                <h5 className='text-xs font-semibold leading-[18px] text-[#fefeff] mb-[2px]'>#tutorial</h5>
                <p className='text-[9px] leading-[14px] text-[#96989c]'>51,354 • Trending in Bangladesh</p>
            </div>
        </div>
        
        </div>



    </div>
    </div>
  )
}

export default PinnedGroup