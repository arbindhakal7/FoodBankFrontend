import { Component } from "react";
import axios from "axios";

class Register extends Component{

  state = {
    fullname: '',
    email: '',
    phonenumber: '',
    password: ''
    
}
onChangeRegister=(e)=>{
  this.setState({
      [e.target.name] : e.target.value
  })
}

funRegister=(e) =>{
  //prevents from dataloss
  e.preventDefault()
  //send data to our API
  const data ={
      username: this.state.username,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      password: this.state.password
  }
   axios.post("http://localhost:90/user/register", data)
}

    render(){
        return(
            <div class="main">
            <section class = "sign-up">
            <div class="signup-content">
              <div class="signup-form">
                <h2 class="form-title">Sign up</h2>
                <form method="POST" class="register-form" id="register-form">
                  <div class="form-group">
                    <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" name="name" placeholder="Full Name"
                    value = {this.state.username} onChange = {this.onChangeRegister} />
                  </div>
                  <div class="form-group">
                    <label for="email"><i class="zmdi zmdi-email"></i></label>
                    <input type="email" name="email" placeholder="Your Email" 
                    value = {this.state.email} onChange = {this.onChangeRegister}/>
                  </div>
                  <div class="form-group">
                    <label for="email"><i class="zmdi zmdi-email"></i></label>
                    <input type="number" name="phonenumber" placeholder="Phone Number" 
                    value = {this.state.phonenumber} onChange = {this.onChangeRegister}/>
                  </div>
                  <div class="form-group">
                    <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                    <input type="password" name="password" placeholder="Password"
                    value = {this.state.password} onChange = {this.onChangeRegister} />
                  </div>

                  <div class="form-group form-button">
                    <input type="submit" name="signup" class="form-submit" value="Register" onClick ={this.funRegister}/>
                  </div>
                </form>
              </div>
              <div class="signup-image">
                <figure><img src="images/signup-image.jpg" alt="sign up image"/>
                  {/* <a href="/#" class="signup-image-link">I am already member</a> */}
                </figure>
              </div>
          
            </div>
            </section>
            </div>
        )
    }
}

export default Register