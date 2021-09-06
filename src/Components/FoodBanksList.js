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

      componentDidMount() {
        Axios.get("http://localhost:90/api/FoodBank", this.state.config)
          .then((res) => {
            console.log(res.data);
            this.setState({
              foodbanks: res.data,
            });
          })
          .catch((err) => console.log(err.response));
      }
      

render() {
  return (
      <div className='container'>
  
      </div>
  )
}
}






