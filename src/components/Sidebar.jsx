import React from 'react'
import Image from './layer/Image'
import s1 from '/s1.png'
import s2 from '/s2.png'
import s3 from '/s3.png'

const Sidebar = () => {
  return (
    <div className='w-[210px] bg-[#262D34] flex flex-col gap-y-[10px] items-center justify-center p-[10px] rounded-lg'>

        <div className='w-[186px] flex gap-2 items-center py-2 px-1 hover:bg-[#2c353d] transition-all duration-300 rounded-lg'>
            <div className='p-1 bg-[#2c353d]'>
                <Image src={s1}/>
            </div>
            <div>
                <h5 className='text-xs font-semibold leading-[18px] text-[#fefeff] mb-[2px]'>Newest and Recent</h5>
                <p className='text-[9px] leading-[14px] text-[#96989c]'>Find the latest update</p>
            </div>
        </div>


        <div className='w-[186px] flex gap-2 items-center py-2 px-1 hover:bg-[#2c353d] transition-all duration-300 rounded-lg'>
            <div>
                <Image src={s2}/>
            </div>
            <div>
                <h5 className='text-xs font-semibold leading-[18px] text-[#fefeff] mb-[2px]'>Popular of the day</h5>
                <p className='text-[9px] leading-[14px] text-[#96989c]'>Shots featured today by curators</p>
            </div>
        </div>


        <div className='w-[186px] flex gap-2 items-center py-2 px-1 hover:bg-[#2c353d] transition-all duration-300 rounded-lg'>
            <div>
                <Image src={s3}/>
            </div>
            <div>
                <h5 className='text-xs font-semibold leading-[18px] text-[#fefeff] mb-[2px]'>Following <span className='py-1 px-1 bg-[#FF4400] rounded-md ml-2'>24</span></h5>
                <p className='text-[9px] leading-[14px] text-[#96989c]'>Explore from your favorite person</p>
            </div>
        </div>


    </div>
  )
}

export default Sidebar