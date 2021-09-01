import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'
import NavBar from './NavBar'
export default class AddRequest extends Component{


    render(){
        return(
            <div>
               <NavBar history = {this.props.history}/>
  
        </div>
        )
    }
    
}


