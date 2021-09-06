import React, { Component } from "react";
import NavBar from "./NavBar";
import jwt_decode from "jwt-decode";
import foodbanks from "../css/images/FoodBanks.jpg";
import { Link } from "react-router-dom";
import users from "../css/images/users.png";

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
            <div class="row no-collapse-1">
              <section class="4u">
                <a href="!#" class="image feature"></a>
                <img src={users} alt="Users" />
                <h3>Your Info</h3>
                <p>
                  Full Name : <i>{this.state.fullname}</i>
                </p>
                <p>
                  Phone Number : <i>{this.state.phone}</i>
                </p>
                <p>
                  Email : <i>{this.state.email}</i>
                </p>

                <Link
                  class="btn btn-primary mr-2"
                  to="/userdashboard/profile/:id"
                >
                  {" "}
                  Edit{" "}
                </Link>
              </section>
              <br />
              <section class="4u">
                <a href="/!#" class="image feature"></a>
                <img src={foodbanks} alt="foodbank" />
                <h3>Food Bank</h3>
                {/* <FoodBankList/> */}
              </section>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
