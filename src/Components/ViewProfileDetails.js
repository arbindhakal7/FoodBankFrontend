import React  from 'react'
import jwt_decode from 'jwt-decode'
import NavBar from './NavBar'
import axios from 'axios'

export default class ViewProfileDetails extends React.Component{
   
    constructor(props) {
        super(props)

        this.state = {
            fullname: '',
            phone:'',
            role:'',
            email: '',
            dateOfBirth: '',
            gender: '',
            config: {
                headers: { 'Authorization': localStorage.getItem('token') },
                isUpdate: false
            }
        }
    }
    
    render() {
        return(
            <div>
                <NavBar history = {this.props.history}/>
            
                              </div>
           
        )
    }
    

}
