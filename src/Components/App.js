import React, { Component } from 'react'
import Weather from './Weather';
import { styled } from 'styled-components';


export class App extends Component {
  render() {
    return (
      <Wrap>
        <Weather/>
      </Wrap>
 
    )
  }
}
const Wrap=styled.section`


`

export default App;
