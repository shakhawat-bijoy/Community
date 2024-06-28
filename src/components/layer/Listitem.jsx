import React from 'react'
import { NavLink } from 'react-router-dom'

const Listitem = ({ to, text, className }) => {
  return (
    <li className='group'>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `font-Krub lg:text-base font-normal leading-[21.6px] text-[#fff] transition-all duration-300 relative after:content-[''] after:absolute after:left-0 lg:after:top-12 after:top-5  after:w-0 after:h-0.5 after:bg-[#fff] ${isActive ? 'after:w-full' : 'hover:after:w-full'} after:transition-all after:duration-300 ${className}`
        }
      >
        {text}
      </NavLink>
    </li>
  )
}

export default Listitem
