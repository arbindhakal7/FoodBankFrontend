import React, { Component } from "react";
import NavBar from "./NavBar";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import FoodBankList from "./FoodBanksList";
import capture from "./images/Capture.PNG"


export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileId: "",
      fullname: "",
      phone: "",
      role: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      lastDonation: "",
      lastRequest: "",
      foodbanks: [],
      foodbankId: "",
      FoodBankName: "",
      availableFood: "",
      config: {
        headers: { Authorization: localStorage.getItem("token") },
      },
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    this.setState({
      fullname: decoded.fullname,
      phone: decoded.phone,
      role: decoded.role,
      email: decoded.email,
      dateOfBirth: decoded.dateOfBirth,
      gender: decoded.gender,
      lastDonation: decoded.lastDonation,
      lastRequest: decoded.lastRequest,
      image: decoded.image,
      UserId: decoded.id,
    });
  }

  render() {
    return (
      <div>
        <NavBar history={this.props.history} />
        <div id="main" class="wrapper style1">
          <section class="container">
            <header class="major">
              <h2>Hello, {this.state.fullname}</h2>
              <br />
              <span class="byline">Welcome to the User Dashboard</span>
            </header>

            <section class="container">
              <h2>Food Banks</h2>
                <FoodBankList />
              </section>
          </section>
        </div>
      </div>
    );
  }
}
