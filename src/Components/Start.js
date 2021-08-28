import { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import UserDashboard from "./UserDashboard";

class Start extends Component {
    render() {
        return (

            <div className="Start">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/register" component ={Register} />
                    <Route path="/login" component ={Login} />
                    <Route path="/userdash" component ={UserDashboard} />
                    {/* <Route path="/userdashboard/adddonation" component ={AddDonation} /> */}
            
                 </Switch>
            </div>

        )
    }
}
export default Start