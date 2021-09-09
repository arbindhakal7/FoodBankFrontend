import React, { Component } from "react";
import AdminNavBar from "./AdminNavBar";

export default class AdminFoodBank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodbanks: [],
      foodbankId: "",
      FoodBankName: "",
      availableFood: "",
      config: {
        headers: { Authorization: localStorage.getItem("token") },
      },
    };
  }

  handleDelete = (id) => {
    if (window.confirm("Are you sure to remove this Food bank from the list?"))
      Axios.delete("http://localhost:90/api/FoodBank/" + id, this.state.config)
        .then((res) => {
          const filteredfoodBank = this.state.foodbanks.filter((foodBank) => {
            return foodBank._id !== id;
          });
          console.log(filteredfoodBank);
          this.setState({
            foodbanks: filteredfoodBank,
          });
        })
        .catch((err) => console.log(err.response));
  };

  handleUpdateClick = (id) => {
    console.log(id);
    this.props.history.push(`/admindashboard/updatefoodbank/${id}`);
  };

  componentDidMount() {
    Axios.get("http://localhost:90/api/FoodBank", this.state.config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          foodbanks: res.data,
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
