import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'
import axios from "axios"
import RecentCity from './RecentCity';


export default class Weather extends Component {
  constructor(props){
    super(props);
    this.state={
      lat:"",
      lon:"",
      city:"",
      searchByCity:false,
      weatherData:null, 
      Showdata:false,
      recent:[],
    }
  }
      changeHandler=(event)=>{
          const name= (event.target.name)
          if (name ==="city") {
            this.setState({city:event.target.value,searchByCity:true})
          } else if (name ==="lat"){
            this.setState({lat:event.target.value,searchByCity:false})
          } else if (name==="lon"){
            this.setState({lon:event.target.value,searchByCity:false})
          } 
      }
      addDataToRecent=()=>{
        let recent=this.state.recent;
        recent.push({
          lat:this.state.lat,
          lon:this.state.lon,
          city:this.state.city,
        })
        this.setState({recent},()=>{
          window.localStorage.setItem("recent",JSON.stringify(this.state.recent))
        } ); 
      }
      removeAllDataToREcent=()=>{
        this.setState({recent:[]},()=>{
          window.localStorage.clear();
        } ); 
      }
      ResearchHandler=(lat,lon)=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=650e1c4c5e2e4e0ea9fd4b9afae737ea`)
                              .then((SResults)=>{
                                this.setState({city:SResults.data.name,weatherData:SResults.data,Showdata:true,lon:lon,lat:lat,
                                  })
                              }).catch((error)=>{
                                console.log(error)
                              }) ;
      }
      componentDidMount(){
        let data = window.localStorage.getItem("recent");
        data=JSON.parse(data)
        let recent=(data===null)?[]:data;
        this.setState({recent})
      }
      locationHandler=()=>{
        this.setState({
          lat:"",
          lon:"",
          weatherData:null,
          city:"",
          Showdata:true,
        })
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(
            (Result)=>{
                setTimeout(() => {
                this.setState({lat:Result.coords.latitude,lon:Result.coords.longitude}); 
                  setTimeout(() => {
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=650e1c4c5e2e4e0ea9fd4b9afae737ea`)
                    .then((Results)=>{
                      this.setState({city:Results.data.name,weatherData:Results.data,Showdata:true,
                        },()=>{
                        this.addDataToRecent();
                      })
                    }).catch((error)=>{
                      console.log(error)
                    }) ;
                }, 1);
                }, 500);  
            },
            (error)=>{
              console.log(error)
            })
          }
          else{
            console.log("your browser not support Location")
          }
        }
        SearchHandler=()=>{
                  if (this.state.searchByCity===true) {
                    setTimeout(() => {
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=650e1c4c5e2e4e0ea9fd4b9afae737ea`)
                              .then((Results)=>{
                                this.setState({city:Results.data.name,weatherData:Results.data,lon:Results.data.coord.lon,lat:Results.data.coord.lat},()=>{
                                  this.addDataToRecent()
                                })
                              }).catch((error)=>{
                                console.log(error)
                              }) ;
                    }, 500); 
                  } else {
                    setTimeout(() => {
                              axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=650e1c4c5e2e4e0ea9fd4b9afae737ea`)
                              .then((SResults)=>{
                                this.setState({city:SResults.data.name,weatherData:SResults.data,Showdata:true,},()=>{
                                  this.addDataToRecent()
                                } )
                              }).catch((error)=>{
                                console.log(error)
                              }) ;
                            }, 500); 
                  }       
          }


  render() {
    return (
        <main>
        <div className="container">
            <div className="weather-container">
                <div className="box">
                    <Search 
                    lat={this.state.lat}
                    lon={this.state.lon}
                    city={this.state.city}
                    weatherdata={this.state.weatherData}
                    
                    change={this.changeHandler}
                    location={this.locationHandler}
                    Search={this.SearchHandler}
                    ></Search>
                    <RecentCity recent={this.state.recent} research={this.ResearchHandler} removeData={this.removeAllDataToREcent}></RecentCity>
                    <Result Showdata={this.state.Showdata} weatherData={this.state.weatherData}></Result>                                          
                </div>    
            </div>
        </div>
    </main>
    )
  }
}


