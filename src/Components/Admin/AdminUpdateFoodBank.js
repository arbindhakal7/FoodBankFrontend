import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'
import { Redirect } from 'react-router'
import { useParams } from 'react-router-dom'
import AdminNavBar from './AdminNavBar'

export default function UpdateFoodBank(props) {
	let { id } = useParams();
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
            FoodBankName: '',
            address: '',
            phone: '',
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
        if(window.confirm('Are you sure to update the current status?'))
        event.preventDefault();
		axios.put('http://localhost:90/api/FoodBank/' + this.props.id, this.state, this.state.config)
		.then((res) => {
			console.log(res)
		}).catch(err => console.log(err.response.data));
            
    }

    handleUpdate = () => {}
    state = {
        redirect: false,
      };
      setRedirect = () => {
        this.setState({
          redirect: true,
        });
      };
      handleCancel = () => {
        if (this.state.redirect) {
          return <Redirect to="/admindashboard/adminfoodbanks" />;
        }
      };

	
	componentDidMount = () => {
		axios.get('http://localhost:90/api/FoodBank/' + this.state.id, this.state.config)
		.then((res) => {
			console.log(res);
			this.setState({
				FoodBankName: res.data.FoodBankName,
				address: res.data.address,
                phone:res.data.phone
				
				
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
                    <Label for="FoodBankName">Food Bank Name</Label>
                    <Input type='text' name='FoodBankName' id='FoodBankName'
                    value ={this.state.FoodBankName}
                    onChange={this.handleChange}
                         />
                </FormGroup>

                <FormGroup>
                    <Label for="phone">Phone Number</Label>
                    <Input type='number' name='phone' id='phone'
                    value ={this.state.phone}
                    onChange={this.handleChange}
                         />
                </FormGroup>
                
                <FormGroup>
                    <Label for='address'>Address</Label>
                    <Input type='text' name='address' id='address'
                    value ={this.state.address}
                    onChange={this.handleChange}
                    />
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


