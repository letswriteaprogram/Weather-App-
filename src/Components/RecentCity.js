import React from 'react'
import { styled } from 'styled-components';

export default function RecentCity(props) {
  let  recent = props.recent;
  const uniqueAuthors = recent.reduce((accumulator, current) => {
    if (!accumulator.find((item) => item.city === current.city)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
  
  
  let unickRecint=uniqueAuthors.map(item => item)
    let data;
    if(unickRecint==null){
        data=""
    }else{
       data=unickRecint.map((recentdata,id)=>{
        
     return <p style={{textAlign:"center",cursor:"pointer"}} key={id} className='bold' onClick={()=>props.research(recentdata.lat,recentdata.lon)}>{recentdata.city}</p>
    }) 
    }
    
  return (
    <Recentcity>
       {data}
    <Button onClick={props.removeData}>Clear all</Button>
    </Recentcity>
  )
}
const Recentcity=styled.section`
position: absolute;
top: 40%;
left: 4%;
transform: translateY(-50%);
width: 100px;
min-height: 20px;
background-color: rgba(0,0,0,.1);
outline: none;
border: none;
border-radius: 4px;
@media (max-width: 900px) {
       display: none;
}
`

const Button=styled.button`
width: 100px;
height: 20px;
background-color: rgba(0,0,0,.1);
outline: none;
border: none;
`