import React, { Component } from "react";
import AdminNavBar from "./AdminNavBar";

export default class AdminViewUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      userId: "",
      fullname: "",
      phone: "",
      // country:'',
      // district: '',
      // street: '',
      role: "",
      config: {
        headers: { Authorization: localStorage.getItem("token") },
      },
    };
  }

  handleDelete = (id) => {
    if (window.confirm("Are you sure to remove this user from the list?"))
      Axios.delete("http://localhost:90/api/admin/" + id, this.state.config)
        .then((res) => {
          const filteredUser = this.state.users.filter((user) => {
            return user._id !== id;
          });
          console.log(filteredUser);
          this.setState({
            users: filteredUser,
          });
        })
        .catch((err) => console.log(err.response));
  };

  handleUpdateClick = (id) => {
    console.log(id);
    this.props.history.push(`/admindashboard/updateuserrole/${id}`);
  };
  handleViewClick = (id) => {
    console.log(id);
    this.props.history.push(`/admindashboard/viewuserdetails/${id}`);
  };

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
    return (
      <div>
        <AdminNavBar history={this.props.history} />
      </div>
    );
  }
}
