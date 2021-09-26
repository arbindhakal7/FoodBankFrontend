import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import role from '../images/role.png'
import { useParams, Redirect } from "react-router-dom";
import NavBarAdmin from "./AdminNavBar";

export default function UpdateUserRole(props) {
  let { id } = useParams();
  return (
    <div>
      <UpdateForm id={id} />
    </div>
  );
}

class UpdateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      fullname: "",
      phone: "",
      role: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      config: {
        headers: { Authorization: localStorage.getItem("token") },
      },
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    if (window.confirm("Are you sure to update user current role ?"))
      event.preventDefault();
    axios
      .put(
        "http://localhost:90/api/admin/" + this.props.id + "/role",
        this.state,
        this.state.config
      )
      .then((res) => {})
      .catch((err) => console.log(err.response.data));
  };
  state = {
    redirect: false,
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  handleCancel = () => {
    if (this.state.redirect) {
      return <Redirect to="/admindashboard/adminviewusers" />;
    }
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:90/api/admin/" + this.state.id, this.state.config)
      .then((res) => {
        console.log(res);
        this.setState({
          role: res.data.role,
        });
      })
      .catch((err) => console.log(err.response.data));
  };

  render() {
    return (
      <div>
        <NavBarAdmin history={this.props.history} />
        <div className = 'updaterole'>
        <img src={role} alt="role" />
        <div className="container">
          <Form>
            <FormGroup>
              <Label for="role">Role</Label>
              <Input
                type="select"
                name="role"
                id="role"
                value={this.state.role}
                onChange={this.handleChange}
              >
                <option value="">Role</option>
                <option value="user">user</option>
                <option value="admin">admin</option>
              </Input>
            </FormGroup>

            <Button block color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
            {this.handleCancel()}
            <Button block color="danger" onClick={this.setRedirect}>
              Cancel
            </Button>
          </Form>
        </div>
      </div>
      </div>
    );
  }
}
