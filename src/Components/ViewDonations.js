import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios'
import NavBar from './NavBar'


export default class ViewDonations extends Component {
    constructor(props) {
        super(props)

    this.state = {
        foodname: '',
        foodtype: '',
        country: '',
        district: '',
        street: '',
        phone: '',
        date: '',
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






