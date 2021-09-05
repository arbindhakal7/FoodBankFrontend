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
