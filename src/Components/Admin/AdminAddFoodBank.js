import React, {Component} from 'react'
import AdminNavBar from './AdminNavBar'

export default class AdminAddFoodBank extends Component{

    
   constructor(props) {
    super(props)
    this.state = {
        FoodBankName: '',
        availableFood:'',
        config: {
            headers: { 'Authorization': localStorage.getItem('token') }
        }
    }
}
handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
        
    }, ( ) => console.log(this.state))
}
handleSubmit = (event) => {
    event.preventDefault();
    if(window.confirm('Are you sure to add this blood bank on the list?'))
    axios.post('http://localhost:90/api/FoodBank', this.state,this.state.config)
        .then((res) => {
            this.props.history.push('/admindashboard/adminfoodbanks')
        }).catch(err => console.log(err.response.data))
}


    render(){
        return(  
            <div>
            <AdminNavBar history = {this.props.history} />

            </div>
        )
    }
    
}

