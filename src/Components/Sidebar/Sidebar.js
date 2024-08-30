import "./Sidebar.css"
import React from 'react'
import { IoMdClose } from "react-icons/io";

const Sidebar = (props) => {
  return (
    <>
      <div className="sidebar bg-slate-400 h-full flex flex-col">
        <div className="side-head m-5 flex justify-between">
      <a href='/' className='text-2xl font-bold border-4 border-violet-300 bg-violet-600 rounded-lg text-white px-4 p-1 font-mono'>Menu</a>
        <div className="close-btn" onClick={props.handleSidebar}>
        <IoMdClose size={40} className='border-2 border-black rounded-md'/>
        </div>
        </div>
      <div className="side-sec-1 flex flex-col items-center text-2xl mx-auto p-5">
        <a href="/" className='m-3 h-12 p-2.5 hover:opacity-65 hover:border-b-2 border-b-slate-500'>Home</a>
        <a href="/" className='m-3 h-12 p-2.5 hover:opacity-65 hover:border-b-2 border-b-slate-500'>Contact Us</a>
        <a href="/" className='m-3 h-12 p-2.5 hover:opacity-65 hover:border-b-2 border-b-slate-500'>About</a>
      </div>
        <div className="side-sec-2 flex flex-col items-center">
            <button className='m-3 w-60 bg-violet-500 px-5 py-2 rounded-md font-medium hover:opacity-50 text-white'>Sign Up</button>
            <button className='m-3 w-60 bg-violet-500 px-5 py-2 rounded-md font-medium hover:opacity-50 text-white'>Login</button>
        </div>
        </div>
    </>
  )
}

export default Sidebar
