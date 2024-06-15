"use client"
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Navbar from "./conponments/navbar";
import Mercury from "./conponments/solorSystem";
import { motion } from 'framer-motion'
export default function Home() {
  return (
   <div>
   
   <div>
 
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
>
     <Navbar />
</motion.div>    
     <Mercury />

    </div>  
    
    </div>
   
  );
}
