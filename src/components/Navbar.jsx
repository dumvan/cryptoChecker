import React,{useRef} from 'react'
import {Link} from 'react-router-dom'
export default function Navbar(){
  const navOptions =[
    {title:'home' ,path:'/'},
    {title:'about',path:'/#about'},
    {title:'contact',path:'/#contact',}
  ]

  return(<nav className='z-50 p-4 text-white absolute flex justify-between w-full'>
    <h1 className='px-2'>cryptoChecker</h1>
    
    <ul className='flex gap-5'>
       {navOptions.map((nav,index) =>
      <Link to={nav.path} key={index}>
        <li className='cursor-pointer capitalize border-yellow-500 hover:border-b-4 duration-300 box-border'>{nav.title}</li>
      </Link>
        )}
    </ul>
  
  </nav>
  )
}