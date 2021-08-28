import { Component } from "react";
import axios from "axios";
import HomeNavBar from "../HomeNav";

class Login extends Component{
    state={
        email: "",
        password: ""
    }

    onChangeLogin=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    funLogin=(e) =>{
        //prevents from dataloss
        e.preventDefault()
        //send data to our API
        const data ={
            email: this.state.email,
            password: this.state.password
        }
        login(data).then(res => {
            if (res) {
              this.props.history.push(`/userdash/:id`)
            }
          })
          e.preventDefault()
         axios.post("http://localhost:90/user/login", data)
         .then((response)=>{
             console.log(response.data.t)
             // saves the token so that you can get it anywhere in the website
             localStorage.setItem('token', response.data.t)
         })
         .catch((err)=>{
             console.log(err.response)
         })
    }
    render(){
        return(
            <div className = "Nav">
            <HomeNavBar/>
        
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src="images/signin-image.jpg" alt="sing up image"/></figure>
                       </div>

                    <div class="signin-form">
                        <h2 class="form-title">Log In</h2>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="email" name="email" placeholder="Email"
                                value = {this.state.email} onChange = {this.onChangeLogin}/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" placeholder="Password"
                                value = {this.state.password} onChange = {this.onChangeLogin}/>
                            </div>
                            
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" onClick ={this.funLogin}/>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
</div>

    
        )
    }
}

const login = user => {
    return axios
      .post('http://localhost:90/user/login', {
        email: user.email,
        password: user.password
      })
      .then(res => {
        localStorage.setItem('token', res.data.t)
        console.log(res)
        return res.data
      })
      .catch(err => {
        console.log('Invalid username and password, ' + err)
      })
  }

export default Login