import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios  from 'axios'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import parse from 'html-react-parser'
import LoadingScreen from '../../components/LoadingScreen'
import SearchSvg from '../../assets/search.svg'

const url = 'https://api.coingecko.com/api/v3/coins/'


export default function CoinInfo(){
  
  const {coin} = useParams()
  const [coinInfo, setCoinInfo] =useState()
  const [isLoading ,setIsLoading] =useState(false)
  
  const requestInfo = async (e) => {
    setIsLoading(!isLoading)
      await axios.get(url+`${coin}`,{headers: { Accept: "application/json" }})
        .then(data => {
          setCoinInfo(data.data)
          setIsLoading(false)
        })
        .catch(error => console.log(error))
        
      }

  useEffect(()=>{
    requestInfo()
  },[coin])
  
  
  return(<>
    <section className='antialiased w-full min-h-screen bg-gradient-to-br text-black from-slate-200 to-slate-300 p-4'>
        {isLoading ? <LoadingScreen/>:
        <div className=' h-full'>
          {coinInfo &&
          <div className='flex flex-col m-auto ' >
            <div className='flex flex-wrap gap-2 items-center'>
              <img className='h-auto w-20 sm:w-10 rounded-full shadow-2xl' src={coinInfo.image?.small} alt='..'/>
              <h1 className='text-4xl'>{coinInfo.name}</h1>
              <p className='my-auto uppercase'>({coinInfo.symbol})</p>
              <p className='bg-gradient-to-b from-green-300 to-green-500 rounded-md p-1 drop-shadow-lg'><span>Rank: </span>{coinInfo.market_cap_rank}</p>
            </div>
            <div className='py-1 flex items-center flex-wrap'>
              <p className=' text-4xl sm:text-6xl font-semibold'>{new Intl.NumberFormat('en-IN',{style: 'currency', currency:'USD'}).format(coinInfo.market_data?.current_price?.usd)}</p>
              <h3 className={`text-xl ${coinInfo.market_data?.market_cap_change_percentage_24h < 0 ? 'text-red-500':'text-green-500'}`}>
              {coinInfo.market_data?.market_cap_change_percentage_24h < 0 ?
                  <span><ArrowDropDownIcon/>{coinInfo.market_data?.market_cap_change_percentage_24h.toFixed(1).replace('-','')}%</span>
                  :<span><ArrowDropUpIcon/>{coinInfo.market_data?.market_cap_change_percentage_24h.toFixed(1).replace('-','')}%</span>}
              </h3>
            </div>
          
          
          </div>
          }

        {coinInfo && 
        <div>
            <ul  className='prose-li:py-2 py-4 first-letter:flex flex-col divide-y divide-slate-900 '>
              <li className='flex items-center justify-between'>
                <span className='font-medium  capitalize'>market cap</span>
                <span className=''>{new Intl.NumberFormat('en-US',{style: 'currency', currency:'usd'}).format(coinInfo.market_data?.market_cap.usd)}</span>
              </li>
              <li className='flex items-center justify-between'>
                <span className=' font-medium capitalize'>circulating supply</span>
                <span >{coinInfo.market_data?.circulating_supply}</span>
              </li>
              <li className='flex items-center justify-between'>
                <span className='capitalize  font-medium '>total supply</span>
                <span>{coinInfo.market_data?.total_supply}</span>
              </li>
            </ul>
        </div>}

        {/*===========Discription_Section============================*/}
        {coinInfo && 
        <div  className=' border border-slate-900 rounded-lg p-4 prose-h1:font-normal  prose-h1:text-3xl prose-a:rounded-md prose-a:px-1 prose-a:no-underline prose-p:text-justify prose-a:bg-slate-400'>
          <h1 className='py-2'>What is <span className='text-yellow-600'>{coinInfo.name}</span>?</h1>
          <p >
            {parse(coinInfo.description?.uk)}
          </p>
        </div>}
      
        </div>
        }
      <img className='my-20 h-auto w-80 mx-auto' src={SearchSvg} alt='...'/>
    </section>
  </>)}