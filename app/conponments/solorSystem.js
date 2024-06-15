import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
export default function mercury() {
  return (
    <div id='SolorBG'>
       <div>
       <div className="flex flex-wrap  h-full ">
  <div className="w-full sm:w-8/12 mt-24">
    <div className="container mx-auto h-full sm:p-10">
      <nav className="flex px-4 justify-between items-center">
        <div className="text-4xl font-bold transition ease-in-out delay-150 hover:scale-110 cursor-pointer">
          Our Solar <span className='text-[#59f1ff]'>System.</span>
        </div>
        {/* <div>
          <img
            src="https://image.flaticon.com/icons/svg/497/497348.svg"
            alt=""
            className="w-8"
          />
        </div> */}
      </nav>
      <header className="container px-4 lg:flex mt-24 items-center h-full lg:mt-0">
        <div className="w-full ">
        
          <div className="w-20 h-2 bg-[#59f1ff] my-4 font-mono text-sm" />
          <p className="text-base mb-10">
          General characteristics. Astronomers sometimes divide the Solar System structure into separate regions. The inner Solar System includes Mercury, Venus, Earth, Mars, and the bodies in the asteroid belt. The outer Solar System includes Jupiter, Saturn, Uranus, Neptune, and the bodies in the Kuiper belt.
          </p>
      

          <div className='text-white flex flex-row gap-2'>
          <Link href='../planents'> <motion.div
            initial={{
              opacity: 1,
             }}
  
             whileHover={{
              scale: 1,
              rotate: 20,
             }}
          > <button className='px-4 py-2 bg-slate-50 text-black rounded-2xl hover:text-xl duration-200'>Planents</button></motion.div> <br /></Link>
             <motion.div 
                initial={{
                  opacity: 1,
                 }}
      
                 whileHover={{
                  scale: 1,
                  rotate: -20,
                 }}
             > <button className='px-4 py-2 border border-white rounded-xl hover:text-xl duration-200 '>Galaxies</button></motion.div>
       </div>
        </div>
      </header>
    </div>
  </div>
  {/* <img
    src="https://wallpapercave.com/uwp/uwp871760.jpeg"
    alt="Leafs"
    className="w-full h-48 object-cover sm:h-screen sm:w-4/12 rounded-lg"
  /> */}
</div>
       </div>
    </div>
  )
}

