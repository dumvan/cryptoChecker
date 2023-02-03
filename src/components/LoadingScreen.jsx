import React from 'react '
import {motion} from 'framer-motion'
import BitcoinSvg from '../assets/bitcoin2.svg'
export default function LoadingScreen(){

  return(
  <section className='flex items-center w-full h-screen '>
        <motion.h1 
          animate={{rotate:360}}
          transition={{repeat:Infinity,duration:1}}
          className='mx-auto'>
          <img className='h-20 w-20 rounded-full' src={BitcoinSvg} alt='..'/>
        </motion.h1>
  </section>)
}