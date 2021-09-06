import React from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import jwt_decode from "jwt-decode";
import NavBar from "./NavBar";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      UserId: "",
      fullname: "",
      phone: "",
      role: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      image: "",
      config: {
        headers: { Authorization: localStorage.getItem("token") },
        isUpdate: false,
      },
    };
  }
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    axios
      .get("http://localhost:90/api/profile/" + decoded.id, this.state.config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          fullname: res.data.fullname,
          phone: res.data.phone,
          role: res.data.role,
          email: res.data.email,
          dateOfBirth: res.data.dateOfBirth,
          gender: res.data.gender,
          image: res.data.image,
        });
      });
  };

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => console.log(this.state)
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    if (window.confirm("Do you want to save changes?"))
      axios
        .put(
          "http://localhost:90/api/profile/" + decoded.id,
          this.state,
          this.state.config,
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        )
        .then((res) => {
          this.setState({
            fullname: "",
            phone: "",
            role: "",
            email: "",
            dateOfBirth: "",
            gender: "",
          });
          this.props.history.push("/userdashboard/viewprofiledetails");
        })
        .catch((err) => console.log(err.response.data.message));
  };

  render() {
    return (
      <div>
        <NavBar history={this.props.history} />

        <div className="container">
          <Form>
            <FormGroup>
              <Label for="fullname">Full Name</Label>
              <Input
                name="fullname"
                type="text"
                value={this.state.fullname}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                name="phone"
                type="text"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup></FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="dateOfBirth">Date Of Birth </Label>
              <Input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={this.state.dateOfBirth}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input
                type="select"
                name="gender"
                id="gender"
                value={this.state.gender}
                onChange={this.handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </Input>
            </FormGroup>

            <Button block color="primary" onClick={this.handleSubmit}>
              Update
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
