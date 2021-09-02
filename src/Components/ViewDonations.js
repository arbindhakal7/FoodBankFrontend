import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios'
import NavBar from './NavBar'


export default class ViewDonations extends Component {
    constructor(props) {
        super(props)

    this.state = {
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
      <div className='container'>
         
         <div className="py-4">
        <h1>Donation List</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Food Type</th>
              <th scope="col">Date</th>
        
              <th>Action</th>
            </tr>
          </thead>
      
      </table>
      </div>
      </div>
      </div>
  )
}
}






