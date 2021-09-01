import React from 'react'
import { Navbar, NavItem, NavbarText, Button, Nav, } from 'reactstrap';
import { NavLink, Switch, Link } from 'react-router-dom';

export default function NavBar(props) {

    const handleLogout = () => {
        if (window.confirm('Log out?'))
            localStorage.removeItem('token');
        props.history.push('/');

    }

    return (
        <div>
        
        <Navbar color='dark' dark expand='md'>
        <Nav id="nav" className='mr-auto' >
                <ul id="navul">
                <NavItem id="navitem">
                        <Link to='/userdash/nav'>Dashboard</Link>                            
                    </NavItem>
                   <NavItem id="navitem">
                        <Link to='/userdash/nav'>User Profile</Link>
                        <ul>
                            <Link to='/userdashboard/viewprofiledetails' id="navlist">View Profile</Link>
                            <Link to='/userdashboard/profile/:id' id="navlist">Edit Profile</Link>
                        </ul>
                    </NavItem>
                    <NavItem id="navitem">
                        <NavLink to='/userdash/nav'>Donate</NavLink>
                        <ul>
                            <Link to='/userdashboard/adddonation' id="navlist">Add Donation</Link>
                            <Link to='/userdashboard/viewdonation' id="navlist">View Donations</Link>
                        </ul>
                    </NavItem >
                    <NavItem id="navitem">
                        <NavLink to='/userdash/nav'>Requests</NavLink>
                        <ul>
                            <Link to='/userdashboard/addrequest' id="navlist">Add Request</Link>
                            <Link to='/userdashboard/viewrequest' id="navlist">View Request</Link>
                        </ul>
                    </NavItem>
                    <NavItem id="navitem">
                        <NavLink to='/userdashboard/foodBank'>Food Bank</NavLink>
                    </NavItem>
                </ul>
            </Nav>
            <NavbarText>
            <Button id="btn-logout" onClick={handleLogout} color='danger'>Logout</Button>
            </NavbarText>
        </Navbar>
        <Switch>
          
        </Switch>
    </div>

        
        
    )
}

