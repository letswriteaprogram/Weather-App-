import React from "react";
import Loder from "./Loder";
import { styled } from "styled-components";
import { CiTempHigh } from "react-icons/ci";

export default function Result(props) {
  const { weatherData: data } = props;
  function ktoc(k) {
    return (k - 273.15).toFixed(2);
  }
  function getThedate(s) {
    const d = new Date(s * 1000);
    return d.toLocaleString();
  }
  
  let ShowData;

  if (data == null) {
    if (props.Showdata === false) {
      ShowData = "";
    } else {
      ShowData = <Loder />;
    }
  } else {
    ShowData = (
      <WeatherResult>
        <Figure>
          {data?.weather[0].icon ? (
            <>
              <img
                src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                alt="Trulli"
              />
              <figcaption>{data?.name}</figcaption>
            </>
          ) : (
            ""
          )}{" "}
        </Figure>

        <Temp>
          <CiTempHigh className="icon"/>
          <p>({data?.main.feels_like ? ktoc(data?.main.feels_like) : ""} °C){" "}
          {data?.weather[0].description}</p>
        </Temp>

        <Table>
        <tbody>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>Max Temp</td>
            <td> {data?.main.temp_min ? <>{ktoc(data?.main.temp_min)} °C </> : ""}</td>
          </tr>
          <tr>
            <td>Min Temp</td>
            <td>{data?.main.temp_max ? <>{ktoc(data?.main.temp_max)} °C </> : ""}</td>
          </tr>
          <tr>
            <td>Sun Rise</td>
            <td>{data?.sys.sunrise ? <>{getThedate(data?.sys.sunrise)}</> : ""}</td>
          </tr>
          <tr>
            <td>Sun Set</td>
            <td>{data?.sys.sunset ? <>{getThedate(data?.sys.sunset)}</> : ""}</td>
          </tr>
          </tbody>
        </Table>
      </WeatherResult>
    );
  }
  return <>{ShowData}</>;
}
const WeatherResult = styled.section`
  width: 60%;
  min-width: 350px;
  margin: 40px auto;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  .icon{
    font-size:50px;
    color:white;
  }
  p{
    font-size: 25px;
    color: white;
  }
`;
const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  img {
    width: 150px;
  }
  figcaption {
    color: white;
    font-size: 35px;
    font-weight: bold;
  }
`;
const Temp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Table = styled.table`
  width: 100%;
  text-align: center;
  td{
    font-size: 25px;
    font-weight: 400;
    color: white;
    height: 20px;
    padding: 20px;
  }
`;
