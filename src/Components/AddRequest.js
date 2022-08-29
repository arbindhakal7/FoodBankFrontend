import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import NavBar from "./NavBar";

export default class AddRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestName: "",
      phone: "",
      country: "",
      foodtype: "",
      district: "",
      street: "",
      date: "",
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
    if (window.confirm("Are you ready to request Food?"))
      event.preventDefault();
    axios
      .post(
        "http://localhost:90/api/RequestFood",
        this.state,
        this.state.config
      )
      .then((res) => {
        console.log(res);
        this.props.history.push("/userdashboard/viewrequest");
      })
      .catch((err) => console.log(err.response.data));
  };
  // handleEdit = (requestId) => {
  //     this.props.history.push(`/userdash/RequestFood/${requestId}`);
  // }
  render() {
    return (
      <div>
        <NavBar history={this.props.history} />

        <div className="container">
          <Form>
            <FormGroup>
              <Label for="requestName">Full Name</Label>
              <Input
                type="text"
                name="requestName"
                id="requestName"
                value={this.state.requestName}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone Number </Label>
              <Input
                type="number"
                name="phone"
                id="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
              <FormGroup>
                <FormGroup>
                  <Label for="foodtype">Food Type</Label>
                  <Input
                    type="select"
                    name="foodtype"
                    id="foodtype"
                    value={this.state.foodtype}
                    onChange={this.handleChange}
                  >
                    <option value="">Select Requirement Type</option>
                    <option value="fresh">fresh</option>
                    <option value="stored">stored</option>
                    <option value="cooked">cooked</option>
                    <option value="any">any of above</option>
                  </Input>
                </FormGroup>

                <Label for="country">Country</Label>
                <Input
                  type="text"
                  name="country"
                  id="country"
                  value={this.state.country}
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="district">District</Label>
                <Input
                  type="text"
                  name="district"
                  id="district"
                  value={this.state.district}
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="street">Street</Label>
                <Input
                  type="text"
                  name="street"
                  id="street"
                  value={this.state.street}
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="date">Date</Label>
                <Input
                  type="datetime-local"
                  name="date"
                  id="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </FormGroup>
            <Button block color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
            <Button
              block
              color="danger"
              onClick={() => this.props.history.push("/userdash")}
            >
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
