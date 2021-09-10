import React, { Component } from "react";
import AdminNavBar from "./AdminNavBar";

export default function AdminViewRequestDetails(props) {
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
  componentDidMount = () => {
    axios
      .get(
        "http://localhost:3000/api/RequestFood/" + this.state.id,
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
        <div id="main" class="wrapper style1">
          <section class="container">
            <section class="4u">
              <h3>User Request Details</h3>
              <p>
                Full Name : <i>{this.state.requestName}</i>
              </p>
              <p>
                Phone : <i>{this.state.phone} </i>
              </p>
              <p>
                Food Type: <i>{this.state.foodtype}</i>
              </p>
              <p>
                Country: <i>{this.state.country}</i>
              </p>
              <p>
                District: <i>{this.state.district}</i>
              </p>
              <p>
                Street: <i>{this.state.street}</i>
              </p>
              <p>
                Date : <i>{this.state.date}</i>
              </p>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
