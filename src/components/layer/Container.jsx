import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1360px] mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container