import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <>
      <div className="home flex flex-col items-center">
        <div className="home-content flex flex-col items-center p-5 m-2">
        <h1 className='font-mono text-5xl font-extrabold title text-center my-4  p-5'>
            Welcome To Innovate <br/> With</h1>
        <a
            href="/"
            className="text-5xl font-bold border-4 border-violet-300 bg-violet-600 rounded-full text-white px-8 p-5 font-mono"
          >
            MyWeb
          </a>
          <div className="description w-1/2 text-center font-sans text-slate-500 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam obcaecati quis officiis odit fugit ipsa libero minus quae? Numquam explicabo quod consequuntur atque fugiat iure consequatur, qui dolorem rerum!
            Quas eum eius ullam ad molestias in minus explicabo placeat maiores obcaecati quisquam exercitationem, repellendus autem suscipit fuga eaque voluptate similique deserunt vitae ducimus quos recusandae, repellat neque voluptas. Blanditiis.
            Blanditiis, quaerat est.
            <br/>
          </div>
            <span className='text-lg py-5'>
            <a href="/" className='underline text-violet-500'>Sign Up</a> or <a href="/" className='underline text-violet-500'>Login</a> to explore more. 
            </span>
        </div>
      </div>
    </>
  )
}

export default Home
