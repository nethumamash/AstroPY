import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function resNav() {
  return (
    <motion.div
    inherit={{
      x: -200,
      opacity: 0,
      }}

    animate={{
      y: 0,
      opacity: 1
    }}  

    transition={{
      duration: 1.2,
      delay: 0.4,
      ease: "easeInOut"
    }}>
        <nav className=" sticky  flex justify-between px-20 py-10 items-center text-white ," >
 
 <h1 className="text-xl  font-bold transition ease-in-out delay-150 hover:scale-110 cursor-pointer"><Link href='/'>Our<span className='text-[#59f1ff] ml-2'>Universe</span> </Link></h1>
 <div className="flex items-center">
   <div className="flex items-center">
    
     
   </div >
   <ul className="flex items-center space-x-6">
    <Link href='/'> <li className="font-semibold text-white transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">  Home</li></Link>
    <Link href='../planents'> <li className="font-semibold text-white transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">Planets</li></Link>
    <Link href='../galaxies'> <li className="font-semibold text-white transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">Galaxies</li></Link>
    <Link href='../stars'> <li className="font-semibold text-white transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">Stars</li></Link>
    <Link href=''> <li className="font-semibold text-white transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">About Me</li></Link>
     
    
    
   </ul>
 </div>

</nav>


    </motion.div>
    
  )
}
