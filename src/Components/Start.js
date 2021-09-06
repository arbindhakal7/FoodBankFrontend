import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import NoMatch from "./NoMatch";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import UserDashboard from "./UserDashboard";
import AddDonation from "./AddDonation";
import UpdateRequest from "./UpdateRequest";
import UpdateDonation from "./UpdateDonation";
import AddRequest from "./AddRequest";
import ViewRequests from "./ViewRequest";
import ViewDonations from "./ViewDonations";
import Profile from "./Profile";
import ViewProfileDetails from "./ViewProfileDetails";

class Start extends Component {
  render() {
    return (
      <div className="Start">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/userdash" component={UserDashboard} />
            <PrivateRoute
              path="/userdashboard/adddonation"
              component={AddDonation}
            />
            <PrivateRoute
              path="/userdashboard/addrequest"
              component={AddRequest}
            />
            <PrivateRoute
              path="/userdashboard/viewdonation"
              component={ViewDonations}
            />
            <PrivateRoute
              path="/userdashboard/updatedonation/:id"
              component={UpdateDonation}
            />
            <PrivateRoute
              path="/userdashboard/viewrequest"
              component={ViewRequests}
            />
            <PrivateRoute
              path="/userdashboard/profile/:id"
              component={Profile}
            />
            <PrivateRoute
              path="/userdashboard/viewprofiledetails"
              component={ViewProfileDetails}
            />
            <PrivateRoute
              path="/userdashboard/updaterequest/:id"
              component={UpdateRequest}
            />

            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default Start;
