import React, { Component } from "react";
import AdminNavBar from "./AdminNavBar";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class AdminViewRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestfoods: [],
      requestId: "",
      requestName: "",
      phone: "",
      foodtype: "",
      country: "",
      district: "",
      street: "",
      date: "",
      config: {
        headers: { Authorization: localStorage.getItem("token") },
      },
    };
  }

  handleDelete = (id) => {
    if (window.confirm("Are you sure to remove this request from the list?"))
      Axios.delete(
        "http://localhost:90/api/RequestFood/" + id,
        this.state.config
      )
        .then((res) => {
          const filteredReqFood = this.state.requestfoods.filter((req) => {
            return req._id !== id;
          });
          console.log(filteredReqFood);
          this.setState({
            requestfoods: filteredReqFood,
          });
        })
        .catch((err) => console.log(err.response));
  };

  handleUpdate = (id) => {
    console.log(id);
    this.props.history.push(`/admindashboard/updaterequeststatus/${id}`);
  };

  componentDidMount() {
    Axios.get("http://localhost:90/api/admin/requests", this.state.config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          requestfoods: res.data,
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
            <h1>Request List</h1>
            <table class="table border shadow">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col"> Food Type</th>
                  <th scope="col"> Address</th>
                  <th scope="col">Date</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.requestfoods.map((request) => (
                  <tr key={request._id}>
                    <th scope="row"></th>
                    <td>{request.requestName}</td>
                    <td>{request.phone}</td>
                    <td>{request.foodtype}</td>
                    <td>
                      {request.country}, {request.district}, {request.street}
                    </td>
                    <td>{request.date}</td>
                    <td>
                    <Link
                        class="btn btn-primary"
                        onClick={() => this.handleUpdate(request._id)}
                      >
                        Edit
                      </Link>

                      <Link
                        class="btn btn-danger"
                        onClick={() => this.handleDelete(request._id)}
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
