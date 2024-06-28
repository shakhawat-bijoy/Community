import React from "react";
import Home from './components/page/Home'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from './components/layer/RootLayout'
import Podcast from "./components/page/Podcast";
import Calendar from "./components/page/Calendar";
import Interviews from "./components/page/Interviews";
import Groups from "./components/page/Groups";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
        // errorElement={<Error />}
      >
        <Route index element={<Home/>} ></Route>
        <Route path="/calender" element={<Calendar/>} ></Route>
        <Route path="/Podcast" element={<Podcast/>} ></Route>
        <Route path="/Interviews" element={<Interviews/>} ></Route>
        <Route path="/groups" element={<Groups/>} ></Route>
     
        

      </Route>
    )
  );
  return (
   <>
     <RouterProvider router={router} />
   </>
  )
}

export default App