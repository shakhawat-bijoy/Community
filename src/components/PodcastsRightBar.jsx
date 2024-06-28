import React from 'react'
import Title from './layer/Title'
import { GoArrowRight } from 'react-icons/go'
import r7 from '/r7.jpg'
import r8 from '/r8.jpg'
import r9 from '/r9.jpg'
import r10 from '/r10.jpg'
import r11 from '/r11.jpg'
import r12 from '/r12.jpg'

import Image from './layer/Image'

const PodcastsRightBar = () => {
  return (
    <div>
      <div className='w-[325px] bg-[#262d34] p-5 rounded-lg'>



      <div className='flex items-center gap-x-1'>
      <Title text="Pinned Group" />
      <GoArrowRight className='text-white'/>
      </div>




      <div className='flex flex-col gap-5 mt-5'> 
     


      <div className='flex items-center'>

          <div className='w-[58px] h-[58px] mr-[14px]'>
            <Image src={r7} />
          </div>

          <div className='w-[193px]'>
          <h5 className='text-xs font-semibold leading-[22px] text-[#fefeff] mb-[6px]'>Selling a Business and Scaling Another Amidst Tragedy.</h5>
        
          <p className='text-[10px] font-semibold leading-4 text-[#96989c]'>by Michele Hansen</p>
          </div>
          <div>
          <GoArrowRight className='text-white'/>
          </div>
      </div>

      <div className='flex items-center'>

          <div className='w-[58px] h-[58px] mr-[14px]'>
            <Image src={r8} />
          </div>

          <div className='w-[193px]'>
          <h5 className='text-xs font-semibold leading-[22px] text-[#fefeff] mb-[6px]'>Mental health as a founder and the importance of community...</h5>
        
          <p className='text-[10px] font-semibold leading-4 text-[#96989c]'>by James McKinven</p>
          </div>
          <div>
          <GoArrowRight className='text-white'/>
          </div>
      </div>

      <div className='flex items-center'>

          <div className='w-[58px] h-[58px] mr-[14px]'>
            <Image src={r9} />
          </div>

          <div className='w-[193px]'>
          <h5 className='text-xs font-semibold leading-[22px] text-[#fefeff] mb-[6px]'>Growing to $8.5k MRR in 1 year - Marie Martens, Tally.so</h5>
        
          <p className='text-[10px] font-semibold leading-4 text-[#96989c]'>by Mahfuzul Nabil</p>
          </div>
          <div>
          <GoArrowRight className='text-white'/>
          </div>
      </div>

      <div className='flex items-center'>

          <div className='w-[58px] h-[58px] mr-[14px]'>
            <Image src={r10} />
          </div>

          <div className='w-[193px]'>
          <h5 className='text-xs font-semibold leading-[22px] text-[#fefeff] mb-[6px]'>Mental Health and Bootstrapping in 2022 with Rob Walling of TinySe</h5>
        
          <p className='text-[10px] font-semibold leading-4 text-[#96989c]'>by Dr. Jubed</p>
          </div>
          <div>
          <GoArrowRight className='text-white'/>
          </div>
      </div>

      <div className='flex items-center'>

          <div className='w-[58px] h-[58px] mr-[14px]'>
            <Image src={r11} />
          </div>

          <div className='w-[193px]'>
          <h5 className='text-xs font-semibold leading-[22px] text-[#fefeff] mb-[6px]'>Money, Happiness, and Productivity as a Solo Founder with Pieter Levels</h5>
        
          <p className='text-[10px] font-semibold leading-4 text-[#96989c]'>by Jesse Hanley</p>
          </div>
          <div>
          <GoArrowRight className='text-white'/>
          </div>
      </div>

      <div className='flex items-center'>

          <div className='w-[58px] h-[58px] mr-[14px]'>
            <Image src={r12} />
          </div>

          <div className='w-[193px]'>
          <h5 className='text-xs font-semibold leading-[22px] text-[#fefeff] mb-[6px]'>Mental health as a founder and the importance of community</h5>
        
          <p className='text-[10px] font-semibold leading-4 text-[#96989c]'>by Courtland Allen</p>
          </div>
          <div>
          <GoArrowRight className='text-white'/>
          </div>
      </div>



      </div>


      </div>
    </div>
  )
}

export default PodcastsRightBar