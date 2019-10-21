import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = { menuOpen: false };
  handleClick = context => {
    switch (context) {
      case "open":
        this.setState(prev => ({
          menuOpen: true
        }));
        break;
      case "close":
        this.setState(prev => ({
          menuOpen: false
        }));
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <header>
        <nav>
          <div className="container">
            <div className="nav-pancake">
              <i
                id="openMenu"
                className="fas fa-bars"
                onClick={() => this.handleClick("open")}
              ></i>
            </div>
            <ul id="navList" className={this.state.menuOpen ? "open" : ""}>
              <li id="closeMenu" onClick={() => this.handleClick("close")}>
                <i className="fas fa-times-circle"></i>
              </li>
              <li>
                <NavLink to="/" exact onClick={() => this.handleClick("close")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => this.handleClick("close")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
