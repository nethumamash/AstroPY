import React from 'react'
import { motion } from 'framer-motion'
export default function neptune() {
  return (
    <div id='Neptune'>
              <div className='text-white tracking-[30px] text-[22px] ml-24  ' id='Font'>
            <motion.div 
                    initial={{
                      opacity: 0,
                      x: -300,
                     }} 
            
                     whileInView={ {
                      opacity: 1,
                      x: 0,
                     }}
            
                     viewport={{
                      once: false,
                     }}
            
                     transition={{
                      delay: 0.5,
                      duration: 1,
                      ease: 'easeOut',
                      type: "spring"
                    }}
            className='pt-44'>
       <h1 className=' transition ease-in-out delay-150 hover:scale-110 inline-block cursor-pointer ml-8'> NEPTUNE </h1>
       <h2 className='text-[10px] tracking-[10px] text-gray-300 ml-10 mt-2'>7.6187×109 <span className='text-[#59f1ff]'>km2</span> </h2>
         <h3 className='tracking-[5px] text-[13px] ml-[-24px] text-gray-200 mt-16 text-center mr-[110vh]  ' id='H3Font'> <span className='text-[#59f1ff]'> Neptune </span> 
          is the eighth and farthest known planet from the Sun. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth and slightly more massive than fellow ice giant Uranus
         </h3>
         <motion.div
          initial={{
            opacity: 1,
           }}

           whileHover={{
            scale: 1,
            rotate: 10,
           }} className='text-centre mt-4 inline-block'>
           <button className='px-4 py-2  bg-slate-50 text-black rounded-2xl hover:px-6 hover:py-4 duration-200 tracking-normal text-[12px]'>Read More</button> <br />
           </motion.div>
           </motion.div>
       </div>
    </div>
  )
}
