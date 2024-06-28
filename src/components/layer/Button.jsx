import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, className,to}) => {
  return (
    <div>
      <Link to={to}>
      <button className={`${className}`}>{text}</button>
      
      </Link>
    </div>
  )
}

export default Button