import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'
import foodbanks from '../css/images/FoodBanks.jpg'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
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
    
    componentDidMount(){
    const token = localStorage.getItem('token')
    const decoded=jwt_decode(token)
      this.setState({
        username: decoded.username,
        phone: decoded.phone,
        role: decoded.role,
        email:decoded.email ,
        dateOfBirth: decoded.dateOfBirth,
        gender: decoded.gender,
        lastDonation:decoded.lastDonation,
        lastRequest:decoded.lastRequest,
        image:decoded.image,
        UserId: decoded.id

        
      })
    }

    
    render() {
        return(
            <div>
                <NavBar history = {this.props.history}/>
               
            </div>
        )
    }

    
}


