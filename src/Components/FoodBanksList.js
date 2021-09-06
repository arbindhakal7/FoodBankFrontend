import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'

export default class BloodBanks extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          foodbanks: [],
          foodbankId: "",
          FoodBankName: "",
          availableFood: "",
          config: {
            headers: { Authorization: localStorage.getItem("token") },
          },
        };
      }

      

render() {
  return (
      <div className='container'>
  
      </div>
  )
}
}






