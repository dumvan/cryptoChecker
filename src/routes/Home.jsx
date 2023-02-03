import React from 'react '
import SearchField from '../components/SearchField'
import About from '../components/About'

export default function Home(){

  return(<>

      <section className='w-full h-screen'> 
          <About/>       
          <SearchField/>  
      </section>
  </>)
}