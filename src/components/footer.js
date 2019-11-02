import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer grey darken-4">
      <div className="container">
        <div className="row">
          <div className="col s12 l6">
            <h5>About Me</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="col s12 l4 offset-l2">
            <h5>Connect</h5>
            <ul>
              <li>
                <a href="!#" className="grey-text text-lighten-3">
                  Facebook
                </a>
              </li>
              <li>
                <a href="!#" className="grey-text text-lighten-3">
                  Twitter
                </a>
              </li>
              <li>
                <a href="!#" className="grey-text text-lighten-3">
                  Linked In
                </a>
              </li>
              <li>
                <a href="!#" className="grey-text text-lighten-3">
                  Instragram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright grey darken-4">
        <div className="container center-align">
          &copy; 2019 copyright Vitus
        </div>
      </div>
    </footer>
  );
};
export default Footer;
