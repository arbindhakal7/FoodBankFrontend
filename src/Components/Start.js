import { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../Components/PrivateRoute';
import NoMatch from './NoMatch';
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import UserDashboard from "./UserDashboard";
import AddDonation from "./AddDonation";
import AddRequest from "./AddRequest";

class Start extends Component {
    render() {
        return (

            <div className="Start">
               <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/register' component ={Register} />
                    <Route path='/login' component ={Login} />
                    <Route path='/userdash' component ={UserDashboard} />
                    <PrivateRoute path='/userdashboard/adddonation' component={AddDonation} />
                    <PrivateRoute path='/userdashboard/addrequest' component={AddRequest} />
            <Route>
            <NoMatch />
          </Route>
                 </Switch>
                 </BrowserRouter>
            </div>

        )
    }
}
export default Start