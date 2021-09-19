import React, {Component} from 'react'
import styled from 'styled-components'

const Block = styled.div`
  background-color : grey; 
`

export default class App extends Component {
  render() { 
    return ( 
      <Block>
        <h1>Hi!</h1>
      </Block>
    )
  }
}
