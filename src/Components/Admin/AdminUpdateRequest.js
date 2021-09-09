import React, {Component} from 'react'
import { useParams } from 'react-router-dom'
import AdminNavBar from './AdminNavBar'

export default function UpdatedRequest(props) {
	let {id} = useParams();
	return (
		<div>
			<h1>{id}</h1>
			<UpdateForm id={id}/>
		</div>
	)

}

 class UpdateForm extends Component{
    constructor(props) {
        super(props)

        this.state = {
			id: this.props.id,
            requestName: '',
            phone: '',
            foodtype:'',
            country: '',
            district: '',
            street: '',
			date:'',
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
    handleSubmit = (event) => {
        if(window.confirm('Are you sure to update your request details?'))
        event.preventDefault();
		axios.put('http://localhost:90/api/RequestFood/' + this.props.id, this.state, this.state.config)
		.then((res) => {
			console.log(res)
		}).catch(err => console.log(err.response.data));
            
    }


	handleUpdate = () => {
		
	}
	
	componentDidMount = () => {
		axios.get('http://localhost:90/api/RequestFood/' + this.state.id, this.state.config)
		.then((res) => {
			console.log(res);
			this.setState({
				requestName: res.data.requestName,
				phone: res.data.phone,
				foodtype: res.data.foodtype,
				country: res.data.country,
				district: res.data.district,
				street: res.data.street,
				date:res.data.date
				
			})
		}).catch(err => console.log(err.response.data));
	}



    render(){
        return(
            <div>
                <AdminNavBar history = {this.props.history}/>
           
        </div>
        )
    }
    
}


