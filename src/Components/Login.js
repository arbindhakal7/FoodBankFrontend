import { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import HomeNavBar from "./HomeNav";

export default class Login extends Component{
   constructor(props){
   super(props)
    this.state={
        email: "",
        password: "",
        isBasic: false,
        isAdmin: false,
    }
    this.onChangeLogin = this.onChangeLogin.bind(this)
    this.funLogin = this.funLogin.bind(this)
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
         axios.post("http://localhost:90/api/user/login", data)
         .then((res) => {
            console.log(res);
            localStorage.setItem('token',res.data.token);
            let user = jwtDecode(res.data.token.split(' ')[1]);
            if (user.role === 'admin') this.setState({ isAdmin: true })
            else this.setState({ isBasic: true })
            return res.data;
        }).catch(err => console.log(err));
}
    render(){
        if (this.state.isAdmin) {
            return <Redirect to='/admindash/:id' />
        } else if (this.state.isBasic) {
            return <Redirect to='/userdash/:id' />
        }
        return(
        
            <div className = "Nav">
            <HomeNavBar/>
        
            <div class="container-fluid">
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
                                <p class="copyright">Don't have an account? <Link to='./Register' >Register Here</Link></p>

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
      .post('http://localhost:90/api/user/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        localStorage.setItem('token', response.data.t)
        console.log(response)
        return response.data
      })
      .catch(err => {
        console.log('Invalid email or password, ' + err)
      })
  }

