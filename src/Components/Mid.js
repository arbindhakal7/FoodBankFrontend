import { Component } from "react";

import donated from './images/donated.jpeg'
import donate from './images/donate.jpeg'







export default class Mid extends Component {
  render() {
    return (          
         <div>
           <img src={donate} alt="donate" />
           <img src={donated} alt="donated" />

          
      
    </div>
    );
  }
}
