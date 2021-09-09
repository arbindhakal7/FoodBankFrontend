import React, { Component } from 'react'
import AdminNavBar from './AdminNavBar'


export default class AdminViewUsers extends Component {

render() {
  return (
    <div>
      <AdminNavBar history = {this.props.history}/> 
      </div>
  )
}
}
