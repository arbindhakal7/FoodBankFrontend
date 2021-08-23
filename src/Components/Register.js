import { Component } from "react";

class Register extends Component{
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
                    <input type="text" name="name" placeholder="Full Name" />
                  </div>
                  <div class="form-group">
                    <label for="email"><i class="zmdi zmdi-email"></i></label>
                    <input type="email" name="email" placeholder="Your Email" />
                  </div>
                  <div class="form-group">
                    <label for="email"><i class="zmdi zmdi-email"></i></label>
                    <input type="number" name="phonenumber" placeholder="Phone Number" />
                  </div>
                  <div class="form-group">
                    <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                    <input type="password" name="password" placeholder="Password" />
                  </div>
               
                  <div class="form-group">
                    <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                    <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="/#" class="term-service">Terms of service</a></label>
                  </div>
                  <div class="form-group form-button">
                    <input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
                  </div>
                </form>
              </div>
              <div class="signup-image">
                <figure><img src="images/signup-image.jpg" alt="sign up image"/>
                  <a href="/#" class="signup-image-link">I am already member</a>
                </figure>
              </div>
          
            </div>
            </section>
            </div>
        )
    }
}

export default Register