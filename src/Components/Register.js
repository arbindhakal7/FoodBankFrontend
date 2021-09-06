import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeNavBar from "./HomeNav";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      phone: "",
      password: "",
    };
  }
  onChangeRegister = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  funRegister = (e) => {
    //prevents from dataloss
    e.preventDefault();
    //send data to our API

    axios
      .post("http://localhost:90/api/user/register", this.state)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => console.log(err.response.data));
  };

  render() {
    return (
      <div className="Nav">
        <HomeNavBar />
        <div class="main">
          <section class="sign-up">
            <div class="signup-content">
              <div class="signup-form">
                <h2 class="form-title">Sign up</h2>
                <form method="POST" class="register-form" id="register-form">
                  <div class="form-group">
                    <label for="name">
                      <i class="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Full Name"
                      value={this.state.fullname}
                      onChange={this.onChangeRegister}
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">
                      <i class="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={this.state.email}
                      onChange={this.onChangeRegister}
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">
                      <i class="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                      value={this.state.phone}
                      onChange={this.onChangeRegister}
                    />
                  </div>
                  <div class="form-group">
                    <label for="pass">
                      <i class="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChangeRegister}
                    />
                  </div>

                  <div class="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      class="form-submit"
                      value="Register"
                      onClick={this.funRegister}
                    />
                    <p class="copyright">
                      Already Registered? <Link to="./Login">Login</Link>
                    </p>
                  </div>
                </form>
              </div>
              <div class="signup-image">
                <figure>
                  <img src="images/signup-image.jpg" alt="sign up image" />
                </figure>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
