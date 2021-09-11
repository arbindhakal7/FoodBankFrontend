import React, { Component } from "react";
import AdminNavBar from "./AdminNavBar";
import { Link } from "react-router-dom";
import Axios from 'axios'

export default class AdminFoodBank extends Component {
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

  handleDelete = (id) => {
    if (window.confirm("Are you sure to remove this Food bank from the list?"))
      Axios.delete("http://localhost:90/api/FoodBank/" + id, this.state.config)
        .then((res) => {
          const filteredfoodBank = this.state.foodbanks.filter((foodBank) => {
            return foodBank._id !== id;
          });
          console.log(filteredfoodBank);
          this.setState({
            foodbanks: filteredfoodBank,
          });
        })
        .catch((err) => console.log(err.response));
  };

  handleUpdateClick = (id) => {
    console.log(id);
    this.props.history.push(`/admindashboard/updatefoodbank/${id}`);
  };

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
        <AdminNavBar history={this.props.history} />
        <div className="container">
          <div className="py-4">
            <h1>Food Bank List</h1>
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
                      <Link
                        class="btn btn-outline-primary mr-2"
                        onClick={() => this.handleUpdateClick(foodBank._id)}
                      >
                        Edit
                      </Link>
                      <Link
                        class="btn btn-danger"
                        onClick={() => this.handleDelete(foodBank._id)}
                      >
                        Delete
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
