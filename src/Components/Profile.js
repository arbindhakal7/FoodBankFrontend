import React  from 'react'
import axios from 'axios'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import jwt_decode from 'jwt-decode'
import NavBar from './NavBar'

export default class Profile extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            UserId: '',
            fullname: '',
            phone:'',
            role:'',
            email: '',
            dateOfBirth: '',
            gender: '',
            image:'',
            config: {
                headers: { 'Authorization': localStorage.getItem('token') },
                isUpdate: false
            }
        }
    }
    componentDidMount(){
        const token = localStorage.getItem('token')
        const decoded=jwt_decode(token)
          this.setState({
            username: decoded.username,
            phone: decoded.phone,
            role: decoded.role,
            email:decoded.email ,
            dateOfBirth: decoded.dateOfBirth,
            gender: decoded.gender,
            lastDonation:decoded.lastDonation,
            lastRequest:decoded.lastRequest,
            image:decoded.image,
            UserId: decoded.id
    
            
          })
        }
    
    render() {
        return(
            <div>
                <NavBar history = {this.props.history}/>
         
            <div className='container'>
    <Form>

    <FormGroup>
    <Label for="lastName">Full Name</Label>
        <Input name='lastName' type='text' 
            />
    </FormGroup>
    <FormGroup>
    <Label for="phone">Phone</Label>
        <Input name='username' type='text' 
           />
    </FormGroup>
    <FormGroup>
    </FormGroup>
        <FormGroup>
            <Label for="email">Email</Label>
            <Input type='email' name='email' id='email'
           
                
                 />
        </FormGroup>
        <FormGroup>
            <Label for='dateOfBirth'>Date Of Birth </Label>
            <Input type='date' name='dateOfBirth' id='dateOfBirth'
            
            
            />
        </FormGroup>
        
        

        <FormGroup>
        <Label for='gender'>Gender</Label>
        <Input type='select' name= 'gender' id='gender' 
        
        >
            <option value=''>Select Gender</option>
            <option value='male'>male</option>
            <option value='female'>female</option>
            <option value='other'>other</option>
            
            
        </Input>
    </FormGroup>
        
        <Button block color="primary" onClick={this.handleSubmit}>Update</Button>
    </Form>
</div>
</div>

    )
}

}
