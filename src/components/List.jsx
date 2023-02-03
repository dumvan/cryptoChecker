import React from "react"
import {useNavigate} from 'react-router-dom'


export default function List({data}){

 const navigate =useNavigate()
 
 return(<>
    <table className="w-full table-fixed">
      <thead>
          <tr className="hidden z-10 border divide-x sticky top-0 bg-slate-400 uppercase sm:table-row ">
            <th className="p-1" >logo</th>
            <th className="p-1">symbol</th>
            <th className="p-1">name</th>
            <th className="p-1">price</th>
            <th className="p-1">last updated</th>
          </tr>

      </thead>
  
    
      <tbody>
          {data && data.map((item,index) =>
              <tr key={index} className="grid-auto-fit-xs grid drop-shadow-lg sm:table-row text-center sm:border-y shadow-sm hover:bg-gray-300 duration-100" 
              onClick={() => 
                {navigate(`coins/${item.id}`)
              
                }} 
              >
                  <td className="p-2 mx-auto"><img className=" w-10 max-w-full rounded-full h-auto mx-auto " src={item.image} alt='...'/></td>
                  <td className="uppercase p-1">{item.symbol}</td>
                  <td className="p-1">{item.name}</td>
                  <td className="p-1">${item.current_price}</td>
                  <td className="p-1">{item.last_updated}</td>
              </tr>
            
            )}
      </tbody>
     
    </table>
  
  </>)
}