import React, { Component } from "react";
import AdminNavBar from "./AdminNavBar";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'

export default class AdminAddFoodBank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FoodBankName: "",
      address: "",
      phone: "",
      config: {
        headers: { Authorization: localStorage.getItem("token") },
      },
    };
  }
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
    if (window.confirm("Are you sure to add this food bank on the list?"))
      axios
        .post("http://localhost:90/api/FoodBank", this.state, this.state.config)
        .then((res) => {
          this.props.history.push("/admindashboard/adminfoodbanks");
        })
        .catch((err) => console.log(err.response.data));
  };

  render() {
    return (
      <div>
        <AdminNavBar history={this.props.history} />

        <div className="container">
          <Form>
            <FormGroup>
              <Label for="FoodBankName">Food Bank Name</Label>
              <Input
                type="text"
                name="FoodBankName"
                id="FoodBankName"
                value={this.state.FoodBankName}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="phone">Phone Number</Label>
              <Input
                type="number"
                name="phone"
                id="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
            </FormGroup>

            <Button block color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
            <Button
              block
              color="danger"
              onClick={() => this.props.history.push("/admindash")}
            >
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
