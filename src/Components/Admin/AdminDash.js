import React, {Component} from 'react'
import NavBarAdmin from './AdminNavBar'
import jwt_decode from 'jwt-decode'
import AdminUserList from './AdminUserList'
import users from "../images/users.png"
import welcome from "../images/welcome.PNG"
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
                <div>
                <section class="container">
                    <header class="major">
                        <h2><img src = {welcome} alt = "welcome"/> {this.state.fullname} </h2>
                        <span class="byline">This is your Admin Dashboard</span>
                    </header>
                    <div>
                        <section class="4u">                                  
                            <a href="!#" class="image feature"></a>
                             <img src={users} alt="Users" />
                            
                            <h3>&nbsp;&nbsp;Users List </h3>
                            <AdminUserList/>
                                          
                            <a href="/!#" class="image feature"></a>
                            <AdminFoodBankList/>
                                        
                            <a href="/!#" class="image feature"></a>
                            <h3> &nbsp;&nbsp;Contact Messages</h3>
                           <Message/>
                        </section>

                    </div>
                </section> 
                </div>
                </div>
        )      
    }
}
