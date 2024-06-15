import React from 'react'
import { motion } from 'framer-motion'
export default function saturn() {
  return (
    <div><div id='Satrun'>
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
<h1 className=' transition ease-in-out delay-150 hover:scale-110 inline-block cursor-pointer ml-8'> SATURN </h1>
<h2 className='text-[10px] tracking-[10px] text-gray-300 ml-10 mt-2'>4.27×1010 <span className='text-[#59f1ff]'>km2</span> </h2>
<h3 className='tracking-[5px] text-[13px] ml-[-24px] text-gray-200 mt-16 text-center mr-[110vh]  ' id='H3Font'> <span className='text-[#59f1ff]'> Saturn </span> 
 is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine-and-a-half times that of Earth. It has only one-eighth the average density of Earth, but is over 95 times more massive
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
</div></div>
  )
}
