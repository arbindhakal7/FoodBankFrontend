import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import NavBar from "./NavBar";

export default class ViewRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestfoods: [],

      requestId: "",
      requestName: "",
      country: "",
      district: "",
      street: "",
      foodtype: "",
      date: "",
      phone: "",
      config: {
        headers: { Authorization: localStorage.getItem("token") },
      },
    };
  }

  handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this request?"))
      Axios.delete(
        "http://localhost:90/api/RequestFood/" + id,
        this.state.config
      )
        .then((res) => {
          const filteredRequestFood = this.state.requestfoods.filter((req) => {
            return req._id !== id;
          });
          console.log(filteredRequestFood);
          this.setState({
            requestfoods: filteredRequestFood,
          });
        })
        .catch((err) => console.log(err.response));
  };

  handleUpdateClick = (id) => {
    console.log(id);
    this.props.history.push(`/userdashboard/updaterequest/${id}`);
  };
  handleViewClick = (id) => {
    console.log(id);
    this.props.history.push(`/userdashboard/viewrequestdetails/${id}`);
  };

  componentDidMount() {
    Axios.get("http://localhost:90/api/RequestFood", this.state.config)
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
        <NavBar history={this.props.history} />
        <div className="container">
          <div className="py-4">
            <h1>Request List</h1>
            <table class="table border shadow">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>

                  <th scope="col">Request Name</th>
                  <th scope="col"> Food Type</th>
                  <th scope="col"> Phone Number</th>
                  <th scope="col">Address</th>
                  {/* <th scope="col"> Date</th> */}

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.requestfoods.map((request) => (
                  <tr key={request._id}>
                    <th scope="row"></th>
                    <td>{request.requestName}</td>
                    <td>{request.foodtype}</td>
                    <td>{request.phone}</td>
                    <td>
                      {request.country},{request.district},{request.street}
                    </td>
                    <td>
                      <Link
                        to
                        class="btn btn-outline-primary mr-2"
                        onClick={() => this.handleUpdateClick(request._id)}
                      >
                        Edit
                      </Link>
                      <Link
                        to
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
