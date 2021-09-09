import React, {Component} from 'react'
import AdminNavBar from './AdminNavBar'

export default class AdminAddFoodBank extends Component{
    render(){
        return(  
            <div>
            <AdminNavBar history = {this.props.history} />

            </div>
        )
    }
    
}

