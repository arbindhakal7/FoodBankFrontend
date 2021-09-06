import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'
import { useParams, Redirect} from 'react-router-dom'
import NavBar from './NavBar'

export default function UpdateRequest(props) {
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
            this.props.history.push('userdashboard/viewrequest')
		}).catch(err => console.log(err.response));
            
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
            return<Redirect to ='/userdashboard/viewrequest'/>
       
        }
    }

    render(){
        return(
            <div>
                <NavBar history = {this.props.history}/>
            <div className='container'>
            <Form>
                <FormGroup>
                    <Label for="requestName">Full Name</Label>
                    <Input type='text' name='requestName' id='requestName'
                    
                     />
                </FormGroup>
                <FormGroup>
                    <Label for='phone'>Phone Number </Label>
                    <Input type='number' name='phone' id='phone'
                   
                        
                    />
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
              
                    </FormGroup>
                    <FormGroup>
                    <Label for='street'>Street</Label>
                    <Input type='text' name='street' id='street'
                   
                    />
                
                </FormGroup>
              

            <FormGroup>
            <Label for='foodtype'>Food Type</Label>
            <Input type='select' name='foodtype' id='foodtype' 
             >
            <option value='' >Select Food Type </option>
            <option value='fresh'>Fresh</option>
            <option value='stored'>Stored</option>
            <option value='cooked'>Cooked</option>
            <option value='any'>Any of the above</option>
           
            
            </Input>
                    
        </FormGroup>
    
             
                    <FormGroup>
                    <Label for='date'>Date</Label>
                    <Input type='datetime-local' name='date' id='date'
                   
                         />
                    </FormGroup>

                
                
                <Button block color="primary" >Submit</Button>
   
                <Button block color='danger' >Cancel</Button>
            </Form>
        </div>
        </div>
        )
    }
    
}


