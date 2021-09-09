import React, {Component} from 'react'

export default class AdminDashboard extends Component{
    render() {
        return(
            <div>
                <NavBarAdmin history = {this.props.history}/>
                </div>
        )      
    }
}
