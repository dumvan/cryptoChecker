import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './routes/Home'

import CoinInfo from './routes/CoinInfo/CoinInfo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {

  
  return (
     <BrowserRouter>
        <Navbar/>
        <Hero/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/coins/:coin' element={<CoinInfo/>}/>
            <Route path='*' element={<section className='flex w-full h-screen'>Page not Found...</section>} />
        </Routes>
        <Footer/>
     </BrowserRouter>
     
    
  )
}

export default App
