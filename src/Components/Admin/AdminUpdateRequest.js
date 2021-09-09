import React, { Component } from "react";
import { useParams } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function UpdatedRequest(props) {
  let { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
      <UpdateForm id={id} />
    </div>
  );
}

class UpdateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      requestName: "",
      phone: "",
      foodtype: "",
      country: "",
      district: "",
      street: "",
      date: "",
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
    if (window.confirm("Are you sure to update your request details?"))
      event.preventDefault();
    axios
      .put(
        "http://localhost:90/api/RequestFood/" + this.props.id,
        this.state,
        this.state.config
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.response.data));
  };

  handleUpdate = () => {};

  componentDidMount = () => {
    axios
      .get(
        "http://localhost:90/api/RequestFood/" + this.state.id,
        this.state.config
      )
      .then((res) => {
        console.log(res);
        this.setState({
          requestName: res.data.requestName,
          phone: res.data.phone,
          foodtype: res.data.foodtype,
          country: res.data.country,
          district: res.data.district,
          street: res.data.street,
          date: res.data.date,
        });
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
            </FormGroup>

            <FormGroup>
              <Label for="foodtype">Food Type</Label>
              <Input
                type="select"
                name="foodtype"
                id="foodtype"
                value={this.state.foodtype}
                onChange={this.handleChange}
              >
                <option value="">Select Food Type </option>
                <option value="fresh">Fresh</option>
                <option value="stored">Stored</option>
                <option value="cooked">Cooked</option>
                <option value="any">Any of the above</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="requireBefore">Date</Label>
              <Input
                type="datetime-local"
                name="date"
                id="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </FormGroup>

            <Button block color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
            <Button
              block
              color="danger"
              onClick={() => this.props.history.push("/")}
            >
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
