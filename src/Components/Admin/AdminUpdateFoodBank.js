import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'
import { Redirect } from 'react-router'
import { useParams } from 'react-router-dom'
import AdminNavBar from './AdminNavBar'

export default function UpdateFoodBank(props) {
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
            FoodBankName: '',
            availableFood: '',
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


    handleSubmit = (event) => {
        if(window.confirm('Are you sure to update the current status?'))
        event.preventDefault();
		axios.put('http://localhost:3000/api/FoodBank/' + this.props.id,  this.state.config)
		.then((res) => {
			console.log(res)
		}).catch(err => console.log(err.response.data));
            
    }

	
	componentDidMount = () => {
		axios.get('http://localhost:90/api/FoodBank/' + this.state.id, this.state.config)
		.then((res) => {
			console.log(res);
			this.setState({
				FoodBankName: res.data.FoodBankName,
				availableFood: res.data.availableFood
				
				
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
                    <Label for='availableFood'>Available Food Type</Label>
                    <Input type='text' name='availableFood' id='availableFood'
                    value ={this.state.availableFood}
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


