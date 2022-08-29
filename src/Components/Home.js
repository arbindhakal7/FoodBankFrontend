import { Component } from "react";
import HomeNavBar from "./HomeNav";
import Mid from "./Mid";

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeNavBar />
        <div>
        <Mid/>
        </div>
      </div>
    );
  }
}
