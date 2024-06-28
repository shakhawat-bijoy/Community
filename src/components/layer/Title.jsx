import React from 'react'

const Title = ({text,className}) => {
  return (
    <div>
        <h2 className={`text-[#fefeff] lg:text-base text-xs md:text-sm font-semibold hover:text-[#ffffff] transition-all duration-500 ${className}`}>{text}</h2>
    </div>
  )
}

export default Title
