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
import FoodBank from "./FoodBanks";
import AdminDashboard from "./Admin/AdminDash";
import AdminRoute from "./Admin/AdminRoute";
import AdminAddFoodBank from "./Admin/AdminAddFoodBank";
import AdminFoodBank from "./Admin/AdminFoodBank";
import AdminViewUsers from "./Admin/AdminViewUsers";
import AdminUserDetails from "./Admin/AdminViewUserDetails";
import AdminViewDonations from "./Admin/AdminDonationView";
import AdminViewRequests from "./Admin/AdminRequestView";
import UpdateFoodBank from "./Admin/AdminUpdateFoodBank";
import UpdateDonationStatus from "./Admin/AdminUpdateDonation";
import UpdateRequestStatus from "./Admin/AdminUpdateRequest";
import ViewProfile from "./Admin/AdminViewProfile";
import UpdateProfile from "./Admin/AdminUpdateProfile";
import UpdateUserRole from "./Admin/AdminUpdateUser";
import Contact from "./Contact";
import ViewMessage from "./Admin/AdminViewMessages";
import ProfileUpload from "./ProfileUpload";

class Start extends Component {
  render() {
    return (
      <div className="Start">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route
              path="/contact"
              component={Contact}
            />
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

            <PrivateRoute
              path="/userdashboard/uploadimage/"
              component={ProfileUpload}
            />

            <PrivateRoute path="/userdashboard/Foodbank" component={FoodBank} />

            <AdminRoute path="/admindash/" component={AdminDashboard} />
            <AdminRoute
              path="/admindashboard/adminaddfoodbank"
              component={AdminAddFoodBank}
            />
            <AdminRoute
              path="/admindashboard/adminfoodbanks"
              component={AdminFoodBank}
            />
            <AdminRoute
              path="/admindashboard/adminviewusers"
              component={AdminViewUsers}
            />
            <AdminRoute
              path="/admindashboard/viewuserdetails/:id"
              component={AdminUserDetails}
            />
            <AdminRoute
              path="/admindashboard/viewuserdetails/:id"
              component={AdminUserDetails}
            />
            <AdminRoute
              path="/admindashboard/adminviewdonations"
              component={AdminViewDonations}
            />
            <AdminRoute
              path="/admindashboard/adminviewrequests"
              component={AdminViewRequests}
            />

            <AdminRoute
              path="/admindashboard/updatefoodbank/:id"
              component={UpdateFoodBank}
            />

            <AdminRoute
              path="/admindashboard/updatedonationstatus/:id"
              component={UpdateDonationStatus}
            />

            <AdminRoute
              path="/admindashboard/updaterequeststatus/:id"
              component={UpdateRequestStatus}
            />

            <AdminRoute
              path="/admindashboard/viewprofile"
              component={ViewProfile}
            />

            <AdminRoute
              path="/admindashboard/updateprofile"
              component={UpdateProfile}
            />
            

            <AdminRoute
              path="/admindashboard/updateuserrole/:id"
              component={UpdateUserRole}
            />
            <AdminRoute
              path="/admindashboard/messages"
              component={ViewMessage}
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
