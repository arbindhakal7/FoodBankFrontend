import React, { Component } from "react";
import NavBar from "./NavBar";
import jwt_decode from "jwt-decode";
import FoodBankList from "./FoodBanksList";
import welcome from "./images/welcome.PNG";

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
        <div>
          <section class="container">
            <div>
              <header class="major">
                <h2>
                  <img src={welcome} alt="welcome" /> {this.state.fullname}
                </h2>
                &nbsp;&nbsp;{" "}
                <span class="byline">This is your User Dashboard</span>
              </header>

              <h2>&nbsp;&nbsp;Food Banks</h2>
              <FoodBankList />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
