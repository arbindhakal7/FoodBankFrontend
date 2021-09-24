import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { useParams, Redirect } from "react-router-dom";
import AdminNavBar from "../Admin/AdminNavBar";

export default function UpdateMessageStatus(props) {
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

  render() {
    return (
        <div>
            <AdminNavBar history = {this.props.history}/>
            
    </div>
    
    );
  }
}

