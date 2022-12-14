import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class AdminFoodBankList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodbanks: [],
      foodbankId: "",
      FoodBankName: "",
      address: "",
      phone: "",
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
        <div className="py-4">
          <h1>Food Bank List</h1>
          <div className="py-table-wrapper-scroll-y my-custom-scrollbar">
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Food Bank Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Address</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.foodbanks.map((foodBank) => (
                <tr key={foodBank._id}>
                  <th scope="row"></th>
                  <td>{foodBank.FoodBankName}</td>
                  <td>{foodBank.phone}</td>
                  <td>{foodBank.address}</td>
                  <td>
                    <Link class="mr-2" to="/admindashboard/adminfoodbanks">
                      Manage
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
}
