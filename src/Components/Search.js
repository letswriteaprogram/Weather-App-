import React from 'react'
import { styled } from 'styled-components'

export default function Search(props) {
  return (

<>

<Wrapper>
// <CitySearch> 
//         <Input type="text" id="city" name="city" value={props.city} onChange={props.change} placeholder='Search City'></Input>
//         <Button onClick={props.Search}><i className="fa fa-search icon" ></i></Button>
        
// </CitySearch>
// <CordinateSearch>
<label htmlFor="cordinate"><span>Get Cordinate</span> </label>
<Button onClick={props.location}>
<i className="fa-solid fa-location-crosshairs icon" ></i>
</Button>
</CordinateSearch>

<CordinateSearchInp>
                 <Input type="text" id="city" name="lon" value={props.lon}onChange={props.change}  placeholder='Longitude'></Input>
                 <Input type="text" id="city" name="lat" value={props.lat}onChange={props.change} placeholder='Latitude'></Input> 
                 <Button onClick={props.Search}><i className="fa fa-search icon" ></i></Button>
                 
</CordinateSearchInp>

</Wrapper>
         
</>
  )
}
const Wrapper=styled.section`
width: 60%;
min-width: 350px;
margin: auto;
margin-top:50px;
padding: 20px;
background-color: rgba(0,0,0,0.1);
border-radius: 20px;
.icon{
  scale: 1.5;
}
@media (max-width: 500px) {
  width: 80%;
  min-width: 350px;
  }
`

const CitySearch=styled.section`
width: 100%;
margin: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
const CordinateSearch=styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
span{
  font-size:25px;
  margin: 20px;
  border-bottom: 2px solid black;
}
`
const CordinateSearchInp=styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

`

const Input=styled.input`
margin: 20px;
padding: 20px;
height: 40px;
background-color: rgba(0,0,0,.3);
border: none;
outline: none;
border-radius: 10px;
font-size: 25px;
::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }  
    &::placeholder {
  color:rgba(0,0,0,.4);
}
`
const Button=styled.button`
width: 40px;
height: 40px;
background: rgba(8,8,8,.8);
color: aliceblue;
padding: 5px;
outline:none;
border: none;
border-radius: 5px;
`

