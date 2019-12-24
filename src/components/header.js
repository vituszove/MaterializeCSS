import React, { Component } from "react";
import style from "./stylesheets/header.module.css";
import M from "materialize-css/dist/js/materialize.min.js";

class Header extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".tooltipped");
      var instances = M.Tooltip.init(elems, {
        exitDelay: 0
      });
    });
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".scrollspy");
      var instances = M.ScrollSpy.init(elems, {
        throttle: 150
      });
    });
  }
  render() {
    return (
      <header className={style.header}>
        <nav className="nav-wrapper transparent z-depth-0" id="#home">
          <div className="container">
            <a href="" className="brand-logo">
              Dev Vitus
            </a>
            <a href="" className="sidenav-trigger" data-target="mobile-menu">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a
                  href="#"
                  className="tooltipped btn-floating btn-small purple darken-1"
                  data-tooltip="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tooltipped btn-floating btn-small blue darken-2"
                  data-tooltip="Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tooltipped btn-floating btn-small blue"
                  data-tooltip="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
            <ul className="sidenav grey lighten-2" id="mobile-menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>{" "}
          </div>
        </nav>
        <div className="landing-section">
          <div className="landing-inner">
            <h1 className="white-text center">Web Developer</h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
