import React, { useState } from 'react';
import Image from './layer/Image';
import p1 from '/p1.jpg';
import p2 from '/p2.jpg';
import p3 from '/p3.jpg';
import p4 from '/p4.jpg';
import Button from './layer/Button';
import Memoji2 from '/Memoji2.png';
import Memoji3 from '/Memoji3.png';
import Memoji4 from '/Memoji4.png';
import Memoji5 from '/Memoji5.png';
import Like from '/Like.png';
import Like2 from '/Like2.png';

const Posts = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='flex flex-col gap-5'>


      <div className='flex flex-col gap-5'>
      <div className='w-[785px] flex items-center gap-5 bg-[#262d34] p-5 justify-center rounded-lg'>
        <div className='w-[156px] h-[156px] rounded-xl'>
          <Image src={p1} alt="Image" />
        </div>
        <div>
          <div className='flex'>
            <h5 className='text-[18px] font-semibold leading-[26px] text-[#fefeff] mb-[10px] w-[521px]'>
              Blockchain developer best practices on innovationchain
            </h5>
            <div onClick={handleLikeClick} className="cursor-pointer">
              {isLiked ? (
                <Image src={Like2} alt="Like" />
              ) : (
                <Image src={Like} alt="Like" />
              )}
            </div>
          </div>
          <div className='flex gap-[10px] mb-[30px]'>
            <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="finance" />
            <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="bitcoin" />
            <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="crypto" />
          </div>
          <div className='flex justify-between'>
           <div  className='flex items-center'>
            <Image src={Memoji2} alt="Memoji" />
            <div className='ml-[10px]'>
              <h2 className='text-sm font-semibold leading-[22px] text-[#fefeff]'>Pavel Gvay °</h2>
              <p className='text-[10px] font-semibold leading-4 text-[#96989c]'>3 weeks ago</p>
            </div>
            <div className='flex ml-24 gap-10'>
              <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>651,324 Views</p>
              <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>36,6545 Likes</p>
              <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>56 comments</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

      <div className='flex flex-col gap-5'>
      <div className='w-[785px] flex items-center gap-5 bg-[#262d34] p-5 justify-center rounded-lg'>
        <div className='w-[156px] h-[156px] rounded-xl'>
          <Image src={p2} alt="Image" />
        </div>
        <div>
          <div className='flex'>
            <h5 className='text-[18px] font-semibold leading-[26px] text-[#fefeff] mb-[10px] w-[521px]'>
              The 4-step SEO framework that led to a 1000% increase in traffic. Let’s talk about blogging and SEO...
            </h5>
            <div onClick={handleLikeClick} className="cursor-pointer">
              {isLiked ? (
                <Image src={Like2} alt="Like" />
              ) : (
                <Image src={Like} alt="Like" />
              )}
            </div>
          </div>
          <div className='flex gap-[10px] mb-[30px]'>
            <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="seo" />
            <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="blogging" />
            <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="traffic" />
          </div>
          <div className='flex justify-between'>
          <div  className='flex items-center'>
            <Image src={Memoji3} alt="Memoji" />
            <div className='ml-[10px]'>
              <h2 className='text-sm font-semibold leading-[22px] text-[#fefeff]'>AR Jakir °</h2>
              <p className='text-[10px] font-semibold leading-4 text-[#96989c]'>3 days ago</p>
            </div>
            <div className='flex ml-24 gap-10'>
              <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>244,564 Views</p>
              <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>10,920 Likes</p>
              <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>184 comments</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

      <div className='flex flex-col gap-5'>
      <div className='w-[785px] flex items-center gap-5 bg-[#262d34] p-5 justify-center rounded-lg'>
        <div className='w-[156px] h-[156px] rounded-xl'>
          <Image src={p3} alt="Image" />
        </div>
        <div>
          <div className='flex'>
            <h5 className='text-[18px] font-semibold leading-[26px] text-[#fefeff] mb-[10px] w-[521px]'>
            OnePay - Online Payment Processing Web App
            - Download from uihut.com
            </h5>
            <div onClick={handleLikeClick} className="cursor-pointer">
              {isLiked ? (
                <Image src={Like2} alt="Like" />
              ) : (
                <Image src={Like} alt="Like" />
              )}
            </div>
          </div>
          <div className='flex gap-[10px] mb-[30px]'>
            <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="payment" />
            <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="webapp" />
            <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="uikit" />
          </div>
          <div className='flex justify-between'>
           <div  className='flex items-center'>
           <Image src={Memoji4} alt="Memoji" />
              <div className='ml-[10px]'>
                <h2 className='text-sm font-semibold leading-[22px] text-[#fefeff]'>Mansurul Haque °</h2>
                <p className='text-[10px] font-semibold leading-4 text-[#96989c]'>1 weeks ago</p>
              </div>
           </div>
            <div className='flex gap-10'>
              <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>601,006 Views</p>
              <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>24,6545 Likes</p>
              <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>209 comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>

          <div className='flex flex-col gap-5'>
      <div className='w-[785px] flex items-center gap-5 bg-[#262d34] p-5 justify-center rounded-lg'>
        <div className='w-[156px] h-[156px] rounded-xl'>
          <Image src={p4} alt="Image" />
        </div>
        <div>
          <div className='flex'>
            <h5 className='text-[18px] font-semibold leading-[26px] text-[#fefeff] mb-[10px] w-[521px]'>
              Designing User Interfaces - how I sold 1800 copies in a few months
              by Michal Malewicz
            </h5>
            <div onClick={handleLikeClick} className="cursor-pointer">
              {isLiked ? (
                <Image src={Like2} alt="Like" />
              ) : (
                <Image src={Like} alt="Like" />
              )}
            </div>
          </div>
          <div className='flex gap-[10px] mb-[30px]'>
            <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="design" />
            <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="user iterface" />
            <Button className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" text="designing" />
          </div>
          <div className='flex justify-between'>
           <div  className='flex items-center'>
           <Image src={Memoji5} alt="Memoji" />
              <div className='ml-[10px]'>
                <h2 className='text-sm font-semibold leading-[22px] text-[#fefeff]'>Michal Malewicz °</h2>
                <p className='text-[10px] font-semibold leading-4 text-[#96989c]'>2 weeks ago</p>
              </div>
           </div>
            <div className='flex gap-10'>
              <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>601,006 Views</p>
              <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>24,6545 Likes</p>
              <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>209 comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    

    </div>
  );
};

export default Posts;