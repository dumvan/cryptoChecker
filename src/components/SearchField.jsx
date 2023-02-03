import {React,useEffect,useState} from 'react'
import LoadingScreen from './LoadingScreen'
import axios from 'axios'
import List from './List'
import SearchIcon from '@mui/icons-material/Search'
import Pagination from  '@mui/material/Pagination'

const url = 'https://api.coingecko.com/api/v3/coins/markets'
const keys =['symbol','name']


export default function SearchField(){
  const [query ,setQuery] =useState('')
  const [retrievedData ,setRetrievedData] = useState([''])
  const [isLoading,setIsLoading] =useState(false)
  const [page ,setPage] =useState(1)
 
 
  const requestedData = async() =>{
    setIsLoading(!isLoading)
    await axios.get(url,
      {
        params: { 
          vs_currency:'usd',
          per_page:50,
          page:`${page}`
       },
        headers: { Accept: "application/json" }
      })
      .then(data => {
        setTimeout(setRetrievedData(data.data.filter(item => keys.some(key => item[key].toLowerCase().includes(query)))),1500)
        setIsLoading(false)  
      })
      .catch(error => console.log(error))
    } 
  useEffect(()=>{
    requestedData() 
  },[query,page])
  return(
    <section className='flex flex-col p-4 sm:items-center w-full h-full bg-slate-200'>
      
    
        <input className='outline-none drop-shadow-md rounded-2xl my-4 py-3 px-4 md:w-1/2 ' placeholder='Search' name='search' onChange={(e)=>setQuery(e.target.value)}/>   
     
      { isLoading ? <LoadingScreen/>:<div className='h-1/2 overflow-scroll'><List data={retrievedData} /></div>  }
      <div className='flex items-center justify-center py-4'>
        <Pagination count={200} onChange={(e ,value) => setPage(value)} />
      </div>
       
    </section> 
  )
}