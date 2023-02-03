import {React} from 'react'
import {HashScroll} from 'react-hash-scroll'
export default function About(){


  
  return(
    <>
    <HashScroll hash='#about'>
      <section  className='p-4 bg-slate-100 drop-shadow-md'>
        <h1 className='Uppercase text-4xl border-b-2 border-slate-800 mb-4'>About</h1>
        <p>This is an app made for browsing e-coins and its values. Information was requested through an api call from <a href='https://www.coingecko.com/en/api'>Coingecko</a>.</p>
      </section>
    </HashScroll>
   
    </>
  )
}