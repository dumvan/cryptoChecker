import React,{useEffect,useState} from 'react'
import BitcoinImage from '../assets/bitcoin1.svg'
import BitcoinImage2 from '../assets/bitcoin2.svg'
import {AnimatePresence ,motion} from 'framer-motion'
 
export default function  Hero() {
  const [checkerClick ,setCheckerClick] =useState(false)

  const coinVariants = {
    hide:{opacity: 0},
    clicked:{opacity:[0,1,0] , rotate:360, y:[-10,-50,20] ,
      transition:{duration:0.5 ,},
    },
  }
  const handleClick = (e)=>{
    e.persist()
    setCheckerClick(!checkerClick)
  }
  useEffect(()=>{
    handleClick
  },[checkerClick])
  return(
    <section className='relative p-20 h-auto w-full bg-gradient-to-bl flex flex-col justify-center items-center  uppercase from-slate-900 to-gray-700 text-white shadow-2xl '>
      
    <h1 className='text-7xl group z-10 items-center flex flex-wrap'><span>crypto</span><span onClick={handleClick} className='relative text-3xl p-1 text-center cursor-pointer text-yellow-500 duration-500 rounded-lg hover:bg-yellow-500 select-none hover:text-white'>
          <AnimatePresence>
            <motion.img
             variants={coinVariants}
             initial='hide'
             animate={!checkerClick ? '':'clicked'}
    
             className='absolute right-14 -top-5  h-auto w-10' src={BitcoinImage2}/>
          </AnimatePresence>
          checker</span></h1>
      <img className='mix-blend-soft-light h-auto w-60 absolute left-4  bottom-0'src={BitcoinImage} alt='...'/>
      <p className='sm:mx-auto'>Check e-coins values using this app. Its an awsome app!</p>
    </section>
  )
}