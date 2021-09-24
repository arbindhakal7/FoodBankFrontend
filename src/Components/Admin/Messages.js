import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      contactId: "",
      fullname: "",
      email: "",
      phone: "",
      message: "",
      config: {
        headers: { Authorization: localStorage.getItem("token") },
      },
    };
  }

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
      <div className="container">
        <div className="py-4">
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Contact Name</th>
                {/* <th scope="col">Phone Number</th> */}
                <th scope="col">Email</th>
                <th scope="col">Message</th>

                <th scope="col">Action</th>    
              </tr>
            </thead>
            <tbody>
              {this.state.messages.map((contact) => (
                <tr key={contact._id}>
                  <th scope="row"></th>
                  <td>{contact.fullname}</td>
                  {/* <td>{contact.phone}</td> */}
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>
                      <Link class="mr-2" to="/admindashboard/messages">
                        {" "}
                        Manage
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
