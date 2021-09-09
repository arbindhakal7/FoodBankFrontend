import React, { Component } from "react";
import AdminNavBar from "./AdminNavBar";

export default class AdminViewDonations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donatefoods: [],
      donorName: "",
      donationId: "",
      phone: "",
      foodtype: "",
      country: "",
      district: "",
      street: "",
      config: {
        headers: { Authorization: localStorage.getItem("token") },
      },
    };
  }

  handleDelete = (id) => {
    if(window.confirm('Are you sure to remove this donation from the list?'))
	Axios.delete('http://localhost:90/api/DonateFood/' + id, this.state.config)
	.then((res)=> {
		const filteredDonateFood = this.state.donatefoods.filter(req => {
			return req._id !== id;
		});
		console.log(filteredDonateFood);
		this.setState({
			donatefoods: filteredDonateFood
		});
	 
	}).catch(err => console.log(err.response));
  }

  handleUpdateClick = (id) => {
	  console.log(id)
	  this.props.history.push(`/admindashboard/updatedonationstatus/${id}`);
  }

componentDidMount(){
  Axios.get('http://localhost:90/api/admin/donations', this.state.config)
  .then((res)=> {
    console.log(res.data)
    this.setState({
        donatefoods: res.data
    })
  }).catch(err => console.log(err.response));
}


  render() {
    return (
      <div>
        <AdminNavBar history={this.props.history} />
      </div>
    );
  }
}
