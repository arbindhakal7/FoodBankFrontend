import React, {Component} from 'react'

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
                </div>
        )      
    }
}
