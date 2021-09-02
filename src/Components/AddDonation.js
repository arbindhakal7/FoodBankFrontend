import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'
import NavBar from './NavBar'
import jwt_decode from 'jwt-decode'

export default class AddDonation extends Component {

    constructor(props) {
        super(props)
        

        this.state = {
            foodname: '',
            foodtype: '',
            country: '',
            district: '',
            street: '',
            phone: '',
            date: '',
            config: {
                headers: { 'Authorization': localStorage.getItem('token') }
            }
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        }, () => console.log(this.state))
    }
    componentDidMount = () => {
        const token = localStorage.getItem('token')
        const decoded = jwt_decode(token)
        axios.get('http://localhost:90/api/profile/' + decoded.id, this.state.config)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    foodtype: res.data.foodtype,
                })

            })
    }
    handleSubmit = (event) => {
        if (window.confirm('Are you ready to donate Food?'))
            event.preventDefault();
        axios.post('http://localhost:90/api/DonateFood', this.state, this.state.config)
            .then((res) => {
                console.log(res)
                this.props.history.push('/userdash/adddonation')
            }).catch(err => console.log(err.response.data))

    }
    render() {

        return (
            <div>
                <NavBar history={this.props.history} />

                <div className='container'>
                    <FormGroup>
                        <Label for='foodtype'>Food Type</Label>
                        <Input type='select' name='foodtype' id='foodtype'
                            value={this.state.foodtype}
                            onChange={this.handleChange} >
                            <option value='' >Select Food Type </option>
                            <option value='stored'>Stored</option>
                            <option value='fresh'>Fresh</option>
                            <option value = 'cooked'>Cooked</option>
                            <option value='any'>Any of the above</option>

                        </Input>
                    </FormGroup>

                    
                    <FormGroup>
                            <Label for='foodname'>Food Name</Label>
                            <Input type='text' name='foodname' id='foodname'
                                value={this.state.foodname}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        
                    
                        <FormGroup>
                            <Label for='country'>Country</Label>
                            <Input type='text' name='country' id='country'
                                value={this.state.country}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
 
                        <FormGroup>
                            <Label for='district'>District</Label>
                            <Input type='text' name='district' id='district'
                                value={this.state.district}
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for='street'>Street</Label>
                            <Input type='text' name='street' id='street'
                                value={this.state.street}
                                onChange={this.handleChange}
                            />

                        </FormGroup>

                        <FormGroup>
                            <Label for='phone'>Phone Number</Label>
                            <Input type='number' name='phone' id='phone'
                                value={this.state.phone}
                                onChange={this.handleChange}
                            />

                        </FormGroup>

                        <FormGroup>
                    <Label for='date'>Date</Label>
                    <Input type='datetime-local' name='date' id='date'
                     value ={this.state.date}
                     onChange={this.handleChange}
                         />
                    </FormGroup>
                        
                        <Button block color="primary" onClick={this.handleSubmit}>Submit</Button>
                        <Button block color='danger' onClick={() => this.props.history.push('/userdash/nav')}>Cancel</Button>
                   
                </div>
            </div>
        )
    }

}


