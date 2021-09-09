import React, { Component } from "react";
import Axios from 'axios'


export default class AdminUserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      userId: "",
      fullname: "",
      phone: "",
      address: "",
      role: "",
      config: {
        headers: { Authorization: localStorage.getItem("token") },
      },
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:90/api/admin/users", this.state.config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => console.log(err.response));
  }

  render() {
    return <div></div>;
  }
}
