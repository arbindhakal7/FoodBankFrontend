import { Component } from "react";
import HomeNavBar from "./HomeNav";
import '../css/Contact.css'
import contact from './images/contact.png'
import axios from "axios";

export default class Contact extends Component {
	constructor(props) {
	super(props);
	
	this.state = {
    id: "",
    fullname: "",
    email: "",
    phone: "",
    message: "",
  };
}
  textContactHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  
  sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:90/api/contact", this.state) 
      .then((res) => {
        this.props.history.push("/login");

      })
  };

  render() {
    return (
      <div>
        <HomeNavBar />

        <div class="contact1">
		<div class="container-contact1">
			<div class="contact1-pic js-tilt" data-tilt>
            <img src={contact} alt="contact" />
			</div>

			<form class="contact1-form validate-form">
				<span class="contact1-form-title">
					Get in touch !!!
				</span>

				<div class="wrap-input1 validate-input" data-validate = "Name is required">
					<input class="input1" type="text" name="fullname" placeholder="Name" value={this.state.fullname} onChange={this.textContactHandler}/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input class="input1" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.textContactHandler}/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Phone Number is required">
					<input class="input1" type="number" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.textContactHandler}/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea class="input1" name="message" placeholder="Message" value={this.state.message} onChange={this.textContactHandler}></textarea>
					<span class="shadow-input1"></span>
				</div>

				<div class="container-contact1-form-btn">
					<button class="contact1-form-btn" onClick={this.sendMessage}>
						<span>
							Send Email
							<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>
      </div>
    );
  }
}
