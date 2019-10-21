import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <footer>
      <div className="dark">
        <div className="container">
          <div className="column-left">
            <div className="title">Lorem ipsum</div>
            <ul>
              <li>
                <Link to="Lorem ipsum">Lorem ipsum</Link>
              </li>
              <li>
                <Link to="Lorem ipsum">Lorem ipsum</Link>
              </li>
              <li>
                <Link to="Lorem ipsum">Lorem ipsum</Link>
              </li>
              <li>
                <Link to="Lorem ipsum">Lorem ipsum</Link>
              </li>
              <li>
                <Link to="Lorem ipsum">Lorem ipsum</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
