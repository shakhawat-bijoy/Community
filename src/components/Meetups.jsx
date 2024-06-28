import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import Title from './layer/Title'
import Image from './layer/Image'
import r1 from '/r1.png'
import r2 from '/r2.png'
import r3 from '/r3.png'
import r4 from '/r4.png'
import r5 from '/r5.png'
import r6 from '/r6.png'
import Button from './layer/Button'

const Meetups = () => {
  return (
    <div className='w-[325px] bg-[#262d34] p-5 rounded-lg'>



       <div className='flex items-center gap-x-1'>
        <Title text="Pinned Group" />
        <GoArrowRight className='text-white'/>
        </div>




        <div className='flex flex-col gap-5 mt-5'> 
            


        <div className='flex gap-[14px]'>
            
            <Image src={r1} />
       
            <div>
            <h5 className='text-xs font-semibold leading-[22px] text-[#fefeff]'>UIHUT - Crunchbase Company Profile...</h5>
            <div className='flex items-center gap-2'>
            <Image src={r4}/>
            <p className='text-[10px] font-semibold leading-4 text-[#96989c]'>UIHUT  •  Sylhet, Bangladesh</p>
            </div>
            <div className='flex gap-[10px] mt-[10px]'>
                <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="finance" />
                <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="bitcoin" />
                <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="crypto" />
            </div>
            </div>
        </div>



        <div className='flex gap-[14px]'>
            
            <Image src={r2} />
       
            <div>
            <h5 className='text-xs font-semibold leading-[22px] text-[#fefeff]'>Design Meetups USA | Dribbble</h5>
            <div className='flex items-center gap-2'>
            <Image src={r5}/>
            <p className='text-[10px] font-semibold leading-4 text-[#96989c]'>Dribbble  •  Austin, Texas, USA</p>
            </div>
            <div className='flex gap-[10px] mt-[10px]'>
                <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="Remote" />
                <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="Part-time" />
            </div>
            </div>
        </div>



        <div className='flex gap-[14px]'>
            
            <Image src={r3} />
       
            <div>
            <h5 className='text-xs font-semibold leading-[22px] text-[#fefeff]'>Meetup Brand Identity Design - Beha...</h5>
            <div className='flex items-center gap-2'>
            <Image src={r6}/>
            <p className='text-[10px] font-semibold leading-4 text-[#96989c]'>Behance  •  Sab jose, Califonia, USA</p>
            </div>
            <div className='flex gap-[10px] mt-[10px]'>
                <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="Full Time" />
                <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="Contract" />
                <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="Worldwide" />
            </div>
            </div>
        </div>


        </div>


    </div>
  )
}

export default Meetups