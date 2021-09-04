
import React, {Component} from 'react'
import NavBar from './NavBar'
import jwt_decode from 'jwt-decode'
import foodbanks from '../css/images/FoodBanks.jpg'
import { Link } from 'react-router-dom';
import users from '../css/images/users.png';

export default class UserDashboard extends Component{

    constructor(props) {
        super(props)
        this.state = {
            profileId:'',
            username: '',
            phone:'',
            role:'',
            email: '',
            dateOfBirth: '',
            gender: '',
            lastDonation:'',
            lastRequest:'',
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
        return(
            <div>
                <NavBar history = {this.props.history}/>
               
            </div>
        )
    }

    
}


