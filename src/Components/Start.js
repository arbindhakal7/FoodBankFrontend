import { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import Home from "./Home";
import Register from "./Register";
class Start extends Component {
    render() {
        return (

            <div className="Start">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/" component ={Register} />
                 
                 </Switch>
            </div>

        )
    }
}
export default Start