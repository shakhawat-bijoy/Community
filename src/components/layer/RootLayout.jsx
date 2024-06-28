import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

import Footer from '../Footer'

const RootLayout = () => {
  return (
    <div>

        <Navbar/>
       

            <Outlet/>

       

    </div>
  )
}

export default RootLayout