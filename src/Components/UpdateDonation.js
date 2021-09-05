import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'
import { useParams, Redirect } from 'react-router-dom'
import NavBar from './NavBar'

export default function UpdatedDonation(props) {
	let {id} = useParams();
	return (
        
		<div>
           
			<UpdateForm id={id}/>
            
		</div>
	)

}

 export class UpdateForm extends Component{
    constructor(props) {
        super(props)

        this.state = {
			id: this.props.id,
            country: '',
            district: '',
            street: '',
            foodtype:'',
            phone: '',
            config: {
                headers: { 'Authorization': localStorage.getItem('token') },
                isUpdate: false
            }
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        if(window.confirm('Are you sure to update your donation details?'))
        event.preventDefault();
		axios.put('http://localhost:90/api/DonateFood/' + this.props.id, this.state, this.state.config)
		.then((res) => {
            
            console.log(res)
            
		}).catch(err => console.log(err.response.data));
            
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
            return <Redirect to ='/userdashboard/viewdonation'/>
       
        }
    }

    componentDidMount = () => {
		axios.get('http://localhost:90/api/DonateFood/' + this.state.id, this.state.config)
		.then((res) => {
			console.log(res);
			this.setState({
                foodtype: res.data.foodtype,
				country: res.data.country,
				phone: res.data.phone,
				district: res.data.district,
				street: res.data.street,
				
			})
		}).catch(err => console.log(err.response.data));
	}


    render(){
        return(
            <div>
                
                <NavBar history = {this.props.history}/>
                <div className='container'>
            <Form>
                <FormGroup>
                    <Label for="phone">Phone Number</Label>
                    <Input type='number' name='phone' id='phone'
                   
                         />
                </FormGroup>
                <FormGroup>
            <Label for='foodtype'>Food Type</Label>
            <Input type='select' name='foodtype' id='foodtype' 
            >
            <option value='' >Select Food Type</option>
            <option value='Fresh'>Fresh</option>
            <option value='Stored'>Stored</option>
            <option value='Cooked'>Cooked</option>
            <option value='any'>Any of the above</option>
            </Input>
            </FormGroup>
                <FormGroup>
                    <Label for='country'>Country</Label>
                    <Input type='text' name='country' id='country'
                
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for='district'>District</Label>
                    <Input type='text' name='district' id='district'
                    
                    />
                </FormGroup>
               
                    <FormGroup>
                    <Label for='street'>Street</Label>
                    <Input type='text' name='street' id='street'
                    
                    />
                
                </FormGroup>
                </Form>
        </div>
        )
    }
    
}




