import { Component } from "react";

export default class HomeNavBar extends Component {
  render() {
    return (
      <div>
        <div class="navbar navbar-expand-lg bg-dark navbar-dark">
          <div class="container-fluid">
            <a href="/" class="navbar-brand">
              Food Bank
            </a>
            <button
              type="button"
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div class="navbar-nav ml-auto">
                <a href="login" class="nav-item nav-link">
                  Login
                </a>
                <a href="register" class="nav-item nav-link">
                  Register
                </a>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Features
                  </a>
                  <div class="dropdown-menu">
                    <a href="login" class="dropdown-item">
                      Donate Food
                    </a>
                    <a href="login" class="dropdown-item">
                      Request Food
                    </a>
                    <a href="login" class="dropdown-item">
                      View Food Banks
                    </a>
                  </div>
                </div>
                <a href="contact" class="nav-item nav-link">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
