import React, { Component } from "react";
import AdminNavBar from "./AdminNavBar";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'

export default class AdminAddFoodBank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FoodBankName: "",
      availableFood: "",
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
    if (window.confirm("Are you sure to add this blood bank on the list?"))
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
              <Label for="availableFood">Available Food Type</Label>
              <Input
                type="text"
                name="availableFood"
                id="availableFood"
                value={this.state.availableFood}
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
