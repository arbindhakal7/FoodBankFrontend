import { Component } from "react";
import axios from "axios";
import jwt_Decode from "jwt-decode";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import HomeNavBar from "./HomeNav";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isUser: false,
      isAdmin: false, 
    };
    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.funLogin = this.funLogin.bind(this);
  }

  onChangeLogin = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  funLogin = (e) => {
    //prevents from dataloss
    e.preventDefault();
    //send data to our API
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    login(user).then((res) => {
      if (this.state.isUser) {
        this.props.history.push(`/userdash/:id`);
      } else if (this.state.isAdmin)
        this.props.history.push(`/admindash/:id`);

    });
    e.preventDefault();
    axios
      .post("http://localhost:90/api/user/login", this.state)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        let user = jwt_Decode(res.data.token.split(' ')[1]);
        if (user.role === 'admin') this.setState({ isAdmin: true });
        else this.setState({ isUser: true });
        return res.data;
      })
      .catch((err) => console.log(err));
  };
  render() {
    if (this.state.isAdmin) {
      return <Redirect to="/admindash/:id" />;
    } else if (this.state.isUser) {
      return <Redirect to="/userdash/:id" />;
    }

    return (
      <div className="Nav">
        <HomeNavBar />
        <div className="container">
          <div className='register'>
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <img src="images/signin-image.jpg" alt="sing up image" />
                </figure>
              </div>

              <div className="signin-form">
                <h2 className="form-title">Log In</h2>
                <form method="POST" class="register-form" id="login-form">
                  <div className="form-group">
                    <label htmlFor="your_name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.onChangeLogin}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="your_pass">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChangeLogin}
                    />
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      class="form-submit"
                      value="Log in"
                      onClick={this.funLogin}
                    />
                    <p class="copyright">
                      Don't have an account?{" "}
                      <Link to="./Register">Register Here</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const login = (user) => {
  return axios
    .post("http://localhost:90/api/user/login", {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      localStorage.setItem("token", response.data.t);
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log("Invalid email or password, " + err);
    });
};
