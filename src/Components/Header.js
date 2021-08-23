import { Component } from "react";
import {NavLink} from 'react-router-dom'


class Header extends Component{
    render(){
        return(
             <div className = "Header">
          <nav id ="nav">
            <NavLink to = '/'> Home </NavLink>
            <NavLink to = '/'> Login </NavLink>
            <NavLink to = '/'> Register </NavLink>

            
            </nav>
            </div>
        )
    }
}
export default Header