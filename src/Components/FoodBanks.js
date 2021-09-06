import React, { Component } from 'react'
import Axios from 'axios'
import NavBar from './NavBar'


export default class FoodBank extends Component {

    constructor(props){

        super(props)
    
        this.state = {
          foodbanks: [],
          foodbankId:'',
          FoodBankName: '',
          availableFood:'',
            config: {
                headers: { 'Authorization': localStorage.getItem('token') }
            }
        }
      }

render() {
  return (
    <div>
      <NavBar history = {this.props.history}/>
     </div>
  )
}
}






