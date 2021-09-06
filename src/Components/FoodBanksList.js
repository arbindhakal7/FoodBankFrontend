import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class BloodBanks extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    Axios.get("http://localhost:90/api/FoodBank", this.state.config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          foodbanks: res.data,
        });
      })
      .catch((err) => console.log(err.response));
  }

  render() {
    return (
      <div className="container">
        <div className="py-table-wrapper-scroll-y my-custom-scrollbar">
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Food Bank Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.foodbanks.map((foodbank) => (
                <tr key={foodbank._id}>
                  <th scope="row"></th>
                  <td>{foodbank.FoodBankName}</td>
                  <td>
                    <Link class="mr-2" to="/userdashboard/AddDonation">
                      Donate
                    </Link>
                  </td>
                  <td>
                    <Link class="mr-2" to="/userdashboard/AddRequest">
                      Request
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
