import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
        <div className="footer bg-violet-800  text-white p-5 flex flex-wrap justify-between">
                <div className="address bg-violet-200 rounded-2xl p-10 flex justify-center items-center ">
                <a
            href="/"
            className="text-5xl font-bold border-4 border-violet-300 bg-violet-800 rounded-full text-white px-8 p-5 font-mono"
          >
            MyWeb
          </a>
                </div>
                <div className="details flex flex-wrap justify-evenly">
                <ul>
                <p  className='font-bold text-lg'>Services</p>
                <li>Web Developement</li>
                <li>Web Designing</li>
                <li>App Developement</li>
            </ul>
            <ul>
               <p  className='font-bold text-lg'>Technologies</p> 
                <li>React </li>
                <li>Angular</li>
                <li>Flutter</li>
                <li>.Net</li>
                <li>NodeJS</li>                
            </ul>
            <ul>
               <p  className='font-bold text-lg'>Our Team</p> 
                <li>John Doe</li>
                <li>John Wick</li>
                <li>Robert Dwanye Jr.</li>
                <li>Will Smith</li>
                <li>Jacki Chan</li>                
            </ul>
            <ul>
               <p  className='font-bold text-lg'>Locations</p> 
                <li>India</li>
                <li>Dubai</li>
                <li>Canada</li>
                <li>Maxico</li>                
            </ul>
                </div>
            

        </div>
    </>
  )
}

export default Footer
