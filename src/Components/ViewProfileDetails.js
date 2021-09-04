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

    componentDidMount= ()=> {
        const token = localStorage.getItem('token')
        const decoded=jwt_decode(token)
         axios.get('http://localhost:90/api/profile/' + decoded.id ,  this.state.config)
         .then((res)=> {
             console.log(res.data)
             this.setState({
                            fullname: res.data.fullname,
                            phone: res.data.phone,
                            role: res.data.role,
                            email:res.data.email ,
                            dateOfBirth: res.data.dateOfBirth,
                            gender: res.data.gender,
                            image:res.data.image,
             })
    
         })
            
        }

    
    render() {
        return(
            <div>
                <NavBar history = {this.props.history}/>
            
                <div id="main" class="wrapper style1">
                <section class="container">
                        <section class="4u">   
                            <h3>Your Info</h3>
                            <p> Full Name : <i>{this.state.fullname} </i></p>
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
