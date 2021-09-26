import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import NavBar from "./NavBar";
import thanks from "./images/thanks.jpg"

export default class ViewDonations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donatefoods: [],
      donorName: "",
      donateId: "",
      foodtype: "",
      country: "",
      district: "",
      street: "",
      phone: "",
      date: "",
      config: {
        headers: { Authorization: localStorage.getItem("token") },
      },
    };
  }

  handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this donation from the list?"))
      Axios.delete(
        "http://localhost:90/api/DonateFood/" + id,
        this.state.config
      )
        .then((res) => {
          const filteredDonateFood = this.state.donatefoods.filter((req) => {
            return req._id !== id;
          });
          console.log(filteredDonateFood);
          this.setState({
            donatefoods: filteredDonateFood,
          });
        })
        .catch((err) => console.log(err.response));
  };

  handleUpdateClick = (id) => {
    console.log(id);
    this.props.history.push(`/userdashboard/updatedonation/${id}`);
  };

  componentDidMount() {
    Axios.get("http://localhost:90/api/DonateFood", this.state.config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          donatefoods: res.data,
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
            <h1>Donation List</h1>
            <table class="table border shadow">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Food Type</th>
                  <th scope="col">Date</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.donatefoods.map((donation) => (
                  <tr key={donation._id}>
                    <th scope="row"></th>
                    <td>{donation.donorName}</td>
                    <td>
                      {donation.country},{donation.district},{donation.street}
                    </td>
                    <td>{donation.phone}</td>
                    <td>{donation.foodtype}</td>
                    <td>{donation.date}</td>
                    <td>
                      <Link
                        class="btn btn-outline-primary mr-2"
                        onClick={() => this.handleUpdateClick(donation._id)}
                      >
                        Edit
                      </Link>
                      <Link
                        to
                        class="btn btn-danger"
                        onClick={() => this.handleDelete(donation._id)}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className = "classs">
          <img src ={thanks}  alt = "trust"/>
          </div>
        </div>
      </div>
    );
  }
}
