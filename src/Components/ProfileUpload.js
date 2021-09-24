import { Component } from 'react';
import axios from 'axios';
import HomeNavBar from './HomeNav';
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
            <HomeNavBar/>
            <li>
   <input type="file" name="files" onChange={this.changeFileHandler} /></li> 
   <button onClick={this.sendData}>Send</button>
   </div>
        )
    }
    }
    export default ProfileUpload;