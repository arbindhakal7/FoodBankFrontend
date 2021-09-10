import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'
import { useParams, Redirect} from 'react-router-dom'
import AdminNavBar from '../Admin/AdminNavBar'

export default function UpdateDonationStatus(props) {
	let {id} = useParams();
	return (
		<div>
			<UpdateForm id={id}/>
		</div>
	)

}

 class UpdateForm extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          id: this.props.id,
          donorName: "",
          country: "",
          district: "",
          street: "",
          foodtype: "",
          phone: "",
          date: "",
          config: {
            headers: { Authorization: localStorage.getItem("token") },
            isUpdate: false,
          },
        };
      }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        if(window.confirm('Are you sure to update the user donation status ?'))
        event.preventDefault();
		axios.put('http://localhost:90/api/Admin/' + this.props.id + '/status', this.state, this.state.config)
		.then((res) => {
			console.log(res)
		}).catch(err => console.log(err.response.data));
            
    }


	handleUpdate = () => {
		
	}
	state ={
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect:true
        })
    }
    handleCancel = ()=> {
        if (this.state.redirect){
            return<Redirect to ='/admindashboard/adminviewdonations'/>
       
        }
    }
	componentDidMount = () => {
		axios.get('http://localhost:3000/api/DonateBlood/' + this.state.id, this.state.config)
		.then((res) => {
			console.log(res);
			this.setState({
				donorName: res.data.donorName,
				country: res.data.country,
				foodtype: res.data.foodtype,
				district: res.data.district,
				phone: res.data.phone,
				street: res.data.street,
				
			})
		}).catch(err => console.log(err.response.data));
	}

    render(){
        return(
            <div>
                <AdminNavBar history = {this.props.history}/>
            
            <div className='container'>
            <Form>

                <FormGroup>
                <Label for='foodtype'>Food Type</Label>
                <Input type='select' name='foodtype' id='foodtype'
                value ={this.state.foodtype}
                onChange={this.handleChange} >
                    <option value=''>Food Tyoe</option>
                    <option value='fresh'>Fresh</option>
                    <option value='cooked'>Cooked</option>
                    <option value='stored'>Stored</option>
                    <option value='any'>Any of the above</option>
                </Input>
            </FormGroup>
                
                <Button block color="primary" onClick={this.handleSubmit}>Submit</Button>
                {this.handleCancel()}
                <Button block color='danger' onClick={this.setRedirect}>Cancel</Button>
            </Form>
        </div>
        </div>
        )
    }
    
}


