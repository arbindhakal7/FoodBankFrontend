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

      componentDidMount(){
        Axios.get('http://localhost:90/api/FoodBank', this.state.config)
        .then((res)=> {
          console.log(res.data)
          this.setState({
              foodbanks: res.data
          })
        }).catch(err => console.log(err.response));
      }

      

render() {
  return (
    <div>
      <NavBar history = {this.props.history}/>
     </div>
  )
}
}






