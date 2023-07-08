import React from 'react'

export default function RecentCity(props) {
    let data;
    if(props.recent==null){
        data=""
    }else{
       data=props.recent.map((recentdata,id)=>{
        
     return <li key={id} className='bold' onClick={()=>props.research(recentdata.lat,recentdata.lon)}>{recentdata.city}</li>
    }) 
    }
    
  return (
    <></>
    // <div className='aside'>
    //     <ul>
    //        {data}
    //     </ul>
    // </div>
  )
}
