import React, { useState } from 'react'
import Image from './layer/Image'
import Logo from '/Logo.png'
import Profile from '/Profile.png'
import msg from '/msg.png'
import Notification from '/Notification.png'
import { IoMdHome } from 'react-icons/io'
import { BiCalendarWeek, BiSolidDownArrow } from 'react-icons/bi'
import { MdOutlineGroups2 } from 'react-icons/md'
import { PiApplePodcastsLogoDuotone } from 'react-icons/pi'
import { BsMic } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import { FaPlus } from 'react-icons/fa'
import { GoTriangleDown } from 'react-icons/go'

const Navbar = () => {
  const [activePopup, setActivePopup] = useState(null);

  const togglePopup = (popupName) => {
    setActivePopup(activePopup === popupName ? null : popupName);
  };

  const MessagePopup = () => (
    <div className="absolute top-full lg:right-0 mt-2 w-64 bg-white rounded-md shadow-lg">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Messages</h3>
        <p>You have no new messages.</p>
      </div>
    </div>
  );

  const NotificationPopup = () => {
    const notifications = [
      { id: 1, text: "New podcast episode available", time: "2 minutes ago" },
      { id: 2, text: "Your post received 50 likes", time: "15 minutes ago" },
      { id: 3, text: "New comment on your photo", time: "1 hour ago" },
      { id: 4, text: "Meeting reminder: Team catch-up at 3 PM", time: "2 hours ago" },
      { id: 5, text: "Your subscription will expire soon", time: "5 hours ago" },
      { id: 6, text: "New follower: Jane Doe", time: "Yesterday" },
      { id: 7, text: "Your video was shared 10 times", time: "Yesterday" },
      { id: 8, text: "New group invitation: Tech Enthusiasts", time: "2 days ago" },
      { id: 9, text: "Platform maintenance scheduled for next week", time: "3 days ago" },
      { id: 10, text: "Your post is trending!", time: "4 days ago" },
    ];

    return (
      <div className="absolute top-full lg:right-0 left-15 mt-2 w-80  bg-white rounded-md shadow-lg max-h-96 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Notifications</h3>
          {notifications.map((notification) => (
            <div key={notification.id} className="mb-3 pb-2 border-b last:border-b-0">
              <p className="text-sm">{notification.text}</p>
              <p className="text-xs text-gray-500">{notification.time}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };


  return (
    <div className='bg-[#262D34] flex items-center justify-center l:py-5 py-3 flex-wrap'>
      <Image className="lg:inline hidden" src={Logo}/>

      <div className=' lg:ml-[84px]'>
        <ul className='flex items-center lg:gap-5 gap-2'>
          <li className='flex items-center justify-center transition-all duration-700 '>
            <NavLink
              to="/"
              className={({ isActive }) => 
                `lg:p-[10px] p-1 leading-[21.6px] text-[#fff] transition-all duration-300 relative rounded-md ${isActive ? 'bg-[#FF4400]' : 'bg-transparent'}`
              }
            >
              <IoMdHome className='w-5 h-5 text-white'/>
            </NavLink>
          </li>
          <li className='flex items-center justify-center transition-all duration-700 '>
            <NavLink
              to="/calender"
              className={({ isActive }) => 
                `lg:p-[10px] p-1 leading-[21.6px] text-[#fff] transition-all duration-300 relative rounded-md ${isActive ? 'bg-[#FF4400]' : 'bg-transparent'}`
              }
            >
              <BiCalendarWeek className='w-5 h-5 text-white'/>
            </NavLink>
          </li>
          <li className='flex items-center justify-center transition-all duration-700 '>
            <NavLink
              to="/groups"
              className={({ isActive }) => 
                `lg:p-[10px] p-1 leading-[21.6px] text-[#fff] transition-all duration-300 relative rounded-md ${isActive ? 'bg-[#FF4400]' : 'bg-transparent'}`
              }
            >
              <MdOutlineGroups2 className='w-5 h-5 text-white'/>
            </NavLink>
          </li>
          <li className='flex items-center justify-center transition-all duration-700 '>
            <NavLink
              to="/podcast"
              className={({ isActive }) => 
                `lg:p-[10px] p-1 leading-[21.6px] text-[#fff] transition-all duration-300 relative rounded-md ${isActive ? 'bg-[#FF4400]' : 'bg-transparent'}`
              }
            >
              <PiApplePodcastsLogoDuotone className='w-5 h-5 text-white'/>
            </NavLink>
          </li>
          <li className='flex items-center justify-center transition-all duration-700 '>
            <NavLink
              to="/Interviews"
              className={({ isActive }) => 
                `lg:p-[10px] p-1 leading-[21.6px] text-[#fff] transition-all duration-300 relative rounded-md ${isActive ? 'bg-[#FF4400]' : 'bg-transparent'}`
              }
            >
              <BsMic className='w-5 h-5 text-white'/>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex lg:w-[440px] w-[100px]  lg:ml-5 ml-16 rounded bg-[#2c353d]">
        <input className=" w-full border-none bg-transparent lg:px-5 px-1 lg:py-[10px] py-1 text-white outline-none" name="search" placeholder="Type here to search..." />
        <button type="submit" className="m-2 rounded lg:px-4 px-0 lg:py-2">
          <CiSearch className=' text-[#838ead] font-bold w-5 h-5 flex justify-center items-center'/>
        </button>
      </div>




      <ul className='flex items-center lg:gap-[25px] gap-2 lg:ml-[58px] mt-2 lg:mt-0'>
        <li className='Messege flex items-center justify-center transition-all duration-700 relative'>
          <button
            onClick={() => togglePopup('message')}
            className={`p-[10px] leading-[21.6px] text-[#fff] transition-all duration-300 relative rounded-md ${activePopup === 'message' ? 'bg-[#93d1fe]' : 'bg-transparent'}`}
          >
            <Image className="w-5 h-5" src={msg}/>
          </button>
          {activePopup === 'message' && <MessagePopup />}
        </li>  

        <li className='Notification flex items-center justify-center transition-all duration-700 relative'>
          <button
            onClick={() => togglePopup('notification')}
            className={`p-[10px] leading-[21.6px] text-[#fff] transition-all duration-300 relative rounded-md ${activePopup === 'notification' ? 'bg-[#93d1fe]' : 'bg-transparent'}`}
          >
            <Image className="w-5 h-5" src={Notification}/>
          </button>
          {activePopup === 'notification' && <NotificationPopup />}
        </li>   
        
        <li className='flex items-center justify-center transition-all duration-700 '>
          <NavLink
            to="/"
            className={({ isActive }) => 
              `p-[10px] leading-[21.6px] text-[#fff] transition-all duration-300 relative rounded-md ${isActive ? 'bg-[#93d1fe]' : 'bg-transparent'}`
            }
          >
            <Image className="w-5 h-5" src={Profile}/>
          </NavLink>
        </li>  
      </ul>   

      <div className="relative lg:inline-flex ml-4 hidden">
        <svg className="w-2 h-1 absolute top-0 right-0 m-4 font-bold pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#fff" fill-rule="nonzero"/></svg>
        <select className="text-white font-bold h-8 pl-5 pr-5 bg-transparent bg-[#262D34] focus:outline-none appearance-none cursor-pointer">
          <option className='bg-[#262D34]'>AR. Jakir</option>
          <option className='bg-[#262D34]'></option>
          <option className='bg-[#262D34]'>Pavel Gvay</option>
          <option className='bg-[#262D34]'>Mansurul Haque</option>
          <option className='bg-[#262D34]'>Michal Malewicz</option>
        </select>
      </div>
    </div>
  )
}

export default Navbar