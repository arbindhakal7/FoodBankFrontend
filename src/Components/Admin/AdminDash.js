import React, {Component} from 'react'
import NavBarAdmin from './AdminNavBar'
import jwt_decode from 'jwt-decode'
import users from '../css/images/users.png'
import FoodBanks from '../Components/FoodBanksList';
import AdminUserList from './AdminUserList'

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
                            <FoodBanks/>
                    
                        </section>
                        {/* <section class="4u"> */}
                            {/* <a href="/!#" class="image feature"></a> */}
                            {/* <img src={foodtype} alt="foodtype" /> */}
                            {/* <h3>Food Type</h3> */}
                           {/* <AvailableFood/> */}
                        {/* </section> */}

                    </div>
                </section> 
                </div>
                </div>
        )      
    }
}