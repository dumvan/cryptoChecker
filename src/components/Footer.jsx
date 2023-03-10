import React from "react"
import BitcoinImage from '../assets/bitcoin2.svg'
import { HashScroll } from "react-hash-scroll"
export default function Footer(){

  return(
 <HashScroll hash='#contact'>
        
    <footer className="p-4 shadow md:px-6 md:py-8 bg-slate-800">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://drooidfolio.netlify.app" className="flex items-center mb-4 sm:mb-0">
                <img src={BitcoinImage} className="mr-3 h-8" alt="CryptoChecker Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">cryptoChecker</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="https://www.linkedin.com/in/evan-feliza-507184245/" className="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">E-mail Me!</a>
                </li>
            
                
            </ul>
        </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Evan Feliza™. All Rights Reserved.
            </span>
    </footer>
 </HashScroll>

  )
}