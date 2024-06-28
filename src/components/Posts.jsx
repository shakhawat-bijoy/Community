import React, { useState } from 'react';
import Image from './layer/Image';
import Button from './layer/Button';
import p1 from '/p1.jpg';
import p2 from '/p2.jpg';
import p3 from '/p3.jpg';
import p4 from '/p4.jpg';
import Memoji2 from '/Memoji2.png';
import Memoji3 from '/Memoji3.png';
import Memoji4 from '/Memoji4.png';
import Memoji5 from '/Memoji5.png';
import Like from '/Like.png';
import Like2 from '/Like2.png';

// Images array to use randomly
const images = [p1, p2, p3, p4];
const memojis = [Memoji2, Memoji3, Memoji4, Memoji5];
const titles = [
  'Blockchain developer best practices on innovationchain',
  'The 4-step SEO framework that led to a 1000% increase in traffic. Lets talk about blogging and SEO...',
  'OnePay - Online Payment Processing Web App - Download from uihut.com',
  'Designing User Interfaces - how I sold 1800 copies in a few months by Michal Malewicz'
];
const tagsArray = [
  ['finance', 'bitcoin', 'crypto'],
  ['seo', 'blogging', 'traffic'],
  ['payment', 'webapp', 'uikit'],
  ['design', 'user interface', 'designing']
];
const authors = ['Pavel Gvay', 'AR Jakir', 'Dan Ai', 'Michal'];
const times = ['3 weeks ago', '3 days ago', '1 weeks ago', '2 weeks ago'];

// Function to generate random posts
const generatePosts = (numPosts) => {
  const posts = [];
  for (let i = 0; i < numPosts; i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    posts.push({
      id: i + 1,
      image: images[randomIndex],
      title: titles[randomIndex],
      tags: tagsArray[randomIndex],
      memoji: memojis[randomIndex],
      author: authors[randomIndex],
      time: times[randomIndex],
      views: `${Math.floor(Math.random() * 1000000).toLocaleString()} Views`,
      likes: `${Math.floor(Math.random() * 100000).toLocaleString()} Likes`,
      comments: `${Math.floor(Math.random() * 500).toLocaleString()} comments`
    });
  }
  return posts;
};

const postsData = generatePosts(100);

const Posts = () => {
  const [likedPosts, setLikedPosts] = useState({});

  const handleLikeClick = (id) => {
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className='flex flex-col gap-5 p-5 max-w-4xl mx-auto'>
      {postsData.map((post) => (
        <div key={post.id} className='flex flex-col md:flex-row items-center gap-5 bg-[#262d34] p-5 rounded-lg'>
          <div className='w-full md:w-[156px] h-[156px] rounded-xl overflow-hidden'>
            <Image src={post.image} alt="Image" className="w-full h-full object-cover" />
          </div>
          <div className='flex-1'>
            <div className='flex justify-between items-start mb-2'>
              <h5 className='text-[18px] font-semibold leading-[26px] text-[#fefeff] flex-1 pr-2'>
                {post.title}
              </h5>
              <div onClick={() => handleLikeClick(post.id)} className="cursor-pointer flex-shrink-0">
                <Image src={likedPosts[post.id] ? Like2 : Like} alt="Like" className="w-6 h-6" />
              </div>
            </div>
            <div className='flex flex-wrap gap-2 mb-4'>
              {post.tags.map((tag) => (
                <Button 
                  key={tag} 
                  className="text-[10px] font-semibold leading-4 text-[#96989c] hover:text-[#fefeff] py-1 px-[10px] rounded-full bg-[#2c353d] transition-all duration-300" 
                  text={tag} 
                />
              ))}
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
              <div className='flex items-center mb-2 sm:mb-0'>
                <Image src={post.memoji} alt="Memoji" className="w-8 h-8" />
                <div className='ml-2'>
                  <h2 className='text-sm font-semibold leading-[22px] text-[#fefeff]'>{post.author} °</h2>
                  <p className='text-[10px] font-semibold leading-4 text-[#96989c]'>{post.time}</p>
                </div>
              </div>
              <div className='flex gap-4'>
                <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>{post.views}</p>
                <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>{post.likes}</p>
                <p className='text-sm leading-[22px] text-[#96989c] hover:text-[#fefeff] transition-all duration-300 cursor-pointer'>{post.comments}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;