import { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
class ProfileUpload extends Component{
    state = {
        filename: null
    }
    changeFileHandler = (e) => {
        this.setState({
            filename: e.target.files[0]
        })
    }
    sendData =async  (e) => {
        e.preventDefault();
        const con = {
            headers: { Authorization: localStorage.getItem("token") },

        }
        
        const data = new FormData();    
        // alert("clicked")
        data.append('myimage', this.state.filename)
        const result = await axios.post("http://localhost:90/api/profile/uploadimage", data,con)
            // .then((result) => {
                alert("changed")
                console.log(result)
                this.props.history.push("/userdashboard/viewprofiledetails");

            // })
     
            // .catch()
    }
    render(){
        return(
            <div>
           <NavBar history={this.props.history} />
        <div className = "class" >

       <li>
   <input type="file" name="files" onChange={this.changeFileHandler} /></li> 
   <br/>
   <button className="Primary" onClick={this.sendData}>Send</button>
        </div>
   </div>
        )
    }
    }
    export default ProfileUpload;