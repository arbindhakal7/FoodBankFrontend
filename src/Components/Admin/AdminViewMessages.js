import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import AdminNavBar from "./AdminNavBar";

export default class ViewMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      fullname: "",
      email: "",
      phone: "",
      message: "",
      status: "",
      config: {
        headers: { Authorization: localStorage.getItem("token") },
      },
    };
  }

  handleUpdateClick = (id) => {
    console.log(id);
    this.props.history.push(`/admindashboard/updatemessagestatus/${id}`);
  };


  componentDidMount() {
    Axios.get("http://localhost:90/api/contact", this.state.config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          messages: res.data,
        });
      })
      .catch((err) => console.log(err.response));
  }

  render() {
    return (
        <div>
            <AdminNavBar/>
      <div className="container">
        <div className="py-4">
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Message</th>
                <th scope="col">Status</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.messages.map((contact) => (
                <tr key={contact._id}>
                  <th scope="row"></th>
                  <td>{contact.fullname}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>{contact.status}</td>

                  
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
