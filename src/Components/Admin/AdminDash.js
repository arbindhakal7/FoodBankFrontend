import React, {Component} from 'react'
import NavBarAdmin from './AdminNavBar'
import jwt_decode from 'jwt-decode'
import AdminUserList from './AdminUserList'
import users from "../images/users.png"
import contact from "../images/contact.png"
import foodbanks from '../images/FoodBanks.jpg'
import AdminFoodBankList from './AdminFoodBankList'
import Message from './Messages'

export default class AdminDashboard extends Component{

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
                headers: { 'Authorization': localStorage.getItem('token') }
            }
        }
    }
    componentDidMount(){
    const token = localStorage.getItem('token')
    const decoded=jwt_decode(token)
      this.setState({
        fullname: decoded.fullname,
        phone: decoded.phone,
        role: decoded.role,
        email:decoded.email ,
        dateOfBirth: decoded.dateOfBirth,
        gender: decoded.gender,
        image:decoded.image,
        UserId: decoded.id,
      })
    }

    render() {
        return(
            <div>
                <NavBarAdmin history = {this.props.history}/>
                <div id="main" class="wrapper style1">
                <section class="container">
                    <header class="major">
                        <h2>Hello : {this.state.fullname} </h2>
                        <span class="byline">Welcome to Admin Dashboard</span>
                    </header>
                    <div>
                        <section class="4u">                                  
                            <a href="!#" class="image feature"></a>
                            <img src={users} alt="Users" />
                            <h3>Users List </h3>
                            <AdminUserList/>
                        </section>

                        <section class="4u">                            
                            <a href="/!#" class="image feature"></a>
                            <img src={foodbanks} alt="foodbanks" />
                            <h3>Food Bank</h3>
                            <AdminFoodBankList/>
                    
                        </section>
                        <section class="4u">
                            <a href="/!#" class="image feature"></a>
                            <img src={contact} alt="contact" />
                            <h3>Contact Messages</h3>
                           <Message/>
                        </section>

                    </div>
                </section> 
                </div>
                </div>
        )      
    }
}
