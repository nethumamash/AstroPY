"use client"
import React from 'react'
import { motion } from 'framer-motion'
import ResNav from '../resNav'
import Ellipitical from './ellipitical'
export default function milkyWay() {
  return (

    <div id='MilkyWay'>
      <ResNav />
    <motion.div 
     initial={{
      opacity: 0,
      y: 200,
     }}

     animate={{
      opacity: 1,
      y: 0,
     }}

     

     transition={{
      duration: 0.5,
      ease: "easeOut",
      type: "spring"
     }}

    >
      <div className='pt-[9pc] pl-[9pc] text-[30px] inline-block'>
      <div className='text-white  tracking-[5px] '>
      <div className='w-24 h-1 bg-[#59f1ff] text-[]'></div>
       <h1 className='cursor-pointer'> Our Galaxies</h1>
       <div className='w-12 h-1 bg-[#59f1ff]'></div>
       <h2 className='text-[10px] text-left  mr-[90vh] mt-4'>  <span className=' transition ease-in-out delay-150 hover:text-[32px] text-[#59f1ff]'>A galaxy</span>  is a system of stars, stellar remnants, interstellar gas, dust, and dark matter bound together by gravity.[1][2] The word is derived from the Greek galaxias (γαλαξίας), literally 'milky', a reference to the Milky Way galaxy that contains the Solar System. Galaxies, averaging an estimated 100 million stars,[3] range in size from dwarfs with less than a thousand stars,[4] to the largest galaxies known – supergiants with one hundred trillion stars, each orbiting its galaxy's center of mass. Most of the mass in a typical galaxy is in the form of dark matter, with only a few percent of that mass visible in the form of stars and nebulae. Supermassive black holes are a common feature at the centres of galaxies.</h2>
      </div>
      </div>
   
    
    
    </motion.div>



</div>
  )
}
