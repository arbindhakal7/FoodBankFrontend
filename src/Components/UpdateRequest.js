import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'
import { useParams, Redirect} from 'react-router-dom'
import NavBar from '../NavBar'


class UpdateDonation extends Component{


    render(){
        return(
            <div>
                <NavBar history = {this.props.history}/>
            
        </div>
        )
    }
    
}


