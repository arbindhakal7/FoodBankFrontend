import React  from 'react'
import jwt_decode from 'jwt-decode'
import NavBar from './NavBar'
import axios from 'axios'

export default class ViewProfileDetails extends React.Component{
   
   
    
    render() {
        return(
            <div>
                <NavBar history = {this.props.history}/>
            
                              </div>
           
        )
    }
    

}
