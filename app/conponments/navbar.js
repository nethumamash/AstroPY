"use client"
import React, { useEffect } from 'react'
import Link from 'next/link';
import Home from '../page';
import react , { useState } from 'react';
import { motion } from 'framer-motion';
function navbar() {


  const [ header, setHeader ] =useState(false);

  const scrollHeader = () => {
    if(window.scrollY >= 120) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
    window.addEventListener("scroll", scrollHeader)
    }
  },[])

  return (

    <main className={header ? "bg-[red]" : "bg-[transparent]" }>
    <div   >
<nav id='Bg'   >

<nav className=" sticky  flex justify-between px-20 py-10 items-center text-white ," >
 
  <h1 className="text-xl  font-bold transition ease-in-out delay-150 hover:scale-110 cursor-pointer"><Link href=''>Our<span className='text-[#59f1ff] ml-2'>Universe</span> </Link></h1>
  <div className="flex items-center">
    <div className="flex items-center">
     
      
    </div >
    <ul className="flex items-center space-x-6">
      <li className="font-semibold text-white transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">  Home</li>
     <Link href='../planents'> <li className="font-semibold text-white transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">Planets</li></Link>
     <Link href='../galaxies'> <li className="font-semibold text-white transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">Galaxies</li></Link>
     <Link href='../stars'> <li className="font-semibold text-white transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">Stars</li></Link>
     <Link href=''> <li className="font-semibold text-white transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">About Me</li></Link>
      
     
     
    </ul>
  </div>

</nav>
<>
  {/* source https://github.com/themesberg/landwind */}
  <section className=" ">
    <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
        OurUniverse <br />
           &amp; Our Solar System.
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
         <h1> The galaxy that contains the Earth and its solar system is called the Milky Way. Solar systems orbit around their galaxies just as planets orbit around their suns. The Universe is the largest. All things, including galaxies and solar systems, are included within the Universe.</h1>
        </p>
        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <motion.div
          initial={{
            opacity: 1,
           }}

           whileHover={{
            scale: 1,
            rotate: 10,
           }} className='text-centre mt-4 inline-block'>
          <Link href='../stars'> <button className='px-4 py-2  bg-slate-50 text-black rounded-2xl hover:px-6 hover:py-4 duration-200 tracking-normal text-[12px]'>Our Stars</button> <br /></Link>
           </motion.div>
         
        </div>
      </div>
 \
    </div>
  </section>
</>

</nav>

</div>

</main>
  )
}

export default navbar;