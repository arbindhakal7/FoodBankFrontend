import { Component } from "react";

import donation from './images/donation.jpg'
import donations from './images/donations.jpg'






export default class Mid extends Component {
  render() {
    return (          
         <div>
          <img src={donation} alt="donation" />
          <img src={donations} alt="donations" />
      
    </div>
    );
  }
}
