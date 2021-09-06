import React, { Component } from 'react'
import Axios from 'axios'
import NavBar from './NavBar'


export default class FoodBank extends Component {

  

render() {
  return (
    <div>
      <NavBar history = {this.props.history}/>
     </div>
  )
}
}






