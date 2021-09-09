import React, {Component} from 'react'
import { useParams } from 'react-router-dom'
import AdminNavBar from './AdminNavBar'

export default function UpdatedRequest(props) {
	let {id} = useParams();
	return (
		<div>
			<h1>{id}</h1>
			<UpdateForm id={id}/>
		</div>
	)

}

 class UpdateForm extends Component{

    render(){
        return(
            <div>
                <AdminNavBar history = {this.props.history}/>
           
        </div>
        )
    }
    
}


