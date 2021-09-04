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
            
                <div id="main" class="wrapper style1">
                <section class="container">
                        <section class="4u">   
                            <h3>Your Info</h3>
                            <p> Full Name : <i>{this.state.firstName} </i></p>
                            <p>Phone: <i>{this.state.phone}</i></p>
                            <p>Role: <i>{this.state.role}</i></p>
                            <p>Email: <i>{this.state.email}</i></p>
                            <p>Date Of Birth: <i>{this.state.dateOfBirth}</i></p>
                            <p>Gender: <i>{this.state.gender}</i></p>
                        </section>
                    
                </section> 
                </div>
                </div>
           
        )
    }
    

}
