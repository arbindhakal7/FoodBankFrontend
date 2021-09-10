import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { useParams, Redirect } from "react-router-dom";
import AdminNavBar from "../Admin/AdminNavBar";

export default function UpdateDonationStatus(props) {
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
     status:'',
      config: {
        headers: { Authorization: localStorage.getItem("token") },
        isUpdate: false,
      },
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    if (window.confirm("Are you sure to update the user donation status ?"))
      event.preventDefault();
    axios
      .put(
        "http://localhost:90/api/admin/" + this.props.id + '/status',
        this.state,
        this.state.config
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.response.data));
  };

  handleUpdate = () => {};
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
      return <Redirect to="/admindashboard/adminviewdonations" />;
    }
  };
  componentDidMount = () => {
    axios
      .get(
        "http://localhost:90/api/DonateFood/" + this.state.id,
        this.state.config
      )
      .then((res) => {
        console.log(res);
        this.setState({
          status: res.data.status
        });
      })
      .catch((err) => console.log(err.response.data));
  };

  render() {
    return (
        <div>
            <AdminNavBar history = {this.props.history}/>
        
        <div className='container'>
        <Form>

            <FormGroup>
            <Label for='status'>Status</Label>
            <Input type='select' name='status' id='status'
            value ={this.state.status}
            onChange={this.handleChange} >
                <option value=''>Donate Status</option>
                <option value='donated'>Donated</option>
                <option value='stocked'>Stocked</option>
                <option value='on the way'>On the way</option>
            </Input>
        </FormGroup>
            <Button block color="primary" onClick={this.handleSubmit}>Submit</Button>
            {this.handleCancel()}
            <Button block color='danger' onClick={this.setRedirect}>Cancel</Button>
        </Form>
    </div>
    </div>
    
    );
  }
}

