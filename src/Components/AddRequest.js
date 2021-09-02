import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'
import NavBar from './NavBar'


export default class AddRequest extends Component{
    constructor(props) {
        super(props)

        this.state = {
           
            requestName:'',
            phone:'',
            country: '',
            foodtype: '',
            district: '',
            street: '',
            date: '',
            config: {
                headers: { 'Authorization': localStorage.getItem('token') }
            }
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

                     <FormGroup>
                <Label for='foodtype'>Food Type</Label>
                <Input type='select' name='foodtype' id='foodtype'
            
                >
                    <option value=''>Select Requirement Type</option>
                    <option value='fresh'>fresh</option>
                    <option value='stored'>stored</option>
                    <option value='cooked'>cooked</option>
                    <option value='any'>any of above</option>
                </Input>
            </FormGroup>


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
               
                <FormGroup>
                    <Label for='date'>Date</Label>
                    <Input type='datetime-local' name='date' id='date'
                  
                         />
                         </FormGroup>
                  
        </FormGroup>            
                <Button block color="primary" >Submit</Button>
                <Button block color='danger' >Cancel</Button>
            </Form>
            
        </div>
        </div>
        )
    }
    
}


