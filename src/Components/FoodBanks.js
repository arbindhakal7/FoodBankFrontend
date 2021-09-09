import React, { Component } from "react";
import Axios from "axios";
import NavBar from "./NavBar";

export default class FoodBanks extends Component {
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
      <div>
        <NavBar history={this.props.history} />
        <div className="container">
          <div className="py-4">
            <h1>Food Bank List</h1>
            <table class="table border shadow">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Food Bank Name</th>
                  <th scope="col">Available Food Type</th>
                </tr>
              </thead>
              <tbody>
                {this.state.foodbanks.map((foodbank) => (
                  <tr key={foodbank._id}>
                    <th scope="row"></th>
                    <td>{foodbank.FoodBankName}</td>
                    <td>{foodbank.availableFood}</td>
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
