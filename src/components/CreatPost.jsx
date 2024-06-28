import React from 'react'
import Image from './layer/Image'
import Memoji1 from '/Memoji1.png'

const CreatPost = () => {
  return (
    <div className='lg:w-[785px] w-[350px] flex items-center gap-5 bg-[#262d34] lg:p-5 p-2 rounded-lg mx-auto'>
        <div>
            <Image src={Memoji1}/>
        </div>

        <div class="lg:w-[745px] w-[200px] rounded bg-[#2c353d]">
            <input rows={1}  class="w-full border-none bg-transparent p-3 text-white outline-none resize-none" placeholder="Let’s share what going on your mind..." />
        </div>
            <button className="rounded py-3 lg:w-[112px] w-[83px] lg:text-sm text-xs font-medium leading-5 bg-[#FF6934] text-[#fefeff]">
                Create Post
            </button>






    </div>
  )
}

export default CreatPost