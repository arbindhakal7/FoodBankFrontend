import React, { Component } from "react";
import AdminNavBar from "./AdminNavBar";
import axios from "axios";
import { Link } from "react-router-dom";

export default class AdminViewDonations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donatefoods: [],
      donorName: "",
      donationId: "",
      phone: "",
      foodtype: "",
      country: "",
      district: "",
      street: "",
      date: "",
      status:"",
      config: {
        headers: { Authorization: localStorage.getItem("token") },
      },
    };
  }

  handleDelete = (id) => {
    if (window.confirm("Are you sure to remove this donation from the list?"))
      axios.delete(
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
    this.props.history.push(`/admindashboard/updatedonationstatus/${id}`);
  };

  componentDidMount() {
    axios.get("http://localhost:90/api/admin/donations", this.state.config)
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
        <AdminNavBar history={this.props.history} />
        <div className="container">
          <div className="py-4">
            <h1>Donation List</h1>
            <table className="table border shadow">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Food Type</th>
                  <th scope ="col">Date</th>
                  <th scope ="col"> Status </th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.donatefoods.map((donation) => (
                  <tr key={donation._id}>
                    <th scope="row"></th>
                    <td>{donation.donorName}</td>
                    <td>
                      {donation.street},<br/>
                      {donation.district}, 
                      {donation.country}
                    </td>
                    <td>{donation.phone}</td>
                    <td>{donation.foodtype}</td>
                    <td>{donation.date}</td>
                    <td>{donation.status}</td>
                    <td>
                      <Link
                        class="btn btn-primary"
                        onClick={() => this.handleUpdateClick(donation._id)}
                      >
                        Edit
                      </Link>

                      <Link
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
        </div>
      </div>
    );
  }
}
