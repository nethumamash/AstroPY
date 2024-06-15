"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
export default function home() {
  return (
    <div>
           <nav className=" sticky top-0 left-0 bottom-0 right-0 rounded-xl flex justify-between px-20 py-5 items-center border shadow-lg border-gray-100 text-black bg-white ," >
 
 <h1 className="text-xl  font-bold transition ease-in-out delay-150 hover:scale-110 cursor-pointer"><Link href='/'>Our<span className='text-[#59f1ff] ml-2'>Universe</span> </Link></h1>
 <div className="flex items-center">
   <div className="flex items-center">
    
     
   </div >
   <ul className="flex items-center space-x-6">
    <Link href='/'> <li className="font-semibold text-black transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">  Home</li></Link>
    <Link href='../planents'> <li className="font-semibold text-black transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">Planets</li></Link>
    <Link href='../galaxies'> <li className="font-semibold text-black transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">Galaxies</li></Link>
    <Link href='../stars'> <li className="font-semibold text-black transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">Stars</li></Link>
    <Link href=''> <li className="font-semibold text-black transition ease-in-out delay-150 hover:scale-110 hover:text-[#59f1ff] cursor-pointer">About Me</li></Link>
     
    
    
   </ul>
 </div>

</nav>

<motion.div initial={{

  opacity: 0,
  y: -10,

}}
   
   animate={{
    opacity: 1,
    y:0,
   }}

   transition={{
    duration: 0.4,
    ease: "easeOut"
   }}
>
       <h1 className='tracking-[1px] text-[22px] pt-5 text-center '>What Type Of Stars</h1>
       <div className='ml-[48.5%] mt-1'>
         <div className=' w-12 h-[0.5px] bg-[#59f1ff]'></div>
         </div> 
</motion.div>


<div>
      
      <motion.div 
      
      initial={{
        opacity: 0,
        x: -300,
      }}

      animate={{
        opacity: 1,
        x:0,
      }}

      transition={{
        duration: 0.4,
        ease: "easeOut"
      }}
      
      >
      <div className=' mt-20 text-[30px]  tracking-[5px] '>
    <div className='w-24 h-1 bg-[#59f1ff] text-[]'></div>
     <h1 className='cursor-pointer mr-[136vh]'>Main Sequence Stars</h1>
     <div className='w-12 h-1 bg-[#59f1ff]'></div>
     <h2 className='text-[15px] tracking-[1px] text-left ml-[2vh] mr-[19vh] mt-4'> 
     A normal star forms from a clump of dust and gas in a stellar nursery. Over hundreds of thousands of years, the clump gains mass, starts to spin, and heats up. When the clump's core heats up to millions of degrees, nuclear fusion starts. This process occurs when two protons, the nuclei of hydrogen atoms, merge to form one helium nucleus. Fusion releases energy that heats the star, creating pressure that pushes against the force of its gravity. A star is born. Scientists call a star that is fusing hydrogen to helium in its core a main sequence star. Main sequence stars make up around 90% of the universe’s stellar population. They range in luminosity, color, and size – from a tenth to 200 times the Sun’s mass – and live for millions to billions of years.

For Stargazers: Many main sequence stars can be seen with the unaided eye, such as Sirius – the brightest star in the night sky – in the northern constellation Canis Major. Rigil Kentaurus (better known as Alpha Centauri) in the southern constellation Centaurus is the closest main sequence star that can be seen with the unaided eye. 
</h2>
    </div>
      </motion.div>

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
  delay: 0.4,
  duration: 0.4,
  ease: "easeOut"
}}

className='rounded-xl'>
      <div className='w-[40pc] h-60   '>
        <img className=' ml-[350px] mt-8  ' src='https://theplanets.org/123/2021/05/main-sequence-star-1024x683.png'/>
      </div>

      </motion.div>

    </div>


    <div className='mt-[20pc]'>
      
      <motion.div 
      
      initial={{
        opacity: 0,
        x: -300,
      }}

      whileInView={{
        opacity: 1,
        x:0,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.4,
        ease: "easeOut"
      }}
      
      >
      <div className=' mt-20 text-[30px]  tracking-[5px] '>
    <div className='w-24 h-1 bg-[#59f1ff] text-[]'></div>
     <h1 className='cursor-pointer mr-[136vh]'>Red Giants Stars</h1>
     <div className='w-12 h-1 bg-[#59f1ff]'></div>
     <h2 className='text-[15px] tracking-[1px] text-left ml-[2vh] mr-[19vh] mt-4'> 
     When a main sequence star less than eight times the Sun’s mass runs out of hydrogen in its core, it starts to collapse because the energy produced by fusion is the only force fighting gravity’s tendency to pull matter together. But squeezing the core also increases its temperature and pressure, so much so that its helium starts to fuse into carbon, which also releases energy. Hydrogen fusion begins moving into the star’s outer layers, causing them to expand. The result is a red giant, which would appear more orange than red. Eventually, the red giant becomes unstable and begins pulsating, periodically expanding and ejecting some of its atmosphere. Eventually, all of its outer layers blow away, creating an expanding cloud of dust and gas called a planetary nebula. The Sun will become a red giant in about 5 billion years.

For Stargazers: Arcturus in the northern constellation Boötes and Gamma Crucis in the southern constellation Crux (the Southern Cross) are red giants visible to the unaided eye. 
</h2>
    </div>
      </motion.div>

<motion.div 

initial={{
  opacity: 0,
  x: -300,
}}

whileInView={{
  opacity: 1,
  x: 0,
}}

viewport={{
  once: true,
}}

transition={{
  delay: 0.4,
  duration: 0.4,
  ease: "easeOut"
}}

className='rounded-xl'>
      <div className='w-[40pc] h-60   '>
        <img className=' ml-[350px] mt-8  ' src='https://theplanets.org/123/2021/05/red-giant-star.png'/>
      </div>

      </motion.div>

    </div>
    <div className='mt-[20pc]'>
      
      <motion.div 
      
      initial={{
        opacity: 0,
        x: -300,
      }}

      whileInView={{
        opacity: 1,
        x:0,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.4,
        ease: "easeOut"
      }}
      
      >
      <div className=' mt-20 text-[30px]  tracking-[5px] '>
    <div className='w-24 h-1 bg-[#59f1ff] text-[]'></div>
     <h1 className='cursor-pointer mr-[136vh]'>White Dwarfs</h1>
     <div className='w-12 h-1 bg-[#59f1ff]'></div>
     <h2 className='text-[15px] tracking-[1px] text-left ml-[2vh] mr-[19vh] mt-4'> 
     After a red giant has shed all its atmosphere, only the core remains. Scientists call this kind of stellar remnant a white dwarf. A white dwarf is usually Earth-size but hundreds of thousands of times more massive. A teaspoon of its material would weigh more than a pickup truck. A white dwarf produces no new heat of its own, so it gradually cools over billions of years. Despite the name, white dwarfs can emit visible light that ranges from blue white to red. Scientists sometimes find that white dwarfs are surrounded by dusty disks of material, debris, and even planets – leftovers from the original star’s red giant phase. In about 10 billion years, after its time as a red giant, the Sun will become a white dwarf.

For Stargazers: White dwarfs are too dim to see with the unaided eye, although some can be found in binary systems with an easily seen main sequence star. Procyon B is an example in the northern constellation Canis Minor. If you have a telescope at home, though, you can see solitary white dwarfs LP 145-141 in the southern constellation Musca and Van Maanen’s star in the northern constellation Pisces.
</h2>
    </div>
      </motion.div>

<motion.div 

initial={{
  opacity: 0,
  x: -300,
}}

whileInView={{
  opacity: 1,
  x: 0,
}}

viewport={{
  once: true,
}}

transition={{
  delay: 0.4,
  duration: 0.4,
  ease: "easeOut"
}}

className='rounded-xl'>
      <div className='w-[40pc] h-60   '>
        <img className=' ml-[350px] mt-8  ' src='https://science.nasa.gov/wp-content/uploads/2023/09/White_Dwarf-1.jpeg?w=1280&format=webp'/>
      </div>

      </motion.div>

    </div>
    <div className='mt-[20pc]'>
      
      <motion.div 
      
      initial={{
        opacity: 0,
        x: -300,
      }}

      whileInView={{
        opacity: 1,
        x:0,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.4,
        ease: "easeOut"
      }}
      
      >
      <div className=' mt-20 text-[30px]  tracking-[5px] '>
    <div className='w-24 h-1 bg-[#59f1ff] text-[]'></div>
     <h1 className='cursor-pointer mr-[136vh]'>Neutron Stars</h1>
     <div className='w-12 h-1 bg-[#59f1ff]'></div>
     <h2 className='text-[15px] tracking-[1px] text-left ml-[2vh] mr-[19vh] mt-4'> 
     Neutron stars are stellar remnants that pack more mass than the Sun into a sphere about as wide as New York City’s Manhattan Island is long.

A neutron star forms when a main sequence star with between about eight and 20 times the Sun’s mass runs out of hydrogen in its core. (Heavier stars produce stellar-mass black holes.) The star starts fusing helium to carbon, like lower-mass stars. But then, when the core runs out of helium, it shrinks, heats up, and starts converting its carbon into neon, which releases energy. This process continues as the star converts neon into oxygen, oxygen into silicon, and finally silicon into iron. These processes produce energy that keep the core from collapsing, but each new fuel buys it less and less time. By the time silicon fuses into iron, the star runs out of fuel in a matter of days. The next step would be fusing iron into some heavier element, but doing so requires energy instead of releasing it. The core collapses and then rebounds back to its original size, creating a shock wave that travels through the star’s outer layers. The result is a huge explosion called a supernova. The remnant core is a superdense neutron star.

Pulsars: These are a type of rapidly rotating neutron star. Bright X-ray hot spots form on the surfaces of these objects. As they rotate, the spots spin in and out of view like the beams of a lighthouse. Some pulsars spin faster than blender blades.

Magnetars: All neutron stars have strong magnetic fields. But a magnetar’s can be 10 trillion times stronger than a refrigerator magnet’s and up to a thousand times stronger than a typical neutron star’s.

For Stargazers: Neutron stars are too faint to see with the unaided eye or backyard telescopes, although the Hubble Space Telescope has been able to capture a few in visible light. Astronomers usually observe them via X-rays and radio emission.
</h2>
    </div>
      </motion.div>

<motion.div 

initial={{
  opacity: 0,
  x: -300,
}}

whileInView={{
  opacity: 1,
  x: 0,
}}

viewport={{
  once: true,
}}

transition={{
  delay: 0.4,
  duration: 0.4,
  ease: "easeOut"
}}

className='rounded-xl'>
      <div className='w-[40pc] h-60   '>
        <img className=' ml-[350px] mt-8  ' src='https://science.nasa.gov/wp-content/uploads/2023/09/Neutron_Stars-1.jpeg?w=1280&format=webp'/>
      </div>

      </motion.div>

    </div>    
    
    <div className='mt-[20pc]'>
      
      <motion.div 
      
      initial={{
        opacity: 0,
        x: -300,
      }}

      whileInView={{
        opacity: 1,
        x:0,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.4,
        ease: "easeOut"
      }}
      
      >
      <div className=' mt-20 text-[30px]  tracking-[5px] '>
    <div className='w-24 h-1 bg-[#59f1ff] text-[]'></div>
     <h1 className='cursor-pointer mr-[136vh]'>Red Dwarfs</h1>
     <div className='w-12 h-1 bg-[#59f1ff]'></div>
     <h2 className='text-[15px] tracking-[1px] text-left ml-[2vh] mr-[19vh] mt-4'> 
     Red dwarfs are the smallest main sequence stars – just a fraction of the Sun’s size and mass. They’re also the coolest, and appear more orange in color than red. When a red dwarf produces helium via fusion in its core, the released energy brings material to the star’s surface, where it cools and sinks back down, taking along a fresh supply of hydrogen to the core. Because of this constant churning, red dwarfs can steadily burn through their entire supply of hydrogen over trillions of years without changing their internal structures, unlike other stars. Scientists think some low-mass red dwarfs, those with just a third of the Sun’s mass, have life spans longer than the current age of the universe, up to about 14 trillion years. Red dwarfs are also born in much greater numbers than more massive stars. Because of that, and because they live so long, red dwarfs make up around 75% of the Milky Way galaxy’s stellar population.

For Stargazers: Red dwarfs are too faint to see with the unaided eye. But with a backyard telescope, you may be able to see Lacaille 8760 in the southern constellation Microscopium or Lalande 21185 in the northern constellation Ursa Major.
</h2>
    </div>
      </motion.div>

<motion.div 

initial={{
  opacity: 0,
  x: -300,
}}

whileInView={{
  opacity: 1,
  x: 0,
}}

viewport={{
  once: true,
}}

transition={{
  delay: 0.4,
  duration: 0.4,
  ease: "easeOut"
}}

className='rounded-xl'>
      <div className='w-[40pc] h-60   '>
        <img className=' ml-[350px] mt-8  ' src='https://science.nasa.gov/wp-content/uploads/2023/09/red_dwarf-1.jpeg?w=1280&format=webp'/>
      </div>

      </motion.div>

    </div> 

    </div>
  )
}
