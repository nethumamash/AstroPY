"use client"
import React from 'react'
import ResBar from './resNav'
import { motion } from 'framer-motion'

export default function mercury() {
  return (
<>
    <motion.div 

    initial={{
      opacity: 0,
      x: -300,
    }}

    animate={{
      opacity: 1,
      x: 0,
    }}

    viewport={{
      once: false,
     }}

    transition={{
      delay: 0.5,
      ease: 'easeOut',
      type: "spring"
    }}

    id='Merucry'>
           <ResBar />
        <motion.div

        initial={{
           opacity: 0,
           x: -300,
        }}
        
        animate={{
          opacity: 1,
          x: 0,
        }}

        transition={{
          delay: 0.5,
          ease: 'easeOut',
          type: "spring"
        }}

        className='text-white tracking-[30px] text-[22px] ml-24 mt-12 overflow-hidden ' id='Font'>
       <h1 className=' transition ease-in-out delay-150 hover:scale-110 inline-block cursor-pointer'> MERCURY </h1>
       <h2 className='text-[10px] tracking-[10px] text-gray-300 ml-6 mt-2'>74,797,000 <span className='text-[#59f1ff]'>km2</span> </h2>
         <h3 className='tracking-[5px] text-[13px] ml-[-24px] text-gray-200 mt-16 text-center mr-[110vh]  ' id='H3Font'> <span className='text-[#59f1ff]'>Mercury</span>  is the smallest planet in the solar system <br />
         and it is also the planet closest to the Sun, making it the most 
          difficult of the planets to see with <br />
          the unaided eye. Because its rising or setting <br /> 
          is always within about two hours of the Sun's <br />
           Mercury is never observable when the sky is fully dark</h3>
           <motion.div

           initial={{
            opacity: 1,
           }}

           whileHover={{
            scale: 1,
            rotate: 10,
           }}

          

            className='text-centre mt-4 inline-block'>
           <button  className='px-4 py-2  bg-slate-50 text-black rounded-2xl hover:px-6 hover:py-4 duration-200 tracking-normal text-[12px]'>Read More</button> <br />
           </motion.div>
       </motion.div>
    </motion.div>
    </>
  )
}
