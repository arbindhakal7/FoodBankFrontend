import React, {Component} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import AdminNavBar from './AdminNavBar'


export default function AdminUserDetails(props) {
	let {id} = useParams();
	return (
		<div>
			<UpdateForm id={id}/>
		</div>
	)

}

 class UpdateForm extends Component{
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            fullname:'',
            phone:'',
            address:'',
            role:'',
            email: '',
            dateOfBirth: '',
            gender: '',
            image: '',
            config: {
                headers: { 'Authorization': localStorage.getItem('token') }
            }
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
	componentDidMount = () => {
		axios.get('http://localhost:90/api/Admin/' +  this.state.id, this.state.config)
		.then((res) => {
			console.log(res);
			this.setState({
				fullname: res.data.fullname,
				phone: res.data.phone,
				role: res.data.role,
				email: res.data.email,
				dateOfBirth: res.data.dateOfBirth,
				gender:res.data.gender,
				
			})
		}).catch(err => console.log(err.response.data));
	}

    render(){
        return(
            <div>
                <AdminNavBar history = {this.props.history}/>
            
            <div id="main" class="wrapper style1">
            <section class="container">
            <section class="4u">   
                            <h3>User Info</h3>
                            <p>Full Name: <i>{this.state.fullname}</i></p>
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


