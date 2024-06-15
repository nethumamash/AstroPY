"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Img from 'next/image'
export default function whatIs() {
  return (
    <>
    <div className='bg-[#0d0d0d] text-white text-center pt-6 h-[450vh]' id='WhatIS' >
      

<motion.div 
             initial={{
                opacity: 0,
                y: -20,
            }}
        
            whileInView={{
                opacity: 1,
                y: 0,
            }}

            transition={{
                duration: 0.5,
                delay: 0.5,
                type: ''
            }}
            
            className="mt-16"
        
     >
  <div>
        <h1 className='text-[22px]'>What Type Of <span className='text-[#59f1ff]'>Galaxies</span> </h1>
        <div className='ml-[48.5%] mt-1'>
         <div className=' w-12 h-[0.5px] bg-[#59f1ff]'></div>
         </div>
         </div>


</motion.div>
        
<motion.div 

initial={{
  opacity: 0,
  y: 300,
}}

whileInView={{
  opacity: 1,
  y:0,
}}


viewport={{
  once: true,
}}

transition={{
  duration: 0.5,
  type: ""
}}

className='pt-[9pc] pl-[9pc] text-[30px] inline-block'>
    <div className='text-white  tracking-[5px] '>
    <div className='w-24 h-1 bg-[#59f1ff] text-[]'></div>
     <h1 className='cursor-pointer mr-[136vh]'> Elliptical Galaxy</h1>
     <div className='w-12 h-1 bg-[#59f1ff]'></div>
     <h2 className='text-[10px] text-left  mr-[10vh] mt-4'>  <span className=' transition ease-in-out delay-150  text-[#59f1ff]'>Elliptical</span>   galaxies have an even, ellipsoidal shape. They typically contain a much greater proportion of older stars than spiral galaxies do.

Four classes are used to classify galaxies: spiral; barred spiral; elliptical and irregular. Elliptical galaxies have a smooth ellipsoidal or spherical appearance, and they have far less structure than spiral galaxies do. Elliptical galaxies are typically found in galaxy clusters. There is a common misconception that astronomers used to think that elliptical galaxies were the evolutionary forerunners to spiral galaxies, because Hubble himself referred to elliptical galaxies as ‘early-type’ and spiral galaxies as ‘late-type’. In fact, Hubble just used those names to indicate the differences in structure between elliptical and spiral galaxies, and he himself was not sure how the different types of galaxy evolved. Current thinking amongst astronomers is that most elliptical galaxies formed from the collisions and subsequent mergers of spiral galaxies. The typical ages of the stellar populations of elliptical and spiral galaxies provide evidence for this theory, because the stars in elliptical galaxies are typically much older and redder than those in spiral galaxies. Whilst spiral galaxies have rich reservoirs of the dust and gas that fuel star formation, elliptical galaxies appear to have virtually exhausted that fuel, and so there is very little raw material for the formation of new stars. Therefore, it seems likely that elliptical galaxies are largely populated by stars that formed within active spiral galaxies. Due to their very low rate of star formation and their populations of old, red stars, elliptical galaxies are sometimes colloquially referred to as ‘red and dead’ by astronomers.

Recently, the Hubble Space Telescope and ESO's Very Large Telescope (VLT) were used to help solve an astrophysical mystery that had centred on the most massive elliptical galaxies. These gigantic ‘red and dead’ galaxies were not always so inactive. In fact, earlier in the history of the Universe, the evolutionary precursors to these massive galaxies were full of gas and forming stars at a prodigious rate. Thanks to Hubble and the VLT, astronomers were able to show for the first time how star formation in these ‘dead’ galaxies actually sputtered out billions of years ago. Hubble has also captured beautiful imagery of elliptical galaxies throughout its more than 30-year history. This includes detailed views of the elliptical galaxies NGC 4150 and NGC 2768.</h2>
    </div>
    </motion.div>

    <motion.div 
    
    initial={{

      opacity: 0,
      y: 300,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    viewport={{
      once: true,
     }}

    transition={{
      duration: 0.4,
      type: "spring",
      ease: "easeOut"
    }}

    className=" rounded-lg overflow-hidden mt-10 ml-[40%] border border-[#59f1ff] max-w-sm">
<div className="relative">
  <img
    className="w-full"
    src="https://cdn.esahubble.org/archives/images/screen/opo1038b.jpg"
    alt="Product Image"
  />
 
</div>
<div className="p-4">
  <h3 className="text-lg font-medium mb-2"> Image Of Elliptical Galaxy</h3>

  <div className="flex items-center justify-between">
 
  <motion.div
        initial={{
          opacity: 1,
         }}

         whileHover={{
          scale: 1,
          rotate: 10,
         }} 
         
         viewport={{
          once: true,
         }}

         className='text-centre mt-4 inline-block'>
         <button className='px-4 py-2  bg-slate-50 text-black rounded-2xl hover:px-6 hover:py-4 duration-200 tracking-normal text-[12px]'>View</button> <br />
         </motion.div>
  </div>
</div>
</motion.div>


<motion.div 

initial={{
  opacity: 0,
  y: 300,
}}

whileInView={{
  opacity: 1,
  y:0,
}}


viewport={{
  once: true,
}}

transition={{
  duration: 0.5,
  type: ""
}}

className='pt-[9pc] pl-[9pc] text-[30px] inline-block'>
    <div className='text-white  tracking-[5px] '>
    <div className='w-24 h-1 bg-[#59f1ff] text-[]'></div>
     <h1 className='cursor-pointer mr-[144vh]'>Spiral Galaxy</h1>
     <div className='w-12 h-1 bg-[#59f1ff]'></div>
     <h2 className='text-[10px] text-left  mr-[10vh] mt-4'>  <span className=' transition ease-in-out delay-150  text-[#59f1ff]'>A spiral</span>   galaxies have an even, ellipsoidal shape. They typically contain a much greater proportion of older stars than spiral galaxies do.
      galaxy typically has a rotating disc with spiral ‘arms’ that curve out from a dense central region. The Milky Way is a spiral galaxy.

Four classes are used to classify galaxies: spiral; barred spiral; elliptical and irregular. Spiral galaxies have a complex structure: a dense central bulge lies at the centre of a rotating disc, which features a spiral structure that originates at the bulge. Spiral galaxies are surrounded by sparsely populated halos — roughly spherical regions above and below the plane of the discs. Barred spirals differ from normal spiral galaxies in that the arms of the galaxy do not lead all the way into the centre, but are connected to the two ends of a straight bar of stars which contains the nucleus at its centre. Approximately two-thirds of all spiral galaxies are thought to be barred spiral galaxies. Classifying spiral galaxies is not always straightforward, as their appearance varies considerably depending on their orientation relative to Earth. The most visually spectacular spiral galaxies are ‘face-on’, meaning that their bulge and all their spiral arms are clearly visible. The most challenging to identify are fully ‘side-on’, meaning that only the outer edge of one side of the galaxy’s arms is visible. The Milky Way is thought to be a barred spiral galaxy. Approximately 60% of all galaxies are thought to be spiral galaxies, making spiral galaxies the home of the majority of the stars in the Universe. Spiral galaxies are populated by stars that are on average much younger than those that populate elliptical galaxies, and current thinking suggests that spiral galaxies may evolve into elliptical galaxies. Spiral galaxies rotate, and their spiral shape is not stable. A puzzle of modern astronomy is how spiral galaxies maintain their spiral arms.

Hubble has captured beautiful imagery of the distinctive arms and spiral features of spiral galaxies throughout its more than 30-year history. Particularly popular is the Andromeda Galaxy — a large spiral galaxy — which Hubble has observed in unprecedented detail, capturing over 100 million stars and representing a new benchmark for precision studies of this galaxy type.

Most spiral galaxies in the Universe have a bar structure in their centre, and Hubble’s images of NGC 1073 and NGC 1300 offer particularly clear views of these.

</h2>
    </div>
    </motion.div>

    <motion.div 
    
    initial={{

      opacity: 0,
      y: 300,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    viewport={{
      once: true,
     }}

    transition={{
      duration: 0.4,
      type: "spring",
      ease: "easeOut"
    }}

    className=" rounded-lg overflow-hidden mt-10 ml-[40%] border border-[#59f1ff] max-w-sm">
<div className="relative">
  <img
    className="w-full"
    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Messier_77_spiral_galaxy_by_HST.jpg"
    alt="Product Image"
  />
 
</div>
<div className="p-4">
  <h3 className="text-lg font-medium mb-2"> Image Of Spiral Galaxy</h3>

  <div className="flex items-center justify-between">
 
  <motion.div
        initial={{
          opacity: 1,
         }}

         whileHover={{
          scale: 1,
          rotate: 10,
         }}
         
         viewport={{
          once: true,
         }}
         className='text-centre mt-4 inline-block'>
         <button className='px-4 py-2  bg-slate-50 text-black rounded-2xl hover:px-6 hover:py-4 duration-200 tracking-normal text-[12px]'>View</button> <br />
         </motion.div>
  </div>
</div>
</motion.div>

<motion.div 

initial={{
  opacity: 0,
  y: 300,
}}

whileInView={{
  opacity: 1,
  y:0,
}}


viewport={{
  once: true,
}}

transition={{
  duration: 0.5,
  type: ""
}}

className='pt-[9pc] pl-[9pc] text-[30px] inline-block'>
    <div className='text-white  tracking-[5px] '>
    <div className='w-24 h-1 bg-[#59f1ff] text-[]'></div>
     <h1 className='cursor-pointer mr-[142vh]'>Barred Galaxy</h1>
     <div className='w-12 h-1 bg-[#59f1ff]'></div>
     <h2 className='text-[10px] text-left  mr-[10vh] mt-4'>  <span className=' transition ease-in-out delay-150  text-[#59f1ff]'>A barred </span>   galaxies have an even, ellipsoidal shape. They typically contain a much greater proportion of older stars than spiral galaxies do.
     spiral galaxy is a spiral galaxy with a central bar-shaped structure made of stars.

Bars are found in up to 65% of spiral galaxies. They affect the motions of stars, dust and gas. It is believed that bars act a bit like a funnel, pulling matter into the bulge from the disk. This leads to stars forming in bursts within the centre.

Astronomers can look at samples of galaxies from different points in time. The further back we go the fewer barred spirals we see. This might suggest that the bars form as the galaxies grow older. It is also thought that this is only a phase in a spiral galaxies life and that the bars will someday fade. This might leave behind a large core at the centre of the galaxy, with a smaller disk. This could be a possible transition from a spiral to an elliptical galaxy.

It is very difficult to see the true shape of our own galaxy, the Milky Way. By measuring the movement of stars in the night sky, astronomers have suggested that we live in a barred spiral galaxy.

</h2>
    </div>
    </motion.div>

    <motion.div 
    
    initial={{

      opacity: 0,
      y: 300,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      duration: 0.4,
      type: "spring",
      ease: "easeOut"
    }}

    className=" rounded-lg overflow-hidden mt-10 ml-[40%] border border-[#59f1ff] max-w-sm">
<div className="relative">
  <img
    className="w-full"
    src="https://science.nasa.gov/wp-content/uploads/2023/04/potw2102a-jpg.webp?w=1833"
    alt="Product Image"
  />
 
</div>
<div className="p-4">
  <h3 className="text-lg font-medium mb-2"> Image Of Barred Galaxy</h3>

  <div className="flex items-center justify-between">
 
  <motion.div
        initial={{
          opacity: 1,
         }}

         whileHover={{
          scale: 1,
          rotate: 10,
         }} className='text-centre mt-4 inline-block'>
         <button className='px-4 py-2  bg-slate-50 text-black rounded-2xl hover:px-6 hover:py-4 duration-200 tracking-normal text-[12px]'>View</button> <br />
         </motion.div>
  </div>
</div>
</motion.div>


        </div>

        </>
  )
}
