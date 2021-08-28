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

        <section class="ftco-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6 text-center mb-5">
                        <h2 class="heading-section">User Dashboard</h2>
                    </div>
                </div>
            </div>
            <div class="container">
                <nav class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
                    <div class="container">
                        <a class="navbar-brand" href="index.html"></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="fa fa-bars"></span> Menu
                        </button>

                        <div class="collapse navbar-collapse" id="ftco-nav">
                            <ul class="navbar-nav ml-auto mr-md-3">
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Profile</a>
                                    <div class="dropdown-menu">
                                        <a href="login" class="dropdown-item">View Profile</a>
                                        <a href="login" class="dropdown-item">Edit Profile</a>
                                    </div>
                                </div>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Donate</a>
                                    <div class="dropdown-menu">
                                        <a href="login" class="dropdown-item">Add Donations</a>
                                        <a href="login" class="dropdown-item">View Donations</a>
                                    </div>
                                </div>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Requests</a>
                                    <div class="dropdown-menu">
                                        <a href="login" class="dropdown-item">Add Request</a>
                                        <a href="login" class="dropdown-item">View Request</a>
                                    </div>
                                </div>
                                <li class="nav-item"><a href="#" class="nav-link">Food Bank</a></li>
                                <li class="nav-item"><a href="#" class="nav-link"></a></li>
                                <li class="dropdown nav-item d-md-flex align-items-center">
                                </li>
                            </ul>
                            <NavbarText>
                                <Button id="btn-logout" onClick={handleLogout} color='danger'>Logout</Button>
                            </NavbarText>
                        </div>
                    </div>
                </nav>
            </div>

        </section>
    )
}

